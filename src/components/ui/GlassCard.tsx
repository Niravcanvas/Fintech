// components/ui/GlassCard.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        'bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg',
        hover && 'hover:bg-white/15 hover:shadow-[0_0_30px_rgba(186,24,186,0.3)] transition-all duration-300 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};