import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 2 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 2 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 2 students.',
  keywords: 'Grade 2 Chemistry lesson plan, Grade 2 Chemistry curriculum, chemistry pacing guide grade 2, US Curriculum chemistry, online chemistry tutor grade 2, Grade 2 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-two',
  },
  openGraph: {
    title: 'Grade 2 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 2 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 2 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-two',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade2Layout({ children }: { children: React.ReactNode }) {
  return children;
}
