// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FinTrack - Smart Money Manager',
  description: 'Modern fintech expense tracker with glassmorphism UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-[#0F0F0F]">
          <Sidebar />
          <main className="flex-1 lg:ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}