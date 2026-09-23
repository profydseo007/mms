import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Tutoring in New Zealand',
  description:
    'One-to-one online tutoring in maths, science and English, matched to the New Zealand Curriculum and NCEA standards.',
};

export default function NewZealandLayout({ children }: { children: React.ReactNode }) {
  return children;
}
