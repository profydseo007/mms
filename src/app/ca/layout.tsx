import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Tutoring in Canada',
  description:
    'Personalized one-to-one online tutoring in maths, English, science and French immersion, matched to your provincial curriculum.',
};

export default function CanadaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
