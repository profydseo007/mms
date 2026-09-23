'use client';

import CurriculumNZ from '@/app/new-zealand-curriculum/page';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function NZTestPreparationHub() {
  const { navigateTo } = useAppNavigate();

  return <CurriculumNZ onNavigate={navigateTo} />;
}