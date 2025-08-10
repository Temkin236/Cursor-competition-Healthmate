'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Star, Sparkles, Target, TrendingUp, Award, Lightbulb } from 'lucide-react';

// Mock motivational data
const motivationalData = {
  quote: "The only bad workout is the one that didn't happen. Every step forward is progress, no matter how small.",
  author: "Health Warrior",
  dailyTip: "Try taking a 10-minute walk outside today. Fresh air and movement can instantly boost your mood and energy levels!",
  weeklyGoal: "Complete 5 days of consistent health tracking",
  progress: 80,
  streak: 7,
  achievements: [
    { id: 1, title: "First Week Complete", icon: Star, color: "from-yellow-400 to-orange-500" },
    { id: 2, title: "Hydration Master", icon: Heart, color: "from-blue-400 to-cyan-500" },
    { id: 3, title: "Sleep Champion", icon: Target, color: "from-purple-400 to-pink-500" }
  ]
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

export default function MotivationalTips() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Daily Quote */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 border border-purple-200/50 rounded-2xl p-6"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-rose-400/10 to-purple-400/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Daily Inspiration</h4>
              <p className="text-sm text-gray-600">Today's motivation</p>
            </div>
          </div>
          
          <blockquote className="text-gray-700 leading-relaxed italic text-lg mb-3">
            "{motivationalData.quote}"
          </blockquote>
          
          <cite className="text-sm text-gray-600 font-medium">
            — {motivationalData.author}
          </cite>
        </div>
      </motion.div>

      {/* Daily Tip */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-2xl p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full -translate-y-14 translate-x-14"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Today's Tip</h4>
              <p className="text-sm text-gray-600">Actionable advice</p>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            {motivationalData.dailyTip}
          </p>
        </div>
      </motion.div>

      {/* Weekly Goal Progress */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-6"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Weekly Goal</h4>
            <p className="text-sm text-gray-600">Track your progress</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{motivationalData.weeklyGoal}</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-semibold text-gray-800">{motivationalData.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${motivationalData.progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-sm"
            />
          </div>
        </div>
      </motion.div>

      {/* Streak Counter */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 rounded-2xl p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full -translate-y-12 translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Current Streak</h4>
              <p className="text-sm text-gray-600">Keep it going!</p>
            </div>
          </div>
          
          <div className="text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg mb-3"
            >
              <span className="text-2xl font-bold text-white">{motivationalData.streak}</span>
            </motion.div>
            <p className="text-gray-700 font-semibold">Days Strong! 🔥</p>
          </div>
        </div>
      </motion.div>

      {/* Recent Achievements */}
      <motion.div
        variants={itemVariants}
        className="space-y-4"
      >
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Award className="h-5 w-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-800">Recent Achievements</h4>
        </div>
        
        <div className="space-y-3">
          {motivationalData.achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`h-8 w-8 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center shadow-sm`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-sm">{achievement.title}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Encouragement */}
      <motion.div
        variants={itemVariants}
        className="text-center pt-4 border-t border-gray-200"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-flex items-center space-x-2 text-emerald-600 font-semibold"
        >
          <Heart className="h-5 w-5" />
          <span>You're doing amazing! Keep going!</span>
          <Heart className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 