import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 11 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 11 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 11 students.',
  keywords: 'Grade 11 Chemistry lesson plan, Grade 11 Chemistry curriculum, chemistry pacing guide grade 11, US Curriculum chemistry, online chemistry tutor grade 11, Grade 11 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-eleven',
  },
  openGraph: {
    title: 'Grade 11 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 11 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 11 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-eleven',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade11Layout({ children }: { children: React.ReactNode }) {
  return children;
}
