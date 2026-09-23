'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import GcseMathsMock from '@/components/subjects/GcseMathsMock';
import GcsePhysicsMock from '@/components/subjects/GcsePhysicsMock';
import GcseChemistryMock from '@/components/subjects/GcseChemistryMock';
import GcseBiologyMock from '@/components/subjects/GcseBiologyMock';
import GcseCombinedScienceMock from '@/components/subjects/GcseCombinedScienceMock';
import ALevelMathsMock from '@/components/subjects/ALevelMathsMock';
import ALevelPhysicsMock from '@/components/subjects/ALevelPhysicsMock';
import ALevelChemistryMock from '@/components/subjects/ALevelChemistryMock';
import ALevelBiologyMock from '@/components/subjects/ALevelBiologyMock';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { ActivePage } from '@/lib/types';

const COMPONENT_MAP: Record<string, React.ComponentType<{ onNavigate: (page: ActivePage, subjectTitle?: string) => void }>> = {
  'gcse-maths': GcseMathsMock,
  'gcse-physics': GcsePhysicsMock,
  'gcse-chemistry': GcseChemistryMock,
  'gcse-biology': GcseBiologyMock,
  'gcse-combined-science': GcseCombinedScienceMock,
  'alevel-maths': ALevelMathsMock,
  'alevel-physics': ALevelPhysicsMock,
  'alevel-chemistry': ALevelChemistryMock,
  'alevel-biology': ALevelBiologyMock,
};

export default function Page({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = use(params);
  const { navigateTo } = useAppNavigate();

  const MockComponent = COMPONENT_MAP[subject];
  if (!MockComponent) {
    notFound();
  }

  return <MockComponent onNavigate={navigateTo} />;
}
