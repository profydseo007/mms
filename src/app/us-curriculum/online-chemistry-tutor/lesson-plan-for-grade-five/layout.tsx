import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 5 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 5 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 5 students.',
  keywords: 'Grade 5 Chemistry lesson plan, Grade 5 Chemistry curriculum, chemistry pacing guide grade 5, US Curriculum chemistry, online chemistry tutor grade 5, Grade 5 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-five',
  },
  openGraph: {
    title: 'Grade 5 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 5 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 5 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-five',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade5Layout({ children }: { children: React.ReactNode }) {
  return children;
}
