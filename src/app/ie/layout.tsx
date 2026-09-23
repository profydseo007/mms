import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Tutoring in Ireland',
  description:
    'One-to-one online tutoring in maths, science, English and Irish, matched to the Junior Cycle and Leaving Certificate curriculum.',
};

export default function IrelandLayout({ children }: { children: React.ReactNode }) {
  return children;
}
