import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 3 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 3 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 3 students.',
  keywords: 'Grade 3 Chemistry lesson plan, Grade 3 Chemistry curriculum, chemistry pacing guide grade 3, US Curriculum chemistry, online chemistry tutor grade 3, Grade 3 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-three',
  },
  openGraph: {
    title: 'Grade 3 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 3 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 3 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-three',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade3Layout({ children }: { children: React.ReactNode }) {
  return children;
}
