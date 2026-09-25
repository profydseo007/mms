import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 7 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 7 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 7 students.',
  keywords: 'Grade 7 Chemistry lesson plan, Grade 7 Chemistry curriculum, chemistry pacing guide grade 7, US Curriculum chemistry, online chemistry tutor grade 7, Grade 7 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-seven',
  },
  openGraph: {
    title: 'Grade 7 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 7 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 7 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-seven',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade7Layout({ children }: { children: React.ReactNode }) {
  return children;
}
