import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Year 1 English Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
  description:
    'Comprehensive Year 1 English lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Year 1 students.',
  keywords: 'Year 1 English lesson plan, Year 1 English curriculum, english pacing guide year 1, Australian Curriculum english, online english tutor year 1, Year 1 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/au/australian-curriculum/online-english-tutor/lesson-plan-for-year-one',
  },
  openGraph: {
    title: 'Year 1 English Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
    description:
      'Comprehensive Year 1 English lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Year 1 students.',
    url: 'https://mathmakesmart.com/au/australian-curriculum/online-english-tutor/lesson-plan-for-year-one',
    type: 'website',
  },
};

export default function LessonPlanEnglishYear1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
