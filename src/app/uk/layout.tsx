import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Tutoring in the UK',
  description:
    'One-to-one online tutoring in maths, science and English, matched to your child\'s GCSE, A-Level and exam-board specification.',
};

export default function UnitedKingdomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
