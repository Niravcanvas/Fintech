// components/ui/Button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}) => {
  const baseStyles = 'font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#6B076B] to-[#BA18BA] text-white hover:shadow-[0_0_20px_rgba(186,24,186,0.5)]',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
    ghost: 'text-white hover:bg-white/10',
    danger: 'bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};