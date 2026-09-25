import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Year 1 Physics Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
  description:
    'Comprehensive Year 1 Physics lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Year 1 students.',
  keywords: 'Year 1 Physics lesson plan, Year 1 Physics curriculum, physics pacing guide year 1, Australian Curriculum physics, online physics tutor year 1, Year 1 physics worksheets, physics curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/australian-curriculum/online-physics-tutor/lesson-plan-for-year-one',
  },
  openGraph: {
    title: 'Year 1 Physics Lesson Plan & Curriculum Map | Australian Curriculum | MMS',
    description:
      'Comprehensive Year 1 Physics lesson plan and pacing guide aligned to the Australian Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online physics tutoring for Year 1 students.',
    url: 'https://mathmakesmart.com/australian-curriculum/online-physics-tutor/lesson-plan-for-year-one',
    type: 'website',
  },
};

export default function LessonPlanPhysicsYear1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
