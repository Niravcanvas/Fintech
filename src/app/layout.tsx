// app/layout.tsx
import type { Metadata } from 'next';

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
      <body className="antialiased">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}