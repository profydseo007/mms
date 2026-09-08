'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import UKElevenPlusPage from '@/app/uk/11-plus/page';
import UKThirteenPlusPage from '@/app/uk/13-plus/page';
import UKGcsePage from '@/app/uk/gcse/page';
import UKIgcsePage from '@/app/uk/igcse/page';
import UKALevelsPage from '@/app/uk/a-levels/page';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { TEST_PREP_SLUG_TO_TITLE } from '@/lib/navigation';

export default function UKTestPreparationPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const { navigateTo } = useAppNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!type) router.replace('/uk/test-preparation/gcse');
  }, [type, router]);

  if (type === '11-plus') return <UKElevenPlusPage />;
  if (type === '13-plus') return <UKThirteenPlusPage />;
  if (type === 'gcse')    return <UKGcsePage />;
  if (type === 'igcse')   return <UKIgcsePage />;
  if (type === 'a-levels') return <UKALevelsPage />;

  const title = TEST_PREP_SLUG_TO_TITLE[type] ?? decodeURIComponent(type);
  return <SubjectPage title={title || 'GCSE'} type="test-prep" onNavigate={navigateTo} />;
}
