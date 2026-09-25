import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Year 1 Chemistry Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
  description:
    'Comprehensive Year 1 Chemistry lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Year 1 students.',
  keywords: 'Year 1 Chemistry lesson plan, Year 1 Chemistry curriculum, chemistry pacing guide year 1, Australian Curriculum chemistry, online chemistry tutor year 1, Year 1 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/au/australian-curriculum/online-chemistry-tutor/lesson-plan-for-year-one',
  },
  openGraph: {
    title: 'Year 1 Chemistry Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
    description:
      'Comprehensive Year 1 Chemistry lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Year 1 students.',
    url: 'https://mathmakesmart.com/au/australian-curriculum/online-chemistry-tutor/lesson-plan-for-year-one',
    type: 'website',
  },
};

export default function LessonPlanChemistryYear1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
