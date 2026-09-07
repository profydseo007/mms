'use client';

import ScienceSubject from '@/components/subjects/ScienceSubject';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <ScienceSubject onNavigate={navigateTo} />;
}
