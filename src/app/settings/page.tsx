'use client';

import React from 'react';
import { User, Bell, Lock, Palette, Database, Download, LucideIcon } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

// TypeScript Types
type InputItem = {
  label: string;
  value: string;
  type: string;
  action?: never;
};

type ButtonItem = {
  label: string;
  action: string;
  type: 'button';
  value?: never;
};

type SettingItem = InputItem | ButtonItem;

type Toggle = {
  label: string;
  enabled: boolean;
};

type SettingsSection = {
  title: string;
  icon: LucideIcon;
  items?: SettingItem[];
  toggles?: Toggle[];
};

export default function SettingsPage() {
  const settingsSections: SettingsSection[] = [
    {
      title: 'Profile',
      icon: User,
      items: [
        { label: 'Full Name', value: 'John Doe', type: 'text' },
        { label: 'Email', value: 'john@example.com', type: 'email' },
        { label: 'Phone', value: '+91 98765 43210', type: 'tel' },
      ],
    },
    {
      title: 'Preferences',
      icon: Palette,
      items: [
        { label: 'Currency', value: 'INR (₹)', type: 'select' },
        { label: 'Date Format', value: 'DD/MM/YYYY', type: 'select' },
        { label: 'Week Starts On', value: 'Monday', type: 'select' },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      toggles: [
        { label: 'Bill Reminders', enabled: true },
        { label: 'Budget Alerts', enabled: true },
        { label: 'Transaction Updates', enabled: false },
        { label: 'Weekly Summary', enabled: true },
      ],
    },
    {
      title: 'Security',
      icon: Lock,
      items: [
        { label: 'Change Password', action: 'Update Password', type: 'button' },
        { label: 'Two-Factor Authentication', action: 'Enable', type: 'button' },
        { label: 'App Lock', action: 'Configure', type: 'button' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-[#A1A1AA]">Manage your account and preferences</p>
        </div>

        {/* Profile Card */}
        <GlassCard className="p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6B076B] to-[#BA18BA] flex items-center justify-center text-3xl font-bold">
              JD
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-[#A1A1AA]">john@example.com</p>
            </div>
            <Button variant="secondary">Edit Profile</Button>
          </div>
        </GlassCard>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, idx) => (
            <GlassCard key={idx} className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#6B076B] to-[#BA18BA]">
                  <section.icon size={20} />
                </div>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>

              <div className="space-y-4">
                {section.items?.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <label className="text-[#A1A1AA]">{item.label}</label>
                    {item.type === 'button' ? (
                      <Button variant="secondary" size="sm">
                        {item.action}
                      </Button>
                    ) : (
                      <Input
                        type={item.type}
                        defaultValue={item.value}
                        className="max-w-xs"
                      />
                    )}
                  </div>
                ))}

                {section.toggles?.map((toggle, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-white">{toggle.label}</span>
                    <button
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        toggle.enabled ? 'bg-gradient-to-r from-[#6B076B] to-[#BA18BA]' : 'bg-white/20'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          toggle.enabled ? 'right-1' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}

          {/* Data & Backup */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#6B076B] to-[#BA18BA]">
                <Database size={20} />
              </div>
              <h3 className="text-xl font-bold">Data & Backup</h3>
            </div>

            <div className="space-y-3">
              <Button variant="secondary" icon={<Download size={18} />} className="w-full justify-start">
                Export All Data
              </Button>
              <Button variant="secondary" icon={<Database size={18} />} className="w-full justify-start">
                Cloud Backup
              </Button>
              <Button variant="danger" className="w-full justify-start">
                Clear All Data
              </Button>
            </div>
          </GlassCard>

          {/* About */}
          <GlassCard className="p-6">
            <div className="space-y-3 text-sm text-[#A1A1AA]">
              <div className="flex items-center justify-between">
                <span>Version</span>
                <span className="text-white">1.0.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Build</span>
                <span className="text-white">2024.01.26</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-center">
                  Made with ❤️ by FinTrack Team
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}