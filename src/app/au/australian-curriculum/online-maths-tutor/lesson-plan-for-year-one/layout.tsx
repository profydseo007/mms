import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Year 1 Maths Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
  description:
    'Comprehensive Year 1 Maths lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online maths tutoring for Year 1 students.',
  keywords: 'Year 1 Maths lesson plan, Year 1 Maths curriculum, maths pacing guide year 1, Australian Curriculum maths, online maths tutor year 1, Year 1 maths worksheets, maths curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/au/australian-curriculum/online-maths-tutor/lesson-plan-for-year-one',
  },
  openGraph: {
    title: 'Year 1 Maths Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
    description:
      'Comprehensive Year 1 Maths lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online maths tutoring for Year 1 students.',
    url: 'https://mathmakesmart.com/au/australian-curriculum/online-maths-tutor/lesson-plan-for-year-one',
    type: 'website',
  },
};

export default function LessonPlanMathsYear1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
