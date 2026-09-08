'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import USSatPage from '@/app/sat/page';
import USActPage from '@/app/act/page';
import USApPage from '@/app/ap/page';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { TEST_PREP_SLUG_TO_TITLE } from '@/lib/navigation';

export default function TestPreparationPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const { navigateTo } = useAppNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!type) router.replace('/test-preparation/sat');
  }, [type, router]);

  if (type === 'sat') return <USSatPage />;
  if (type === 'act') return <USActPage />;
  if (type === 'ap')  return <USApPage />;

  const title = TEST_PREP_SLUG_TO_TITLE[type] ?? decodeURIComponent(type);
  return <SubjectPage title={title || 'SAT'} type="test-prep" onNavigate={navigateTo} />;
}
