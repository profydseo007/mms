import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 5 Science Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 5 Science lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Grade 5 students.',
  keywords: 'Grade 5 Science lesson plan, Grade 5 Science curriculum, science pacing guide grade 5, US Curriculum science, online science tutor grade 5, Grade 5 science worksheets, science curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-science-tutor/lesson-plan-for-grade-five',
  },
  openGraph: {
    title: 'Grade 5 Science Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 5 Science lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Grade 5 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-science-tutor/lesson-plan-for-grade-five',
    type: 'website',
  },
};

export default function LessonPlanScienceGrade5Layout({ children }: { children: React.ReactNode }) {
  return children;
}
