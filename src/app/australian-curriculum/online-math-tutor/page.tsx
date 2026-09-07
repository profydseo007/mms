'use client';

import MathSubject from '@/components/subjects/MathSubject';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <MathSubject onNavigate={navigateTo} />;
}
