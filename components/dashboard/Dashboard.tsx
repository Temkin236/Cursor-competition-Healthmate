'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { 
  Plus, 
  BarChart3, 
  User, 
  Settings, 
  Bell, 
  LogOut,
  Heart,
  Activity,
  Brain,
  Zap,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Target,
  Award,
  Menu,
  X
} from 'lucide-react';
import HealthLogForm from '../health/HealthLogForm';
import HealthStats from './HealthStats';
import HealthCharts from './HealthCharts';
import AIInsights from './AIInsights';
import MotivationalTips from './MotivationalTips';
import toast from 'react-hot-toast';

type TabType = 'overview' | 'logs' | 'charts' | 'insights' | 'profile';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [showLogForm, setShowLogForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { user, logout } = useAuth();
  const router = useRouter();

  // Load initial data
  useEffect(() => {
    if (user) {
      toast.success(`Welcome back, ${user.displayName || user.email}! 🎉`, {
        duration: 5000,
        position: 'top-right',
      });
    }
  }, [user]);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simulate refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
    toast.success('Dashboard refreshed! ✨');
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      toast.success('Logged out successfully! 👋');
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddLog = () => {
    setShowLogForm(true);
    setIsMobileMenuOpen(false);
  };

  const handleCloseLogForm = () => {
    setShowLogForm(false);
  };

  const handleLogSubmit = async (logData: any) => {
    try {
      setIsLoading(true);
      console.log('Saving log:', logData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Health log saved successfully! 📝');
      setShowLogForm(false);
    } catch (error: any) {
      console.error('Error saving log:', error);
      toast.error('Failed to save log. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'logs', label: 'Health Logs', icon: BarChart3 },
    { id: 'charts', label: 'Charts', icon: BarChart3 },
    { id: 'insights', label: 'AI Insights', icon: Brain },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating health icons with enhanced animations */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-200/30"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {[Heart, Activity, Brain, Zap, Target, Award][i % 6] && React.createElement([Heart, Activity, Brain, Zap, Target, Award][i % 6], { size: 24 })}
          </motion.div>
        ))}
        
        {/* Enhanced gradient orbs with sparkles */}
        <div className="absolute top-20 right-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Enhanced Logo and Title */}
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="flex items-center space-x-2 sm:space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                    <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      HealthMate
                    </h1>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Sparkles className="h-3 w-3 mr-1" />
                      AI Health Companion
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center space-x-2 sm:hidden">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.button>
              </div>

              {/* Enhanced User Info and Actions - Desktop */}
              <div className="hidden sm:flex items-center space-x-4">
                {/* Refresh Button */}
                <motion.button
                  onClick={refreshData}
                  disabled={isRefreshing}
                  whileHover={{ scale: 1.05, rotate: 180 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 text-gray-600 hover:text-purple-600 transition-colors bg-white/50 rounded-xl shadow-md hover:shadow-lg"
                >
                  <RefreshCw className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </motion.button>

                {/* Notification Bell */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 text-gray-600 hover:text-purple-600 transition-colors bg-white/50 rounded-xl shadow-md hover:shadow-lg relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">3</span>
                  </span>
                </motion.button>

                {/* Enhanced Add Log Button */}
                <motion.button
                  onClick={handleAddLog}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-semibold text-sm sm:text-base">Add Log</span>
                </motion.button>

                {/* Enhanced User Menu */}
                <div className="flex items-center space-x-4 bg-white/50 rounded-2xl p-3 shadow-md">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">
                      {user.displayName || 'User'}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  
                  {/* Enhanced Logout Button */}
                  <motion.button
                    onClick={handleLogout}
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <LogOut className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">Logout</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="sm:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
              >
                <div className="px-4 py-4 space-y-4">
                  {/* Mobile User Info */}
                  <div className="flex items-center space-x-3 bg-white/50 rounded-xl p-3">
                    <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {user.displayName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>

                  {/* Mobile Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      onClick={refreshData}
                      disabled={isRefreshing}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/50 rounded-xl shadow-md"
                    >
                      <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                      <span className="text-sm">Refresh</span>
                    </motion.button>

                    <motion.button
                      onClick={handleAddLog}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="text-sm font-semibold">Add Log</span>
                    </motion.button>
                  </div>

                  {/* Mobile Logout */}
                  <motion.button
                    onClick={handleLogout}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <LogOut className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">Logout</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Enhanced Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex space-x-1 sm:space-x-2 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-xl overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-white/50'
                  }`}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Enhanced Welcome Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 border border-purple-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Welcome back, {user.displayName || 'Health Warrior'}! 👋
                      </h2>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Ready to track your health journey? Let's see how you're doing today.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      <span>📊 0 total logs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-purple-600" />
                      <span>🔥 0 day streak</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                      <span>📅 Last log: Never</span>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Health Stats */}
                <HealthStats />

                {/* Enhanced Charts Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 p-6 sm:p-8"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                    <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-purple-600" />
                    Health Trends
                  </h3>
                  <HealthCharts />
                </motion.div>

                {/* Enhanced AI Insights & Motivation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 p-6 sm:p-8"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-purple-600" />
                      AI Health Insights
                    </h3>
                    <AIInsights />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 p-6 sm:p-8"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-purple-600" />
                      Motivation & Tips
                    </h3>
                    <MotivationalTips />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'logs' && (
              <motion.div
                key="logs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Health Logs</h2>
                  <motion.button
                    onClick={handleAddLog}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Add New Log
                  </motion.button>
                </div>
                <div className="text-center py-12 sm:py-16">
                  <BarChart3 className="h-16 w-16 sm:h-24 sm:w-24 text-gray-300 mx-auto mb-4 sm:mb-6" />
                  <p className="text-gray-500 text-base sm:text-lg mb-4 sm:mb-6">No health logs yet. Start by adding your first log!</p>
                  <motion.button
                    onClick={handleAddLog}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg font-semibold"
                  >
                    Add First Log
                  </motion.button>
                </div>
              </motion.div>
            )}

            {activeTab === 'charts' && (
              <motion.div
                key="charts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 p-6 sm:p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Health Charts</h2>
                <HealthCharts />
              </motion.div>
            )}

            {activeTab === 'insights' && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 p-6 sm:p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">AI Health Insights</h2>
                <AIInsights />
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/50 p-6 sm:p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Profile Settings</h2>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                      <User className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        {user.displayName || 'User Name'}
                      </h3>
                      <p className="text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">Age</label>
                      <input
                        type="number"
                        placeholder="Enter your age"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base sm:text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">Gender</label>
                      <select className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base sm:text-lg">
                        <option>Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">Weight (kg)</label>
                      <input
                        type="number"
                        placeholder="Enter your weight"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base sm:text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">Height (cm)</label>
                      <input
                        type="number"
                        placeholder="Enter your height"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base sm:text-lg"
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
                  >
                    Update Profile
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Enhanced Health Log Form Modal */}
      <AnimatePresence>
        {showLogForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <HealthLogForm onSubmit={handleLogSubmit} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 