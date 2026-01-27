'use client';

import React from 'react';
import { TrendingUp, TrendingDown, PieChart as PieChartIcon, BarChart3 } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { CHART_COLORS } from '@/lib/constants';

export default function AnalyticsPage() {
  // Mock data - replace with actual data
  const monthlyData = [
    { month: 'Aug', income: 75000, expenses: 55000, savings: 20000 },
    { month: 'Sep', income: 80000, expenses: 58000, savings: 22000 },
    { month: 'Oct', income: 85000, expenses: 52000, savings: 33000 },
    { month: 'Nov', income: 82000, expenses: 60000, savings: 22000 },
    { month: 'Dec', income: 90000, expenses: 70000, savings: 20000 },
    { month: 'Jan', income: 85000, expenses: 52340, savings: 32660 },
  ];

  const categoryData = [
    { name: 'Food & Dining', value: 15240, color: CHART_COLORS[0] },
    { name: 'Transportation', value: 8500, color: CHART_COLORS[1] },
    { name: 'Shopping', value: 12300, color: CHART_COLORS[2] },
    { name: 'Bills & Utilities', value: 6800, color: CHART_COLORS[3] },
    { name: 'Entertainment', value: 4500, color: CHART_COLORS[4] },
    { name: 'Health', value: 5000, color: CHART_COLORS[5] },
  ];

  const weeklySpending = [
    { day: 'Mon', amount: 1200 },
    { day: 'Tue', amount: 2100 },
    { day: 'Wed', amount: 1800 },
    { day: 'Thu', amount: 3200 },
    { day: 'Fri', amount: 2800 },
    { day: 'Sat', amount: 4100 },
    { day: 'Sun', amount: 1500 },
  ];

  const insights = [
    {
      type: 'warning',
      title: 'High Spending Alert',
      message: 'Food & Dining expenses increased by 23% this month',
      category: 'Food & Dining',
      amount: 3500,
    },
    {
      type: 'success',
      title: 'Savings Goal Met',
      message: 'You saved ₹32,660 this month, exceeding your goal!',
    },
    {
      type: 'info',
      title: 'Subscription Reminder',
      message: '3 subscriptions renewing in the next 7 days',
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0F0F0F] border border-white/20 rounded-lg p-3 backdrop-blur-xl">
          <p className="text-white font-medium">{payload[0].payload.month || payload[0].payload.day}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ₹{entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-[#A1A1AA]">Insights into your spending patterns</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-[#22C55E]/20">
                <TrendingUp size={20} className="text-[#22C55E]" />
              </div>
              <p className="text-[#A1A1AA] text-sm">Avg. Monthly Income</p>
            </div>
            <p className="text-2xl font-bold">₹82,833</p>
            <p className="text-sm text-[#22C55E] mt-1">+5.2% from last month</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-[#EF4444]/20">
                <TrendingDown size={20} className="text-[#EF4444]" />
              </div>
              <p className="text-[#A1A1AA] text-sm">Avg. Monthly Expenses</p>
            </div>
            <p className="text-2xl font-bold">₹57,890</p>
            <p className="text-sm text-[#EF4444] mt-1">-3.1% from last month</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-[#BA18BA]/20">
                <PieChartIcon size={20} className="text-[#BA18BA]" />
              </div>
              <p className="text-[#A1A1AA] text-sm">Savings Rate</p>
            </div>
            <p className="text-2xl font-bold">38.5%</p>
            <p className="text-sm text-[#22C55E] mt-1">+2.8% from last month</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-[#F59E0B]/20">
                <BarChart3 size={20} className="text-[#F59E0B]" />
              </div>
              <p className="text-[#A1A1AA] text-sm">Top Category</p>
            </div>
            <p className="text-2xl font-bold">Food</p>
            <p className="text-sm text-[#A1A1AA] mt-1">₹15,240 this month</p>
          </GlassCard>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Income vs Expenses */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold mb-6">Income vs Expenses</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="#A1A1AA" />
                <YAxis stroke="#A1A1AA" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#22C55E" 
                  strokeWidth={3}
                  dot={{ fill: '#22C55E', r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#EF4444" 
                  strokeWidth={3}
                  dot={{ fill: '#EF4444', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Category Breakdown */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold mb-6">Spending by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Weekly Spending */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold mb-6">Weekly Spending Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklySpending}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="#A1A1AA" />
                <YAxis stroke="#A1A1AA" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="amount" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#BA18BA" stopOpacity={1} />
                    <stop offset="100%" stopColor="#6B076B" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Insights */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold mb-6">Smart Insights</h3>
            <div className="space-y-4">
              {insights.map((insight, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    insight.type === 'warning'
                      ? 'bg-[#F59E0B]/10 border-[#F59E0B]/30'
                      : insight.type === 'success'
                      ? 'bg-[#22C55E]/10 border-[#22C55E]/30'
                      : 'bg-[#3B82F6]/10 border-[#3B82F6]/30'
                  }`}
                >
                  <h4 className="font-semibold mb-1">{insight.title}</h4>
                  <p className="text-sm text-[#A1A1AA]">{insight.message}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}