'use client';

import React, { useState } from 'react';
import { Plus, AlertCircle, TrendingUp } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';

interface Budget {
  id: string;
  category: string;
  icon: string;
  amount: number;
  spent: number;
  period: 'monthly' | 'yearly';
  color: string;
}

export default function BudgetsPage() {
  const [budgets, setBudgets] = useState<Budget[]>([
    {
      id: '1',
      category: 'Food & Dining',
      icon: '🍔',
      amount: 20000,
      spent: 15240,
      period: 'monthly',
      color: 'from-[#EF4444] to-[#DC2626]',
    },
    {
      id: '2',
      category: 'Transportation',
      icon: '🚗',
      amount: 10000,
      spent: 8500,
      period: 'monthly',
      color: 'from-[#F59E0B] to-[#D97706]',
    },
    {
      id: '3',
      category: 'Shopping',
      icon: '🛍️',
      amount: 15000,
      spent: 12300,
      period: 'monthly',
      color: 'from-[#EC4899] to-[#DB2777]',
    },
    {
      id: '4',
      category: 'Entertainment',
      icon: '🎬',
      amount: 5000,
      spent: 4500,
      period: 'monthly',
      color: 'from-[#8B5CF6] to-[#7C3AED]',
    },
    {
      id: '5',
      category: 'Bills & Utilities',
      icon: '💡',
      amount: 8000,
      spent: 6800,
      period: 'monthly',
      color: 'from-[#3B82F6] to-[#2563EB]',
    },
  ]);

  const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const percentageUsed = (totalSpent / totalBudget) * 100;

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-[#EF4444]';
    if (percentage >= 75) return 'bg-[#F59E0B]';
    return 'bg-[#22C55E]';
  };

  const getStatusBadge = (percentage: number) => {
    if (percentage >= 90) return { variant: 'danger' as const, text: 'Over Budget' };
    if (percentage >= 75) return { variant: 'warning' as const, text: 'Near Limit' };
    return { variant: 'success' as const, text: 'On Track' };
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Budgets</h1>
            <p className="text-[#A1A1AA]">Track and manage your spending limits</p>
          </div>
          <Button icon={<Plus size={20} />}>
            Create Budget
          </Button>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6">
            <p className="text-[#A1A1AA] text-sm mb-1">Total Budget</p>
            <p className="text-2xl font-bold">{formatCurrency(totalBudget)}</p>
            <p className="text-sm text-[#A1A1AA] mt-1">This month</p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-[#A1A1AA] text-sm mb-1">Total Spent</p>
            <p className="text-2xl font-bold text-[#EF4444]">{formatCurrency(totalSpent)}</p>
            <p className="text-sm text-[#A1A1AA] mt-1">{percentageUsed.toFixed(1)}% used</p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-[#A1A1AA] text-sm mb-1">Remaining</p>
            <p className="text-2xl font-bold text-[#22C55E]">
              {formatCurrency(totalBudget - totalSpent)}
            </p>
            <p className="text-sm text-[#A1A1AA] mt-1">
              {(100 - percentageUsed).toFixed(1)}% available
            </p>
          </GlassCard>
        </div>

        {/* Overall Progress */}
        <GlassCard className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Overall Budget Progress</h3>
            <Badge variant={getStatusBadge(percentageUsed).variant}>
              {getStatusBadge(percentageUsed).text}
            </Badge>
          </div>
          <div className="relative h-4 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`absolute h-full ${getProgressColor(percentageUsed)} transition-all duration-500`}
              style={{ width: `${Math.min(percentageUsed, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-[#A1A1AA]">
              {formatCurrency(totalSpent)} spent
            </span>
            <span className="text-sm text-[#A1A1AA]">
              {formatCurrency(totalBudget)} budget
            </span>
          </div>
        </GlassCard>

        {/* Budget Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.amount) * 100;
            const status = getStatusBadge(percentage);

            return (
              <GlassCard key={budget.id} hover className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${budget.color} flex items-center justify-center text-2xl`}>
                      {budget.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{budget.category}</h3>
                      <p className="text-xs text-[#A1A1AA] capitalize">{budget.period}</p>
                    </div>
                  </div>
                  <Badge variant={status.variant} className="text-xs">
                    {percentage.toFixed(0)}%
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`absolute h-full ${getProgressColor(percentage)} transition-all duration-500`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Amount Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#A1A1AA]">Spent</span>
                    <span className="font-semibold">{formatCurrency(budget.spent)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#A1A1AA]">Budget</span>
                    <span className="font-semibold">{formatCurrency(budget.amount)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2 border-t border-white/10">
                    <span className="text-[#A1A1AA]">Remaining</span>
                    <span className={`font-semibold ${
                      budget.amount - budget.spent < 0 ? 'text-[#EF4444]' : 'text-[#22C55E]'
                    }`}>
                      {formatCurrency(budget.amount - budget.spent)}
                    </span>
                  </div>
                </div>

                {/* Warning */}
                {percentage >= 90 && (
                  <div className="mt-4 p-3 bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-lg flex items-start gap-2">
                    <AlertCircle size={16} className="text-[#EF4444] mt-0.5" />
                    <p className="text-xs text-[#EF4444]">
                      You've {percentage >= 100 ? 'exceeded' : 'almost reached'} your budget limit!
                    </p>
                  </div>
                )}
              </GlassCard>
            );
          })}

          {/* Add New Budget Card */}
          <GlassCard 
            hover 
            className="p-6 flex flex-col items-center justify-center min-h-[300px] cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B076B] to-[#BA18BA] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Plus size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Create New Budget</h3>
            <p className="text-sm text-[#A1A1AA] text-center">
              Set spending limits for new categories
            </p>
          </GlassCard>
        </div>

        {/* Tips */}
        <GlassCard className="p-6 mt-8">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#3B82F6]/20">
              <TrendingUp size={20} className="text-[#3B82F6]" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Budget Tips</h3>
              <ul className="space-y-1 text-sm text-[#A1A1AA]">
                <li>• Set realistic budgets based on your past spending patterns</li>
                <li>• Review and adjust your budgets monthly</li>
                <li>• Enable alerts to get notified when you're near your limits</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}