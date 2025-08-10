'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Plus, X, Droplets, Activity, Moon, Utensils, Heart } from 'lucide-react';
import { HealthLog, ExerciseLog, SleepLog } from '@/types';
import { COMMON_SYMPTOMS, MOOD_OPTIONS, EXERCISE_TYPES, INTENSITY_LEVELS, SLEEP_QUALITY_OPTIONS } from '@/lib/constants';
import toast from 'react-hot-toast';

interface HealthLogFormData {
  symptoms: string;
  selectedSymptoms: string[];
  meals: string[];
  exercise: ExerciseLog;
  sleep: SleepLog;
  waterIntakeLiters: number;
  mood: string;
}

interface HealthLogFormProps {
  onSubmit: (data: HealthLog) => void;
  isLoading?: boolean;
  initialData?: Partial<HealthLog>;
}

export default function HealthLogForm({ onSubmit, isLoading = false, initialData }: HealthLogFormProps) {
  const [newMeal, setNewMeal] = useState('');
  const [newSymptom, setNewSymptom] = useState('');

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<HealthLogFormData>({
    defaultValues: {
      symptoms: initialData?.symptoms || '',
      selectedSymptoms: [],
      meals: initialData?.meals || [],
      exercise: initialData?.exercise || {
        type: '',
        durationMinutes: 0,
        intensity: 'low',
      },
      sleep: initialData?.sleep || {
        hours: 7,
        quality: 'good',
      },
      waterIntakeLiters: initialData?.waterIntakeLiters || 2,
      mood: initialData?.mood || 'good',
    },
  });

  const watchedMeals = watch('meals');
  const watchedSelectedSymptoms = watch('selectedSymptoms');

  const addMeal = () => {
    if (newMeal.trim()) {
      setValue('meals', [...watchedMeals, newMeal.trim()]);
      setNewMeal('');
    }
  };

  const removeMeal = (index: number) => {
    setValue('meals', watchedMeals.filter((_, i) => i !== index));
  };

  const addSymptom = () => {
    if (newSymptom.trim()) {
      setValue('selectedSymptoms', [...watchedSelectedSymptoms, newSymptom.trim()]);
      setNewSymptom('');
    }
  };

  const removeSymptom = (index: number) => {
    setValue('selectedSymptoms', watchedSelectedSymptoms.filter((_, i) => i !== index));
  };

  const toggleSymptom = (symptom: string) => {
    const currentSymptoms = watchedSelectedSymptoms;
    if (currentSymptoms.includes(symptom)) {
      setValue('selectedSymptoms', currentSymptoms.filter(s => s !== symptom));
    } else {
      setValue('selectedSymptoms', [...currentSymptoms, symptom]);
    }
  };

  const onFormSubmit = (data: HealthLogFormData) => {
    const allSymptoms = [...data.selectedSymptoms, data.symptoms].filter(Boolean).join(', ');
    
    const healthLog: HealthLog = {
      id: initialData?.id || Date.now().toString(),
      userId: initialData?.userId || '',
      date: initialData?.date || new Date().toISOString().split('T')[0],
      symptoms: allSymptoms,
      meals: data.meals,
      exercise: data.exercise,
      sleep: data.sleep,
      waterIntakeLiters: data.waterIntakeLiters,
      mood: data.mood,
      createdAt: initialData?.createdAt || new Date(),
      updatedAt: new Date(),
    };

    onSubmit(healthLog);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Daily Health Log</h2>
          <p className="text-gray-600">Track your health and wellness for today</p>
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
          {/* Symptoms Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900">Symptoms</h3>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Common Symptoms
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                {COMMON_SYMPTOMS.map((symptom) => (
                  <button
                    key={symptom.id}
                    type="button"
                    onClick={() => toggleSymptom(symptom.name)}
                    className={`p-2 text-sm rounded-lg border transition-all ${
                      watchedSelectedSymptoms.includes(symptom.name)
                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {symptom.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Symptoms
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newSymptom}
                  onChange={(e) => setNewSymptom(e.target.value)}
                  placeholder="Add custom symptom..."
                  className="flex-1 form-input"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSymptom())}
                />
                <button
                  type="button"
                  onClick={addSymptom}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {watchedSelectedSymptoms.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {watchedSelectedSymptoms.map((symptom, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {symptom}
                    <button
                      type="button"
                      onClick={() => removeSymptom(index)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Symptom Details
              </label>
              <textarea
                {...register('symptoms')}
                rows={3}
                className="form-input"
                placeholder="Describe any additional symptoms or details..."
              />
            </div>
          </div>

          {/* Meals Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Utensils className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Meals</h3>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What did you eat today?
              </label>
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  value={newMeal}
                  onChange={(e) => setNewMeal(e.target.value)}
                  placeholder="Add a meal or food item..."
                  className="flex-1 form-input"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addMeal())}
                />
                <button
                  type="button"
                  onClick={addMeal}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              {watchedMeals.length > 0 && (
                <div className="space-y-2">
                  {watchedMeals.map((meal, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm text-gray-700">{meal}</span>
                      <button
                        type="button"
                        onClick={() => removeMeal(index)}
                        className="text-orange-600 hover:text-orange-800"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Exercise Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900">Exercise</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exercise Type
                </label>
                <select
                  {...register('exercise.type')}
                  className="form-input"
                >
                  <option value="">Select exercise type</option>
                  {EXERCISE_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  {...register('exercise.durationMinutes', { valueAsNumber: true })}
                  className="form-input"
                  placeholder="30"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intensity
                </label>
                <select
                  {...register('exercise.intensity')}
                  className="form-input"
                >
                  {INTENSITY_LEVELS.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Sleep Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Moon className="h-5 w-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">Sleep</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours of Sleep
                </label>
                <input
                  type="number"
                  step="0.5"
                  {...register('sleep.hours', { valueAsNumber: true })}
                  className="form-input"
                  placeholder="7"
                  min="0"
                  max="24"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sleep Quality
                </label>
                <select
                  {...register('sleep.quality')}
                  className="form-input"
                >
                  {SLEEP_QUALITY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Water Intake Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">Water Intake</h3>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Liters of Water (Recommended: 2-3L)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('waterIntakeLiters', { valueAsNumber: true })}
                className="form-input"
                placeholder="2"
                min="0"
                max="10"
              />
            </div>
          </div>

          {/* Mood Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-pink-500" />
              <h3 className="text-lg font-semibold text-gray-900">Mood</h3>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How are you feeling today?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {MOOD_OPTIONS.map((mood) => (
                  <label
                    key={mood.value}
                    className="flex flex-col items-center p-3 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      value={mood.value}
                      {...register('mood')}
                      className="sr-only"
                    />
                    <span className="text-2xl mb-1">{mood.emoji}</span>
                    <span className="text-xs text-center text-gray-700">{mood.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="spinner h-5 w-5 mr-2"></div>
                  Saving Health Log...
                </div>
              ) : (
                'Save Health Log'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 