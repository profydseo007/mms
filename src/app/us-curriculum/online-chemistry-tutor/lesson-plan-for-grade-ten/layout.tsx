import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 10 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 10 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 10 students.',
  keywords: 'Grade 10 Chemistry lesson plan, Grade 10 Chemistry curriculum, chemistry pacing guide grade 10, US Curriculum chemistry, online chemistry tutor grade 10, Grade 10 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-ten',
  },
  openGraph: {
    title: 'Grade 10 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 10 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 10 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-ten',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade10Layout({ children }: { children: React.ReactNode }) {
  return children;
}
