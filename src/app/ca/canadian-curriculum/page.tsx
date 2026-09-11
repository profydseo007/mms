'use client';

import CurriculumCanada from '@/app/canadian-curriculum/page';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <CurriculumCanada onNavigate={navigateTo} />;
}