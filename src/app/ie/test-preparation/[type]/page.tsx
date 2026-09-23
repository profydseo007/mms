'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BookOpenCheck, GraduationCap, type LucideIcon } from 'lucide-react';
import IEJuniorCyclePage from '@/app/ie/junior-cycle/page';
import IELeavingCertPage from '@/app/ie/leaving-certificate/page';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';

const IE_TEST_PREP_TYPES: Record<string, { title: string; icon: LucideIcon }> = {
  'junior-cycle': { title: 'Junior Cycle', icon: BookOpenCheck },
  'leaving-certificate': { title: 'Leaving Certificate', icon: GraduationCap },
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

  const title = IE_TEST_PREP_TYPES[type]?.title ?? decodeURIComponent(type);
  return <SubjectPage title={title || 'Junior Cycle'} type="test-prep" onNavigate={navigateTo} />;
}
