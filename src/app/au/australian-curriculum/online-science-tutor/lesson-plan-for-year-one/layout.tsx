import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Year 1 Science Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
  description:
    'Comprehensive Year 1 Science lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Year 1 students.',
  keywords: 'Year 1 Science lesson plan, Year 1 Science curriculum, science pacing guide year 1, Australian Curriculum science, online science tutor year 1, Year 1 science worksheets, science curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/au/australian-curriculum/online-science-tutor/lesson-plan-for-year-one',
  },
  openGraph: {
    title: 'Year 1 Science Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
    description:
      'Comprehensive Year 1 Science lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Year 1 students.',
    url: 'https://mathmakesmart.com/au/australian-curriculum/online-science-tutor/lesson-plan-for-year-one',
    type: 'website',
  },
};

export default function LessonPlanScienceYear1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
