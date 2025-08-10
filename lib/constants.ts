import { CommonSymptom, MoodOption, ExerciseType } from '@/types';

export const COMMON_SYMPTOMS: CommonSymptom[] = [
  // Physical symptoms
  { id: 'headache', name: 'Headache', category: 'physical', severity: 'mild' },
  { id: 'fatigue', name: 'Fatigue', category: 'physical', severity: 'mild' },
  { id: 'nausea', name: 'Nausea', category: 'physical', severity: 'moderate' },
  { id: 'dizziness', name: 'Dizziness', category: 'physical', severity: 'moderate' },
  { id: 'muscle-pain', name: 'Muscle Pain', category: 'physical', severity: 'mild' },
  { id: 'joint-pain', name: 'Joint Pain', category: 'physical', severity: 'moderate' },
  { id: 'fever', name: 'Fever', category: 'physical', severity: 'moderate' },
  { id: 'chills', name: 'Chills', category: 'physical', severity: 'mild' },
  
  // Mental symptoms
  { id: 'anxiety', name: 'Anxiety', category: 'mental', severity: 'moderate' },
  { id: 'depression', name: 'Depression', category: 'mental', severity: 'moderate' },
  { id: 'stress', name: 'Stress', category: 'mental', severity: 'mild' },
  { id: 'irritability', name: 'Irritability', category: 'mental', severity: 'mild' },
  { id: 'brain-fog', name: 'Brain Fog', category: 'mental', severity: 'mild' },
  
  // Digestive symptoms
  { id: 'stomach-pain', name: 'Stomach Pain', category: 'digestive', severity: 'moderate' },
  { id: 'bloating', name: 'Bloating', category: 'digestive', severity: 'mild' },
  { id: 'diarrhea', name: 'Diarrhea', category: 'digestive', severity: 'moderate' },
  { id: 'constipation', name: 'Constipation', category: 'digestive', severity: 'mild' },
  { id: 'heartburn', name: 'Heartburn', category: 'digestive', severity: 'mild' },
  
  // Respiratory symptoms
  { id: 'cough', name: 'Cough', category: 'respiratory', severity: 'mild' },
  { id: 'sore-throat', name: 'Sore Throat', category: 'respiratory', severity: 'moderate' },
  { id: 'runny-nose', name: 'Runny Nose', category: 'respiratory', severity: 'mild' },
  { id: 'shortness-breath', name: 'Shortness of Breath', category: 'respiratory', severity: 'severe' },
  
  // Other symptoms
  { id: 'skin-rash', name: 'Skin Rash', category: 'other', severity: 'mild' },
  { id: 'insomnia', name: 'Insomnia', category: 'other', severity: 'moderate' },
  { id: 'appetite-loss', name: 'Loss of Appetite', category: 'other', severity: 'moderate' },
];

export const MOOD_OPTIONS: MoodOption[] = [
  { value: 'excellent', label: 'Excellent', emoji: '😄', color: 'text-green-500' },
  { value: 'happy', label: 'Happy', emoji: '😊', color: 'text-green-400' },
  { value: 'good', label: 'Good', emoji: '🙂', color: 'text-blue-500' },
  { value: 'neutral', label: 'Neutral', emoji: '😐', color: 'text-gray-500' },
  { value: 'slightly-down', label: 'Slightly Down', emoji: '😕', color: 'text-yellow-500' },
  { value: 'sad', label: 'Sad', emoji: '😢', color: 'text-orange-500' },
  { value: 'depressed', label: 'Depressed', emoji: '😞', color: 'text-red-500' },
  { value: 'anxious', label: 'Anxious', emoji: '😰', color: 'text-purple-500' },
  { value: 'stressed', label: 'Stressed', emoji: '😤', color: 'text-red-400' },
  { value: 'angry', label: 'Angry', emoji: '😠', color: 'text-red-600' },
];

