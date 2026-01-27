'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Receipt, 
  BarChart3, 
  Wallet, 
  CreditCard,
  HandCoins,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Transactions', href: '/transactions', icon: Receipt },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Budgets', href: '/budgets', icon: CreditCard },
  { name: 'Wallets', href: '/wallets', icon: Wallet },
  { name: 'Lending', href: '/lending', icon: HandCoins },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen bg-white/5 backdrop-blur-xl border-r border-white/10',
          'hidden lg:flex flex-col transition-all duration-300 z-40',
          collapsed ? 'w-20' : 'w-64'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B076B] to-[#BA18BA] flex items-center justify-center">
                <Wallet size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">FinTrack</h1>
                <p className="text-xs text-[#A1A1AA]">Money Manager</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {collapsed ? (
              <ChevronRight size={20} className="text-[#A1A1AA]" />
            ) : (
              <ChevronLeft size={20} className="text-[#A1A1AA]" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
                  isActive
                    ? 'bg-gradient-to-r from-[#6B076B] to-[#BA18BA] text-white shadow-[0_0_20px_rgba(186,24,186,0.3)]'
                    : 'text-[#A1A1AA] hover:bg-white/10 hover:text-white',
                  collapsed && 'justify-center'
                )}
              >
                <item.icon size={20} />
                {!collapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            href="/settings"
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
              pathname === '/settings'
                ? 'bg-gradient-to-r from-[#6B076B] to-[#BA18BA] text-white'
                : 'text-[#A1A1AA] hover:bg-white/10 hover:text-white',
              collapsed && 'justify-center'
            )}
          >
            <Settings size={20} />
            {!collapsed && <span className="font-medium">Settings</span>}
          </Link>

          {!collapsed && (
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B076B] to-[#BA18BA] flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">John Doe</p>
                <p className="text-xs text-[#A1A1AA] truncate">john@example.com</p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="flex items-center justify-around px-2 py-3">
          {navigation.slice(0, 5).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors',
                  isActive
                    ? 'text-[#BA18BA]'
                    : 'text-[#A1A1AA]'
                )}
              >
                <item.icon size={20} />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}