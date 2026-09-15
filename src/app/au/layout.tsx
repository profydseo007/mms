import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Tutoring in Australia',
  description:
    'One-to-one online tutoring in maths, English and science, matched to the Australian Curriculum, NAPLAN and senior secondary pathways.',
};

export default function AustraliaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
