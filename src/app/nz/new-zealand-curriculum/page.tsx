'use client';

import CurriculumNZ from '@/app/new-zealand-curriculum/page';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <CurriculumNZ onNavigate={navigateTo} />;
}