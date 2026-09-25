import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 3 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 3 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 3 students.',
  keywords: 'Grade 3 Math lesson plan, Grade 3 Math curriculum, math pacing guide grade 3, US Curriculum math, online math tutor grade 3, Grade 3 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-three',
  },
  openGraph: {
    title: 'Grade 3 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 3 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 3 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-three',
    type: 'website',
  },
};

export default function LessonPlanMathGrade3Layout({ children }: { children: React.ReactNode }) {
  return children;
}
