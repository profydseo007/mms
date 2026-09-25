import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 4 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 4 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 4 students.',
  keywords: 'Grade 4 Math lesson plan, Grade 4 Math curriculum, math pacing guide grade 4, US Curriculum math, online math tutor grade 4, Grade 4 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-four',
  },
  openGraph: {
    title: 'Grade 4 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 4 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 4 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-four',
    type: 'website',
  },
};

export default function LessonPlanMathGrade4Layout({ children }: { children: React.ReactNode }) {
  return children;
}
