'use client';

import CurriculumCA from '@/app/canadian-curriculum/page';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <CurriculumCA onNavigate={navigateTo} />;
}
