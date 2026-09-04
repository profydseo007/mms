import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import './globals.css';
import AppShell from '@/components/AppShell';

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
        <a
          href="https://api.whatsapp.com/send/?phone=%2B13474914870&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="whatsapp-float fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-5 sm:left-5 sm:h-14 sm:w-14"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
      </body>
    </html>
  );
}
