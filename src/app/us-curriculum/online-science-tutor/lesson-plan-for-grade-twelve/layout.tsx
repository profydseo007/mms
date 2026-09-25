import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 12 Science Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 12 Science lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Grade 12 students.',
  keywords: 'Grade 12 Science lesson plan, Grade 12 Science curriculum, science pacing guide grade 12, US Curriculum science, online science tutor grade 12, Grade 12 science worksheets, science curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-science-tutor/lesson-plan-for-grade-twelve',
  },
  openGraph: {
    title: 'Grade 12 Science Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 12 Science lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Grade 12 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-science-tutor/lesson-plan-for-grade-twelve',
    type: 'website',
  },
};

export default function LessonPlanScienceGrade12Layout({ children }: { children: React.ReactNode }) {
  return children;
}
