import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 12 Physics Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 12 Physics lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Grade 12 students.',
  keywords: 'Grade 12 Physics lesson plan, Grade 12 Physics curriculum, physics pacing guide grade 12, US Curriculum physics, online physics tutor grade 12, Grade 12 physics worksheets, physics curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-physics-tutor/lesson-plan-for-grade-twelve',
  },
  openGraph: {
    title: 'Grade 12 Physics Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 12 Physics lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Grade 12 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-physics-tutor/lesson-plan-for-grade-twelve',
    type: 'website',
  },
};

export default function LessonPlanPhysicsGrade12Layout({ children }: { children: React.ReactNode }) {
  return children;
}
