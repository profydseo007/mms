'use client';

import BiologySubject from '@/components/subjects/BiologySubject';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <BiologySubject onNavigate={navigateTo} />;
}
