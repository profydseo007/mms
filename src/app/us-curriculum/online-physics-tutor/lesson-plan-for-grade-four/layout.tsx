import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 4 Physics Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 4 Physics lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Grade 4 students.',
  keywords: 'Grade 4 Physics lesson plan, Grade 4 Physics curriculum, physics pacing guide grade 4, US Curriculum physics, online physics tutor grade 4, Grade 4 physics worksheets, physics curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-physics-tutor/lesson-plan-for-grade-four',
  },
  openGraph: {
    title: 'Grade 4 Physics Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 4 Physics lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Grade 4 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-physics-tutor/lesson-plan-for-grade-four',
    type: 'website',
  },
};

export default function LessonPlanPhysicsGrade4Layout({ children }: { children: React.ReactNode }) {
  return children;
}
