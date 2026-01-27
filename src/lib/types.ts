// lib/types.ts

export type TransactionType = 'income' | 'expense';
export type RecurrenceType = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'none';
export type WalletType = 'bank' | 'cash' | 'card' | 'upi';

export interface Wallet {
  id: string;
  name: string;
  type: WalletType;
  balance: number;
  currency: string;
  color: string;
  isActive: boolean;
  createdAt: Date;
  openingBalance: number;
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  subcategory?: string;
  walletId: string;
  date: Date;
  notes?: string;
  tags?: string[];
  merchant?: string;
  receiptUrl?: string;
  isRecurring: boolean;
  recurrenceRule?: RecurrenceRule;
}

export interface RecurrenceRule {
  type: RecurrenceType;
  interval: number; // every X days/weeks/months
  startDate: Date;
  endDate?: Date;
  nextOccurrence: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: TransactionType;
  subcategories?: string[];
}

export interface Budget {
  id: string;
  categoryId: string;
  amount: number;
  spent: number;
  period: 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  alertThreshold: number; // percentage
}

export interface Loan {
  id: string;
  personName: string;
  amount: number;
  type: 'lent' | 'borrowed';
  date: Date;
  dueDate?: Date;
  interest?: number;
  repayments: Repayment[];
  settled: boolean;
  notes?: string;
}

export interface Repayment {
  id: string;
  amount: number;
  date: Date;
  notes?: string;
}

export interface FinancialInsight {
  type: 'warning' | 'info' | 'success';
  title: string;
  message: string;
  category?: string;
  amount?: number;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface MonthlyData {
  month: string;
  income: number;
  expenses: number;
  savings: number;
}