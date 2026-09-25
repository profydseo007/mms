import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 8 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 8 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 8 students.',
  keywords: 'Grade 8 Chemistry lesson plan, Grade 8 Chemistry curriculum, chemistry pacing guide grade 8, US Curriculum chemistry, online chemistry tutor grade 8, Grade 8 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-eight',
  },
  openGraph: {
    title: 'Grade 8 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 8 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 8 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-eight',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade8Layout({ children }: { children: React.ReactNode }) {
  return children;
}
