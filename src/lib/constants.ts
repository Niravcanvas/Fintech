// lib/constants.ts
import { Category } from './types';

export const EXPENSE_CATEGORIES: Category[] = [
  {
    id: 'food',
    name: 'Food & Dining',
    icon: '🍔',
    color: 'from-[#EF4444] to-[#DC2626]',
    type: 'expense',
    subcategories: ['Groceries', 'Restaurants', 'Cafes', 'Food Delivery']
  },
  {
    id: 'transport',
    name: 'Transportation',
    icon: '🚗',
    color: 'from-[#F59E0B] to-[#D97706]',
    type: 'expense',
    subcategories: ['Fuel', 'Public Transport', 'Taxi/Ride', 'Vehicle Maintenance']
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎬',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
    type: 'expense',
    subcategories: ['Movies', 'Games', 'Streaming', 'Events']
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: '🛍️',
    color: 'from-[#EC4899] to-[#DB2777]',
    type: 'expense',
    subcategories: ['Clothing', 'Electronics', 'Home & Garden', 'Gifts']
  },
  {
    id: 'health',
    name: 'Health & Fitness',
    icon: '💪',
    color: 'from-[#22C55E] to-[#16A34A]',
    type: 'expense',
    subcategories: ['Gym', 'Medicine', 'Doctor', 'Wellness']
  },
  {
    id: 'utilities',
    name: 'Bills & Utilities',
    icon: '💡',
    color: 'from-[#3B82F6] to-[#2563EB]',
    type: 'expense',
    subcategories: ['Electricity', 'Water', 'Gas', 'Internet', 'Phone']
  },
  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    color: 'from-[#14B8A6] to-[#0D9488]',
    type: 'expense',
    subcategories: ['Courses', 'Books', 'Tuition', 'Supplies']
  },
  {
    id: 'housing',
    name: 'Housing',
    icon: '🏠',
    color: 'from-[#6366F1] to-[#4F46E5]',
    type: 'expense',
    subcategories: ['Rent', 'Mortgage', 'Maintenance', 'Insurance']
  },
  {
    id: 'other',
    name: 'Other',
    icon: '📌',
    color: 'from-[#64748B] to-[#475569]',
    type: 'expense',
    subcategories: []
  }
];

export const INCOME_CATEGORIES: Category[] = [
  {
    id: 'salary',
    name: 'Salary',
    icon: '💼',
    color: 'from-[#22C55E] to-[#16A34A]',
    type: 'income',
    subcategories: []
  },
  {
    id: 'freelance',
    name: 'Freelance',
    icon: '💻',
    color: 'from-[#3B82F6] to-[#2563EB]',
    type: 'income',
    subcategories: []
  },
  {
    id: 'investment',
    name: 'Investment',
    icon: '📈',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
    type: 'income',
    subcategories: ['Stocks', 'Crypto', 'Dividends', 'Interest']
  },
  {
    id: 'gift',
    name: 'Gift',
    icon: '🎁',
    color: 'from-[#EC4899] to-[#DB2777]',
    type: 'income',
    subcategories: []
  },
  {
    id: 'refund',
    name: 'Refund',
    icon: '↩️',
    color: 'from-[#14B8A6] to-[#0D9488]',
    type: 'income',
    subcategories: []
  },
  {
    id: 'other-income',
    name: 'Other',
    icon: '💰',
    color: 'from-[#F59E0B] to-[#D97706]',
    type: 'income',
    subcategories: []
  }
];

export const WALLET_COLORS = [
  'bg-gradient-to-br from-[#6B076B] to-[#BA18BA]',
  'bg-gradient-to-br from-[#22C55E] to-[#16A34A]',
  'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
  'bg-gradient-to-br from-[#3B82F6] to-[#2563EB]',
  'bg-gradient-to-br from-[#EC4899] to-[#DB2777]',
  'bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED]',
];

export const CURRENCIES = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
];

export const CHART_COLORS = [
  '#6B076B',
  '#22C55E',
  '#F59E0B',
  '#EF4444',
  '#3B82F6',
  '#8B5CF6',
  '#EC4899',
  '#14B8A6',
];