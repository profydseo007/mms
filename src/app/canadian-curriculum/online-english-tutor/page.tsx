'use client';

import EnglishSubject from '@/components/subjects/EnglishSubject';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <EnglishSubject onNavigate={navigateTo} />;
}
