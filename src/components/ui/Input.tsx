// components/ui/Input.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA]">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3',
            'text-white placeholder:text-[#A1A1AA]',
            'focus:outline-none focus:ring-2 focus:ring-[#BA18BA] focus:border-transparent',
            'transition-all duration-200',
            icon && 'pl-10',
            error && 'border-[#EF4444] focus:ring-[#EF4444]',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
};