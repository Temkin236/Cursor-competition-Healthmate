'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, TrendingUp, AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';

// Mock AI insights data
const mockInsights = {
  summary: "You're showing great progress in your health journey! Your sleep quality has improved, and you're staying well-hydrated. Keep up the excellent work!",
  causes: ["Good sleep routine", "Consistent hydration", "Regular exercise"],
  urgency: "low",
  tips: [
    "Continue your 8-hour sleep schedule for optimal recovery",
    "Maintain your 2L daily water intake for peak performance",
    "Consider adding 10 minutes of meditation to your routine"
  ],
  patterns: "Your health metrics show a positive upward trend over the past week, with consistent improvements in sleep quality and mood.",
  motivation: "You're building healthy habits that will serve you for life. Every small step counts towards your wellness goals!",
  questions: [
    "What healthy habit would you like to focus on next?",
    "How can you celebrate your progress this week?"
  ]
};

const urgencyConfig = {
  low: { color: 'text-emerald-600', bgColor: 'bg-emerald-100', icon: CheckCircle },
  medium: { color: 'text-yellow-600', bgColor: 'bg-yellow-100', icon: Clock },
  high: { color: 'text-red-600', bgColor: 'bg-red-100', icon: AlertTriangle }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function AIInsights() {
  const [currentTime, setCurrentTime] = useState('');
  const urgency = urgencyConfig[mockInsights.urgency as keyof typeof urgencyConfig];
  const UrgencyIcon = urgency.icon;

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Summary Card */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-2xl p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">AI Health Summary</h4>
              <div className="flex items-center space-x-2">
                <div className={`px-3 py-1 rounded-full ${urgency.bgColor} ${urgency.color} text-xs font-semibold flex items-center space-x-1`}>
                  <UrgencyIcon className="h-3 w-3" />
                  <span className="capitalize">{mockInsights.urgency} Priority</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{mockInsights.summary}</p>
        </div>
      </motion.div>

      {/* Tips Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <Lightbulb className="h-5 w-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-800">Personalized Tips</h4>
        </div>
        <div className="space-y-3">
          {mockInsights.tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-6 w-6 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Patterns Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-800">Pattern Detection</h4>
        </div>
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-xl">
          <p className="text-gray-700 text-sm leading-relaxed">{mockInsights.patterns}</p>
        </div>
      </motion.div>

      {/* Motivation Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-800">Daily Motivation</h4>
        </div>
        <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200/50 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="relative z-10">
            <p className="text-gray-700 text-sm leading-relaxed italic">"{mockInsights.motivation}"</p>
          </div>
        </div>
      </motion.div>

      {/* Reflection Questions */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-800">Reflection Questions</h4>
        </div>
        <div className="space-y-3">
          {mockInsights.questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl"
            >
              <p className="text-gray-700 text-sm leading-relaxed">💭 {question}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Update Time */}
      <motion.div
        variants={itemVariants}
        className="text-center pt-4 border-t border-gray-200"
      >
        <p className="text-xs text-gray-500">
          Last updated: {currentTime || 'Loading...'}
        </p>
      </motion.div>
    </motion.div>
  );
} 