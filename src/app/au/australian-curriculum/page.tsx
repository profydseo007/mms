'use client';

import CurriculumAU from '@/app/australian-curriculum/page';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <CurriculumAU onNavigate={navigateTo} />;
}