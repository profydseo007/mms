'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ClipboardCheck, MapPinned, type LucideIcon } from 'lucide-react';
import CAProvincialCurriculaPage from '@/app/ca/provincial-curricula/page';
import AlbertaDiplomaExamsPage from '@/app/ca/alberta-diploma-exams/page';
import BcGraduationAssessmentsPage from '@/app/ca/bc-graduation-assessments/page';
import CAEQAOPage from '@/app/ca/eqao/page';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';

const CA_TEST_PREP_TYPES: Record<string, { title: string; icon: LucideIcon }> = {
  'provincial-curricula': { title: 'Provincial Curricula', icon: MapPinned },
  eqao: { title: 'EQAO', icon: ClipboardCheck },
  'alberta-diploma-exams': { title: 'Alberta Diploma Exams', icon: MapPinned },
};

export default function CATestPreparationTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const { navigateTo } = useAppNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!type) router.replace('/ca/test-preparation/eqao');
  }, [type, router]);

  if (type === 'provincial-curricula') return <CAProvincialCurriculaPage />;
  if (type === 'eqao') return <CAEQAOPage />;
  if (type === 'alberta-diploma-exams') return <AlbertaDiplomaExamsPage/>;
  if (type === 'bc-graduation-assessments') return <BcGraduationAssessmentsPage/>;

  const title = CA_TEST_PREP_TYPES[type]?.title ?? decodeURIComponent(type);
  return <SubjectPage title={title || 'EQAO'} type="test-prep" onNavigate={navigateTo} />;
}
