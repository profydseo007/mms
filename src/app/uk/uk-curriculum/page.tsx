'use client';

import CurriculumUK from '@/app/uk-curriculum/page';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <CurriculumUK onNavigate={navigateTo} />;
}