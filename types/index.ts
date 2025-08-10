export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  profile?: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  age?: number;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  weight?: number; // in kg
  height?: number; // in cm
  activityLevel?: 'sedentary' | 'lightly-active' | 'moderately-active' | 'very-active' | 'extremely-active';
  healthGoals?: string[];
  medicalConditions?: string[];
  allergies?: string[];
  medications?: string[];
}

export interface HealthLog {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD format
  symptoms: string;
  meals: string[];
  exercise: ExerciseLog;
  sleep: SleepLog;
  waterIntakeLiters: number;
  mood: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExerciseLog {
  type: string;
  durationMinutes: number;
  intensity: 'low' | 'medium' | 'high';
  caloriesBurned?: number;
  notes?: string;
}

export interface SleepLog {
  hours: number;
  quality: 'poor' | 'fair' | 'good' | 'excellent';
  bedtime?: string;
  wakeTime?: string;
  notes?: string;
}

export interface AIInsights {
  summary: string;
  causes: string[];
  urgency: 'low' | 'medium' | 'high';
  tips: string[];
  patterns: string;
  motivation: string;
  questions: string[];
  generatedAt: Date;
}

export interface HealthMetrics {
  date: string;
  sleepHours: number;
  sleepQuality: number; // 1-4 scale
  waterIntake: number;
  moodScore: number; // 1-10 scale
  exerciseMinutes: number;
  symptomsCount: number;
}

export interface WeeklySummary {
  weekStart: string;
  weekEnd: string;
  averageSleepHours: number;
  averageWaterIntake: number;
  averageMoodScore: number;
  totalExerciseMinutes: number;
  mostCommonSymptoms: string[];
  insights: AIInsights;
}

export interface MotivationalTip {
  id: string;
  tip: string;
  category: 'health' | 'fitness' | 'wellness' | 'motivation';
  createdAt: Date;
}

export interface Reminder {
  id: string;
  userId: string;
  title: string;
  description: string;
  time: string; // HH:MM format
  days: number[]; // 0-6 (Sunday-Saturday)
  isActive: boolean;
  createdAt: Date;
}

export interface CommonSymptom {
  id: string;
  name: string;
  category: 'physical' | 'mental' | 'digestive' | 'respiratory' | 'other';
  severity: 'mild' | 'moderate' | 'severe';
}

export interface MoodOption {
  value: string;
  label: string;
  emoji: string;
  color: string;
}

export interface ExerciseType {
  value: string;
  label: string;
  category: 'cardio' | 'strength' | 'flexibility' | 'sports' | 'other';
  caloriesPerMinute?: number;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
}

export interface DashboardStats {
  totalLogs: number;
  currentStreak: number;
  averageMood: number;
  averageSleep: number;
  averageWaterIntake: number;
  totalExerciseMinutes: number;
  healthScore: number; // 0-100
} 