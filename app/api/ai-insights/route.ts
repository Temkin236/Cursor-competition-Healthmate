import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { adminAuth, adminDb } from '@/lib/firebase-admin';
import { HealthLog, AIInsights } from '@/types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    const body = await request.json();
    const { healthLog }: { healthLog: HealthLog } = body;

    // Validate input
    if (!healthLog) {
      return NextResponse.json({ error: 'Health log is required' }, { status: 400 });
    }

    // Prepare the prompt for GPT-4
    const prompt = `You are a compassionate and knowledgeable personal health assistant with expertise in nutrition, fitness, sleep, hydration, and mental well-being, familiar with Ethiopian cultural context and common lifestyles.

Input JSON:
{
  "date": "${healthLog.date}",
  "symptoms": "${healthLog.symptoms}",
  "meals": ${JSON.stringify(healthLog.meals)},
  "exercise": ${JSON.stringify(healthLog.exercise)},
  "sleep": ${JSON.stringify(healthLog.sleep)},
  "water_intake_liters": ${healthLog.waterIntakeLiters},
  "mood": "${healthLog.mood}"
}

Your tasks:

1. Analyze the user's symptom description and daily health data holistically.
2. Identify possible causes and assign an urgency level (low, medium, high).
3. Generate exactly 3 clear, actionable, personalized health tips the user can follow tomorrow.
4. Detect and describe any notable health or behavioral patterns.
5. Compose a short, encouraging motivational message tailored to the user's day.
6. Suggest 2 reflective questions to help the user improve their well-being.
7. Format your response strictly as JSON with keys:  
   - "summary" (concise, friendly day overview)  
   - "causes" (array of possible causes)  
   - "urgency" (string: "low", "medium", or "high")  
   - "tips" (array of 3 tips)  
   - "patterns" (string describing detected patterns)  
   - "motivation" (encouraging message)  
   - "questions" (array of 2 reflection questions)

Use simple language, avoid medical jargon or diagnoses, and incorporate culturally relevant references (e.g., common Ethiopian foods or activities). Do not include explanations beyond the JSON.

Example output:
{
  "summary": "Today, you reported mild headaches and felt tired. Your meals included injera and shiro, you exercised moderately, but your water intake was low.",
  "causes": ["Dehydration", "Lack of restful sleep", "Possible stress"],
  "urgency": "medium",
  "tips": [
    "Increase your water intake to at least 2 liters tomorrow.",
    "Try to improve your sleep quality by going to bed earlier.",
    "Take short breaks during the day to reduce stress."
  ],
  "patterns": "Your symptoms often occur on days with low hydration and less sleep.",
  "motivation": "Great job tracking your health today! Small changes can make a big difference.",
  "questions": [
    "What small habit can I change tonight to sleep better?",
    "How can I remind myself to drink water throughout the day?"
  ]
}`;

    // Call GPT-4
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // Using GPT-4 as GPT-5 is not yet available
      messages: [
        {
          role: "system",
          content: "You are a compassionate and knowledgeable personal health assistant with expertise in nutrition, fitness, sleep, hydration, and mental well-being, familiar with Ethiopian cultural context and common lifestyles. Provide wellness advice and insights based on user health data. Always respond with valid JSON only."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const responseText = completion.choices[0]?.message?.content;
    if (!responseText) {
      throw new Error('No response from AI');
    }

    // Parse the JSON response
    let aiInsights: AIInsights;
    try {
      const parsedResponse = JSON.parse(responseText);
      aiInsights = {
        summary: parsedResponse.summary,
        causes: parsedResponse.causes,
        urgency: parsedResponse.urgency,
        tips: parsedResponse.tips,
        patterns: parsedResponse.patterns,
        motivation: parsedResponse.motivation,
        questions: parsedResponse.questions,
        generatedAt: new Date(),
      };
    } catch (parseError) {
      console.error('Failed to parse AI response:', responseText);
      throw new Error('Invalid AI response format');
    }

    // Store the insights in Firestore
    const insightsRef = adminDb
      .collection('users')
      .doc(userId)
      .collection('logs')
      .doc(healthLog.id)
      .collection('insights')
      .doc('latest');

    await insightsRef.set({
      ...aiInsights,
      generatedAt: new Date(),
    });

    return NextResponse.json({ insights: aiInsights });

  } catch (error) {
    console.error('AI Insights API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate insights' },
      { status: 500 }
    );
  }
} 