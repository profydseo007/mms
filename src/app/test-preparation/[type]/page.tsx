'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ClipboardList, FileCheck2, Trophy, type LucideIcon } from 'lucide-react';
import USSatPage from '@/app/sat/page';
import USActPage from '@/app/act/page';
import USApPage from '@/app/ap/page';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { TEST_PREP_SLUG_TO_TITLE } from '@/lib/navigation';

const US_TEST_PREP_TYPES: Record<string, { title: string; icon: LucideIcon }> = {
  sat: { title: 'SAT', icon: ClipboardList },
  act: { title: 'ACT', icon: FileCheck2 },
  ap: { title: 'AP', icon: Trophy },
};

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

  const title = US_TEST_PREP_TYPES[type]?.title ?? TEST_PREP_SLUG_TO_TITLE[type] ?? decodeURIComponent(type);
  return <SubjectPage title={title || 'SAT'} type="test-prep" onNavigate={navigateTo} />;
}
