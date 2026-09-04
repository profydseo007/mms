'use client';

import { use } from 'react';
import ElevenPlusPrep from '@/components/testprep/ElevenPlusPrep';
import ThirteenPlusPrep from '@/components/testprep/ThirteenPlusPrep';
import GcsePrep from '@/components/testprep/GcsePrep';
import IgcsePrep from '@/components/testprep/IgcsePrep';
import ALevelsPrep from '@/components/testprep/ALevelsPrep';
import SubjectPage from '@/components/SubjectPage';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { TEST_PREP_SLUG_TO_TITLE } from '@/lib/navigation';

export default function Page({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const { navigateTo } = useAppNavigate();

  const title = TEST_PREP_SLUG_TO_TITLE[type] ?? decodeURIComponent(type);

  if (title === '11 Plus' || title === '11+' || title === '11Plus') {
    return <ElevenPlusPrep onNavigate={navigateTo} />;
  }
  if (title === '13 Plus' || title === '13+' || title === '13Plus') {
    return <ThirteenPlusPrep onNavigate={navigateTo} />;
  }
  if (title === 'GCSE') {
    return <GcsePrep onNavigate={navigateTo} />;
  }
  if (title === 'IGCSE') {
    return <IgcsePrep onNavigate={navigateTo} />;
  }
  if (title === 'A Levels' || title === 'A-Levels') {
    return <ALevelsPrep onNavigate={navigateTo} />;
  }

  return <SubjectPage title={title || 'GCSE'} type="test-prep" onNavigate={navigateTo} />;
}
