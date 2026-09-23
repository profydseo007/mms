export interface BlogPost {
  id?: string;
  _id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  author_detail?: string | null;
  country?: string;
  category?: string;
  tags: string[];
  keywords?: string[];
  read_time?: number;
  cover_image?: string | null;
  created_at: string;
  updated_at?: string;
  status?: 'published' | 'draft';
}

export const fallbackBlogs: BlogPost[] = [
  {
    slug: 'how-to-build-a-revision-plan-that-actually-works',
    title: 'How to build a revision plan that actually works',
    excerpt: 'A practical way to turn a crowded syllabus into a calm, achievable weekly plan.',
    content: 'The best revision plan is one you can return to on an ordinary Tuesday. Start by listing the topics you need to know, then divide them into small sessions that mix recall, practice, and review. Leave space for mistakes: they are useful evidence, not a verdict.',
    author: 'Math Make Smart Team',
    category: 'Study Skills',
    tags: ['Revision', 'Study Skills'],
    read_time: 6,
    cover_image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    created_at: '2026-07-28T09:00:00Z',
  },
  {
    slug: 'the-exam-technique-habits-that-save-marks',
    title: 'The exam technique habits that save marks',
    excerpt: 'Small decisions in the room can make your hard-earned knowledge count for more.',
    content: 'Read every question before reaching for your calculator. Underline command words, write down the information you know, and show enough working for your method to be followed. These habits create a reliable path through unfamiliar questions.',
    author: 'Dr. Aisha Khan',
    category: 'Exam Prep',
    tags: ['Exam Prep', 'GCSE'],
    read_time: 4,
    cover_image: 'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1200&q=80',
    created_at: '2026-07-14T09:00:00Z',
  },
  {
    slug: 'why-mistakes-are-the-fastest-route-to-better-maths',
    title: 'Why mistakes are the fastest route to better maths',
    excerpt: 'Turn wrong answers into a personal map of what to practise next.',
    content: 'Keep a short error log after each practice paper. Record what went wrong, why it happened, and the smallest exercise that would help you avoid it next time. Reviewing this log is often more valuable than completing another full paper.',
    author: 'Math Make Smart Team',
    category: 'Mindset',
    tags: ['Maths', 'Mindset'],
    read_time: 5,
    cover_image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    created_at: '2026-06-30T09:00:00Z',
  },
];

export function getFallbackBlog(slug: string) {
  return fallbackBlogs.find((blog) => blog.slug === slug);
}