'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import IEJuniorCyclePage from '@/app/ie/junior-cycle/page';
import IELeavingCertPage from '@/app/ie/leaving-certificate/page';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';

const IE_TEST_PREP_TITLES: Record<string, string> = {
  'junior-cycle': 'Junior Cycle',
  'leaving-certificate': 'Leaving Certificate',
};

export default function IETestPreparationTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const { navigateTo } = useAppNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!type) router.replace('/ie/test-preparation/junior-cycle');
  }, [type, router]);

  if (type === 'junior-cycle') return <IEJuniorCyclePage />;
  if (type === 'leaving-certificate') return <IELeavingCertPage />;

  const title = IE_TEST_PREP_TITLES[type] ?? decodeURIComponent(type);
  return <SubjectPage title={title || 'Junior Cycle'} type="test-prep" onNavigate={navigateTo} />;
}
