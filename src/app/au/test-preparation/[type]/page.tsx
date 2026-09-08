'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Award, ClipboardCheck, GraduationCap, Medal, Trophy, type LucideIcon } from 'lucide-react';
import AUNaplanPage from '@/app/au/naplan/page';
import AUSelectiveSchoolTestPage from '@/app/au/selective-school-test/page';
import AUHscPage from '@/app/au/hsc/page';
import AUVcePage from '@/app/au/vce/page';
import AUQcePage from '@/app/au/qce/page';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';

const AU_TEST_PREP_TYPES: Record<string, { title: string; icon: LucideIcon }> = {
  naplan: { title: 'NAPLAN', icon: ClipboardCheck },
  'selective-school-test': { title: 'Selective School Test', icon: Medal },
  hsc: { title: 'HSC', icon: GraduationCap },
  vce: { title: 'VCE', icon: Trophy },
  qce: { title: 'QCE', icon: Award },
};

export default function AUTestPreparationTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const { navigateTo } = useAppNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!type) router.replace('/au/test-preparation/naplan');
  }, [type, router]);

  if (type === 'naplan') return <AUNaplanPage />;
  if (type === 'selective-school-test') return <AUSelectiveSchoolTestPage />;
  if (type === 'hsc') return <AUHscPage />;
  if (type === 'vce') return <AUVcePage />;
  if (type === 'qce') return <AUQcePage />;

  const title = AU_TEST_PREP_TYPES[type]?.title ?? decodeURIComponent(type);
  return <SubjectPage title={title || 'NAPLAN'} type="test-prep" onNavigate={navigateTo} />;
}
