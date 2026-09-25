import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 8 Physics Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 8 Physics lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Grade 8 students.',
  keywords: 'Grade 8 Physics lesson plan, Grade 8 Physics curriculum, physics pacing guide grade 8, US Curriculum physics, online physics tutor grade 8, Grade 8 physics worksheets, physics curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-physics-tutor/lesson-plan-for-grade-eight',
  },
  openGraph: {
    title: 'Grade 8 Physics Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 8 Physics lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Grade 8 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-physics-tutor/lesson-plan-for-grade-eight',
    type: 'website',
  },
};

export default function LessonPlanPhysicsGrade8Layout({ children }: { children: React.ReactNode }) {
  return children;
}
