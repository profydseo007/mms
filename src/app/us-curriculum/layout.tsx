import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'US Curriculum Online Tutoring',
  description:
    'One-to-one online tutoring in maths, English and science for students following the US curriculum.',
};

export default function UsCurriculumLayout({ children }: { children: React.ReactNode }) {
  return children;
}
