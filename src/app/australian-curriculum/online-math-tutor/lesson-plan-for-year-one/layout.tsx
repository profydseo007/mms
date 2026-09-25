import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Year 1 Math Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
  description:
    'Comprehensive Year 1 Math lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Year 1 students.',
  keywords: 'Year 1 Math lesson plan, Year 1 Math curriculum, math pacing guide year 1, Australian Curriculum math, online math tutor year 1, Year 1 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/australian-curriculum/online-math-tutor/lesson-plan-for-year-one',
  },
  openGraph: {
    title: 'Year 1 Math Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
    description:
      'Comprehensive Year 1 Math lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Year 1 students.',
    url: 'https://mathmakesmart.com/australian-curriculum/online-math-tutor/lesson-plan-for-year-one',
    type: 'website',
  },
};

export default function LessonPlanMathYear1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
