import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/AppShell';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: {
    default: 'Math Make Smart | Online Tutoring',
    template: '%s | Math Make Smart',
  },
  description:
    'One-to-one online tutoring in maths, English and science. Patient, structured and effective support for every learner.',
  applicationName: 'Math Make Smart',
  robots: {
    index: true,
    follow: true,
  },
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
