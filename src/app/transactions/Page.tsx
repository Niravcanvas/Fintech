'use client';

import React, { useState } from 'react';
import { Plus, Search, Filter, Download, Calendar, ArrowUpDown } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Transaction } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');

  // Mock data - replace with actual data from context/state
  const transactions: Transaction[] = [
    {
      id: '1',
      title: 'Grocery Shopping',
      amount: 2450,
      type: 'expense',
      category: 'Food & Dining',
      walletId: 'wallet1',
      date: new Date(),
      merchant: 'Big Basket',
      tags: ['groceries', 'monthly'],
      isRecurring: false,
    },
    {
      id: '2',
      title: 'Salary Credit',
      amount: 85000,
      type: 'income',
      category: 'Salary',
      walletId: 'wallet1',
      date: new Date(Date.now() - 86400000),
      isRecurring: true,
    },
    {
      id: '3',
      title: 'Netflix Subscription',
      amount: 649,
      type: 'expense',
      category: 'Entertainment',
      subcategory: 'Streaming',
      walletId: 'wallet2',
      date: new Date(Date.now() - 172800000),
      isRecurring: true,
    },
  ];

  const filteredTransactions = transactions.filter(txn => {
    const matchesSearch = txn.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         txn.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || txn.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Transactions</h1>
            <p className="text-[#A1A1AA]">Track and manage all your transactions</p>
          </div>
          <Button icon={<Plus size={20} />}>
            Add Transaction
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6">
            <p className="text-[#A1A1AA] text-sm mb-1">Total Income</p>
            <p className="text-2xl font-bold text-[#22C55E]">
              +{formatCurrency(totalIncome)}
            </p>
          </GlassCard>
          <GlassCard className="p-6">
            <p className="text-[#A1A1AA] text-sm mb-1">Total Expenses</p>
            <p className="text-2xl font-bold text-[#EF4444]">
              -{formatCurrency(totalExpense)}
            </p>
          </GlassCard>
          <GlassCard className="p-6">
            <p className="text-[#A1A1AA] text-sm mb-1">Net Cash Flow</p>
            <p className={`text-2xl font-bold ${totalIncome - totalExpense >= 0 ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
              {formatCurrency(totalIncome - totalExpense)}
            </p>
          </GlassCard>
        </div>

        {/* Filters & Search */}
        <GlassCard className="p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search size={18} />}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterType === 'all' ? 'primary' : 'secondary'}
                size="md"
                onClick={() => setFilterType('all')}
              >
                All
              </Button>
              <Button
                variant={filterType === 'income' ? 'primary' : 'secondary'}
                size="md"
                onClick={() => setFilterType('income')}
              >
                Income
              </Button>
              <Button
                variant={filterType === 'expense' ? 'primary' : 'secondary'}
                size="md"
                onClick={() => setFilterType('expense')}
              >
                Expense
              </Button>
            </div>
            <Button variant="secondary" icon={<Download size={18} />}>
              Export
            </Button>
          </div>
        </GlassCard>

        {/* Transactions Table */}
        <GlassCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left p-4 text-[#A1A1AA] font-medium">
                    <button className="flex items-center gap-2 hover:text-white transition-colors">
                      Date <ArrowUpDown size={16} />
                    </button>
                  </th>
                  <th className="text-left p-4 text-[#A1A1AA] font-medium">Description</th>
                  <th className="text-left p-4 text-[#A1A1AA] font-medium">Category</th>
                  <th className="text-left p-4 text-[#A1A1AA] font-medium">Wallet</th>
                  <th className="text-right p-4 text-[#A1A1AA] font-medium">
                    <button className="flex items-center gap-2 ml-auto hover:text-white transition-colors">
                      Amount <ArrowUpDown size={16} />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((txn, idx) => (
                  <tr
                    key={txn.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#A1A1AA]" />
                        <span className="text-sm">{formatDate(txn.date)}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{txn.title}</p>
                        {txn.merchant && (
                          <p className="text-sm text-[#A1A1AA]">{txn.merchant}</p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant={txn.type === 'income' ? 'success' : 'danger'}>
                        {txn.category}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-[#A1A1AA]">Primary Bank</span>
                    </td>
                    <td className="p-4 text-right">
                      <span className={`font-semibold text-lg ${
                        txn.type === 'expense' ? 'text-[#EF4444]' : 'text-[#22C55E]'
                      }`}>
                        {txn.type === 'expense' ? '-' : '+'}
                        {formatCurrency(txn.amount)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#A1A1AA]">No transactions found</p>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}