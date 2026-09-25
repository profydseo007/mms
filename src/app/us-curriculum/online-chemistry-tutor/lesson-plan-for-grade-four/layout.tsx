import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 4 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 4 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 4 students.',
  keywords: 'Grade 4 Chemistry lesson plan, Grade 4 Chemistry curriculum, chemistry pacing guide grade 4, US Curriculum chemistry, online chemistry tutor grade 4, Grade 4 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-four',
  },
  openGraph: {
    title: 'Grade 4 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 4 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 4 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-four',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade4Layout({ children }: { children: React.ReactNode }) {
  return children;
}
