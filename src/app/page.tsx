'use client';

import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Wallet, CreditCard, PiggyBank, Calendar, Plus, Menu, Bell, Settings, BarChart3, DollarSign, Receipt, LucideIcon } from 'lucide-react';

// TypeScript Types
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
}

interface WalletCardProps {
  name: string;
  balance: number;
  currency: string;
  type: string;
  color: string;
}

interface TransactionItemProps {
  title: string;
  category: string;
  amount: number;
  date: string;
  type: 'expense' | 'income';
}

interface BillProps {
  name: string;
  amount: number;
  due: string;
  color: string;
}

// Glass Card Component
const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = false }) => (
  <div className={`
    bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg
    ${hover ? 'hover:bg-white/15 hover:shadow-[0_0_30px_rgba(186,24,186,0.3)] transition-all duration-300' : ''}
    ${className}
  `}>
    {children}
  </div>
);

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, trend }) => (
  <GlassCard hover className="p-6">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[#A1A1AA] text-sm mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-white mb-2">{value}</h3>
        <div className={`flex items-center gap-1 text-sm ${trend === 'up' ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{change}</span>
        </div>
      </div>
      <div className="p-3 rounded-xl bg-gradient-to-br from-[#6B076B] to-[#BA18BA]">
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </GlassCard>
);

// Wallet Card Component
const WalletCard: React.FC<WalletCardProps> = ({ name, balance, currency, type, color }) => (
  <GlassCard hover className="p-5 min-w-[280px]">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${color}`}>
        <Wallet size={20} className="text-white" />
      </div>
      <span className="text-xs text-[#A1A1AA] uppercase tracking-wide">{type}</span>
    </div>
    <h4 className="text-white font-medium mb-1">{name}</h4>
    <p className="text-2xl font-bold text-white">{currency}{balance.toLocaleString()}</p>
  </GlassCard>
);

// Transaction Item Component
const TransactionItem: React.FC<TransactionItemProps> = ({ title, category, amount, date, type }) => (
  <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-colors">
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-lg ${type === 'expense' ? 'bg-[#EF4444]/20' : 'bg-[#22C55E]/20'}`}>
        <Receipt size={20} className={type === 'expense' ? 'text-[#EF4444]' : 'text-[#22C55E]'} />
      </div>
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-[#A1A1AA] text-sm">{category} • {date}</p>
      </div>
    </div>
    <div className={`text-lg font-semibold ${type === 'expense' ? 'text-[#EF4444]' : 'text-[#22C55E]'}`}>
      {type === 'expense' ? '-' : '+'}₹{amount.toLocaleString()}
    </div>
  </div>
);

// Main App Component
const ExpenseTrackerApp: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const stats: StatCardProps[] = [
    { title: 'Total Balance', value: '₹1,24,580', change: '+12.5%', icon: DollarSign, trend: 'up' },
    { title: 'Monthly Income', value: '₹85,000', change: '+8.2%', icon: TrendingUp, trend: 'up' },
    { title: 'Monthly Expenses', value: '₹52,340', change: '-5.4%', icon: TrendingDown, trend: 'down' },
    { title: 'Savings Rate', value: '38.5%', change: '+3.1%', icon: PiggyBank, trend: 'up' },
  ];

  const wallets: WalletCardProps[] = [
    { name: 'Primary Bank', balance: 85240, currency: '₹', type: 'Bank', color: 'bg-gradient-to-br from-[#6B076B] to-[#BA18BA]' },
    { name: 'Cash Wallet', balance: 12500, currency: '₹', type: 'Cash', color: 'bg-gradient-to-br from-[#22C55E] to-[#16A34A]' },
    { name: 'Credit Card', balance: 26840, currency: '₹', type: 'Card', color: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]' },
  ];

  const recentTransactions: TransactionItemProps[] = [
    { title: 'Grocery Shopping', category: 'Food', amount: 2450, date: 'Today, 2:30 PM', type: 'expense' },
    { title: 'Salary Credit', category: 'Income', amount: 85000, date: 'Yesterday', type: 'income' },
    { title: 'Netflix Subscription', category: 'Entertainment', amount: 649, date: 'Jan 24', type: 'expense' },
    { title: 'Freelance Payment', category: 'Income', amount: 15000, date: 'Jan 23', type: 'income' },
    { title: 'Electricity Bill', category: 'Utilities', amount: 1280, date: 'Jan 22', type: 'expense' },
  ];

  const upcomingBills: BillProps[] = [
    { name: 'Rent', amount: 25000, due: 'Jan 30', color: 'bg-[#EF4444]' },
    { name: 'Internet', amount: 899, due: 'Jan 28', color: 'bg-[#F59E0B]' },
    { name: 'Gym Membership', amount: 2000, due: 'Feb 1', color: 'bg-[#22C55E]' },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0F0F0F]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Menu size={24} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B076B] to-[#BA18BA] flex items-center justify-center">
                  <Wallet size={20} />
                </div>
                <div>
                  <h1 className="text-xl font-bold">FinTrack</h1>
                  <p className="text-xs text-[#A1A1AA]">Smart Money Manager</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Settings size={20} />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B076B] to-[#BA18BA] flex items-center justify-center font-bold">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Wallets Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">My Wallets</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6B076B] to-[#BA18BA] rounded-xl hover:shadow-[0_0_20px_rgba(186,24,186,0.5)] transition-all">
              <Plus size={20} />
              <span className="hidden sm:inline">Add Wallet</span>
            </button>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {wallets.map((wallet, idx) => (
              <WalletCard key={idx} {...wallet} />
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <GlassCard className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Transactions</h2>
              <button className="text-sm text-[#BA18BA] hover:text-[#BA18BA]/80 font-medium">View All</button>
            </div>
            <div className="space-y-2">
              {recentTransactions.map((txn, idx) => (
                <TransactionItem key={idx} {...txn} />
              ))}
            </div>
          </GlassCard>

          {/* Upcoming Bills */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar size={20} className="text-[#BA18BA]" />
              <h2 className="text-xl font-bold">Upcoming Bills</h2>
            </div>
            <div className="space-y-4">
              {upcomingBills.map((bill, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${bill.color}`}></div>
                    <div>
                      <p className="text-white font-medium">{bill.name}</p>
                      <p className="text-[#A1A1AA] text-sm">Due: {bill.due}</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold">₹{bill.amount.toLocaleString()}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#6B076B] to-[#BA18BA] rounded-xl hover:shadow-[0_0_20px_rgba(186,24,186,0.5)] transition-all font-medium">
              Pay All Bills
            </button>
          </GlassCard>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {[
            { icon: Plus, label: 'Add Expense', color: 'from-[#EF4444] to-[#DC2626]' },
            { icon: TrendingUp, label: 'Add Income', color: 'from-[#22C55E] to-[#16A34A]' },
            { icon: BarChart3, label: 'Analytics', color: 'from-[#6B076B] to-[#BA18BA]' },
            { icon: CreditCard, label: 'Budgets', color: 'from-[#F59E0B] to-[#D97706]' },
          ].map((action, idx) => (
            <GlassCard key={idx} hover className="p-6 cursor-pointer">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                <action.icon size={24} />
              </div>
              <p className="text-white font-medium">{action.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerApp;