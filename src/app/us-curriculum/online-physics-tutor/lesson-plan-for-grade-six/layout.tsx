import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 6 Physics Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 6 Physics lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Grade 6 students.',
  keywords: 'Grade 6 Physics lesson plan, Grade 6 Physics curriculum, physics pacing guide grade 6, US Curriculum physics, online physics tutor grade 6, Grade 6 physics worksheets, physics curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-physics-tutor/lesson-plan-for-grade-six',
  },
  openGraph: {
    title: 'Grade 6 Physics Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 6 Physics lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Grade 6 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-physics-tutor/lesson-plan-for-grade-six',
    type: 'website',
  },
};

export default function LessonPlanPhysicsGrade6Layout({ children }: { children: React.ReactNode }) {
  return children;
}
