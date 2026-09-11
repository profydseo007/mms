import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/AppShell';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Math Make Smart',
  description:
    'Professional mathematics tutoring for a global generation. Patient, structured, and effective.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
