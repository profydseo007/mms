'use client';

import { useParams } from 'next/navigation';
import BiologySubject from '@/components/subjects/BiologySubject';
import ChemistrySubject from '@/components/subjects/ChemistrySubject';
import EnglishSubject from '@/components/subjects/EnglishSubject';
import MathSubject from '@/components/subjects/MathSubject';
import PhysicsSubject from '@/components/subjects/PhysicsSubject';
import ScienceSubject from '@/components/subjects/ScienceSubject';
import { useAppNavigate } from '@/lib/useAppNavigate';

const SUBJECTS = {
  'online-biology-tutor': BiologySubject,
  'online-chemistry-tutor': ChemistrySubject,
  'online-english-tutor': EnglishSubject,
  'online-math-tutor': MathSubject,
  'online-maths-tutor': MathSubject,  // UK/AU/NZ/IE spelling alias
  'online-physics-tutor': PhysicsSubject,
  'online-science-tutor': ScienceSubject,
};

export default function Page() {
  const { subject } = useParams<{ subject: string }>();
  const { navigateTo } = useAppNavigate();
  const Subject = SUBJECTS[subject as keyof typeof SUBJECTS];

  return Subject ? <Subject onNavigate={navigateTo} /> : null;
}