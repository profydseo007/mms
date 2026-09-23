'use client';

import CurriculumIE from '@/app/irish-curriculum/page';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <CurriculumIE onNavigate={navigateTo} />;
}