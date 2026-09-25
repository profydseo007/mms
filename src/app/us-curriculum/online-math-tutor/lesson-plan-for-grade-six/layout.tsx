import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 6 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 6 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 6 students.',
  keywords: 'Grade 6 Math lesson plan, Grade 6 Math curriculum, math pacing guide grade 6, US Curriculum math, online math tutor grade 6, Grade 6 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-six',
  },
  openGraph: {
    title: 'Grade 6 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 6 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 6 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-six',
    type: 'website',
  },
};

export default function LessonPlanMathGrade6Layout({ children }: { children: React.ReactNode }) {
  return children;
}
