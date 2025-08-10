'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Droplets, 
  Moon, 
  Heart, 
  Activity, 
  Target,
  Zap,
  Brain
} from 'lucide-react';

const stats = [
  {
    id: 'sleep',
    label: 'Sleep Quality',
    value: '8.2h',
    change: '+0.5h',
    trend: 'up',
    icon: Moon,
    color: 'from-blue-500 to-purple-600',
    bgColor: 'from-blue-500/10 to-purple-600/10',
    borderColor: 'border-blue-500/20'
  },
  {
    id: 'hydration',
    label: 'Water Intake',
    value: '2.1L',
    change: '+0.3L',
    trend: 'up',
    icon: Droplets,
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'from-cyan-500/10 to-blue-600/10',
    borderColor: 'border-cyan-500/20'
  },
  {
    id: 'mood',
    label: 'Mood Score',
    value: '8.5',
    change: '+0.8',
    trend: 'up',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'from-pink-500/10 to-rose-600/10',
    borderColor: 'border-pink-500/20'
  },
  {
    id: 'activity',
    label: 'Activity Level',
    value: '7.8',
    change: '+1.2',
    trend: 'up',
    icon: Activity,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'from-emerald-500/10 to-green-600/10',
    borderColor: 'border-emerald-500/20'
  }
];

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
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function HealthStats() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`relative group bg-gradient-to-br ${stat.bgColor} backdrop-blur-xl rounded-3xl p-6 border ${stat.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}
          >
            {/* Background glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
            
            {/* Animated icon */}
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
              className={`relative z-10 h-12 w-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg mb-4`}
            >
              <Icon className="h-6 w-6 text-white" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </h3>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: stat.trend === 'up' ? [0, 10, 0] : [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className={`flex items-center space-x-1 text-xs font-semibold ${
                    stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                  }`}
                >
                  <TrendingUp className={`h-3 w-3 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                  <span>{stat.change}</span>
                </motion.div>
              </div>
              
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-800">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500">
                  {stat.id === 'sleep' ? 'hours' : stat.id === 'hydration' ? 'liters' : '/10'}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ 
                      duration: 1.5,
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full shadow-sm`}
                  />
                </div>
              </div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5 + index * 0.2
                  }}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`
                  }}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
} 