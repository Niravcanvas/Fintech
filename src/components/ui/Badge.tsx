// components/ui/Badge.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  const variants = {
    default: 'bg-white/10 text-white',
    success: 'bg-[#22C55E]/20 text-[#22C55E]',
    warning: 'bg-[#F59E0B]/20 text-[#F59E0B]',
    danger: 'bg-[#EF4444]/20 text-[#EF4444]',
    info: 'bg-[#3B82F6]/20 text-[#3B82F6]',
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};