export const EXERCISE_TYPES: ExerciseType[] = [
  // Cardio
  { value: 'walking', label: 'Walking', category: 'cardio', caloriesPerMinute: 4 },
  { value: 'running', label: 'Running', category: 'cardio', caloriesPerMinute: 11 },
  { value: 'cycling', label: 'Cycling', category: 'cardio', caloriesPerMinute: 8 },
  { value: 'swimming', label: 'Swimming', category: 'cardio', caloriesPerMinute: 9 },
  { value: 'elliptical', label: 'Elliptical', category: 'cardio', caloriesPerMinute: 7 },
  { value: 'rowing', label: 'Rowing', category: 'cardio', caloriesPerMinute: 8 },
  { value: 'dancing', label: 'Dancing', category: 'cardio', caloriesPerMinute: 6 },
  { value: 'hiking', label: 'Hiking', category: 'cardio', caloriesPerMinute: 7 },
  
  // Strength
  { value: 'weightlifting', label: 'Weightlifting', category: 'strength', caloriesPerMinute: 6 },
  { value: 'bodyweight', label: 'Bodyweight Exercises', category: 'strength', caloriesPerMinute: 5 },
  { value: 'resistance-bands', label: 'Resistance Bands', category: 'strength', caloriesPerMinute: 4 },
  { value: 'yoga', label: 'Yoga', category: 'strength', caloriesPerMinute: 3 },
  { value: 'pilates', label: 'Pilates', category: 'strength', caloriesPerMinute: 4 },
  
  // Flexibility
  { value: 'stretching', label: 'Stretching', category: 'flexibility', caloriesPerMinute: 2 },
  { value: 'tai-chi', label: 'Tai Chi', category: 'flexibility', caloriesPerMinute: 3 },
  
  // Sports
  { value: 'basketball', label: 'Basketball', category: 'sports', caloriesPerMinute: 8 },
  { value: 'tennis', label: 'Tennis', category: 'sports', caloriesPerMinute: 7 },
  { value: 'soccer', label: 'Soccer', category: 'sports', caloriesPerMinute: 9 },
  { value: 'volleyball', label: 'Volleyball', category: 'sports', caloriesPerMinute: 6 },
  { value: 'badminton', label: 'Badminton', category: 'sports', caloriesPerMinute: 5 },
  
  // Other
  { value: 'gardening', label: 'Gardening', category: 'other', caloriesPerMinute: 4 },
  { value: 'cleaning', label: 'House Cleaning', category: 'other', caloriesPerMinute: 3 },
  { value: 'other', label: 'Other', category: 'other' },
];

export const INTENSITY_LEVELS = [
  { value: 'low', label: 'Low', color: 'text-green-500' },
  { value: 'medium', label: 'Medium', color: 'text-yellow-500' },
  { value: 'high', label: 'High', color: 'text-red-500' },
];

export const SLEEP_QUALITY_OPTIONS = [
  { value: 'poor', label: 'Poor', color: 'text-red-500' },
  { value: 'fair', label: 'Fair', color: 'text-yellow-500' },
  { value: 'good', label: 'Good', color: 'text-blue-500' },
  { value: 'excellent', label: 'Excellent', color: 'text-green-500' },
];

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];

export const ACTIVITY_LEVELS = [
  { value: 'sedentary', label: 'Sedentary (little or no exercise)' },
  { value: 'lightly-active', label: 'Lightly active (light exercise 1-3 days/week)' },
  { value: 'moderately-active', label: 'Moderately active (moderate exercise 3-5 days/week)' },
  { value: 'very-active', label: 'Very active (hard exercise 6-7 days/week)' },
  { value: 'extremely-active', label: 'Extremely active (very hard exercise, physical job)' },
];

export const HEALTH_GOALS = [
  'Lose weight',
  'Gain weight',
  'Build muscle',
  'Improve cardiovascular health',
  'Better sleep',
  'Reduce stress',
  'Improve mood',
  'Increase energy',
  'Better digestion',
  'Manage chronic conditions',
  'General wellness',
];

export const URGENCY_COLORS = {
  low: 'text-green-500 bg-green-50',
  medium: 'text-yellow-600 bg-yellow-50',
  high: 'text-red-500 bg-red-50',
};

export const CHART_COLORS = {
  primary: '#0ea5e9',
  secondary: '#8b5cf6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
}; 