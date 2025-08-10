'use client';

import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const data = [
  { date: 'Mon', sleep: 7.5, water: 2.2, exercise: 30, mood: 8 },
  { date: 'Tue', sleep: 6.8, water: 1.8, exercise: 45, mood: 7 },
  { date: 'Wed', sleep: 8.2, water: 2.5, exercise: 60, mood: 9 },
  { date: 'Thu', sleep: 7.0, water: 2.0, exercise: 0, mood: 6 },
  { date: 'Fri', sleep: 7.8, water: 2.3, exercise: 30, mood: 8 },
  { date: 'Sat', sleep: 8.5, water: 2.8, exercise: 90, mood: 9 },
  { date: 'Sun', sleep: 7.2, water: 2.1, exercise: 45, mood: 7 },
];

const moodData = [
  { name: 'Excellent', value: 2, color: '#10b981' },
  { name: 'Good', value: 3, color: '#3b82f6' },
  { name: 'Neutral', value: 1, color: '#6b7280' },
  { name: 'Poor', value: 1, color: '#ef4444' },
];

const exerciseData = [
  { name: 'Cardio', value: 45, color: '#3b82f6' },
  { name: 'Strength', value: 30, color: '#8b5cf6' },
  { name: 'Flexibility', value: 15, color: '#10b981' },
  { name: 'None', value: 10, color: '#6b7280' },
];

export default function HealthCharts() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold text-gray-900">Health Trends</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sleep"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Sleep (hours)"
              />
              <Line
                type="monotone"
                dataKey="water"
                stroke="#06b6d4"
                strokeWidth={2}
                name="Water (L)"
              />
              <Line
                type="monotone"
                dataKey="exercise"
                stroke="#10b981"
                strokeWidth={2}
                name="Exercise (min)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mood Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mood Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={moodData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {moodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Exercise Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Exercise Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={exerciseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8">
                {exerciseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sleep Quality */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sleep Quality Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="sleep"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.3}
                name="Sleep Hours"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 