'use client';

import { use } from 'react';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page({ params }: { params: Promise<{ title: string }> }) {
  const { title } = use(params);
  const { navigateTo } = useAppNavigate();
  return <SubjectPage title={decodeURIComponent(title)} type="subject" onNavigate={navigateTo} />;
}
