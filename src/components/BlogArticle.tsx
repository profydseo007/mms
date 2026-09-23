'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BlogPost, getFallbackBlog } from '@/lib/blogs';
import { getApiUrl } from '@/lib/admin';
import { ActivePage } from '@/lib/types';

const FALLBACK_COVER = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80';

function formatPublishedDate(date?: string) {
  if (!date) return '';
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(parsedDate);
}

interface BlogArticleProps {
  slug: string;
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
  country?: string;
}

export default function BlogArticle({ slug, onNavigate, country = 'US' }: BlogArticleProps) {
  const [post, setPost] = useState<BlogPost | undefined>(() => getFallbackBlog(slug));
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCurrent = true;

    fetch(`${getApiUrl()}/blogs/${encodeURIComponent(slug)}?country=${country}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Blog post unavailable'))))
      .then((data: BlogPost) => {
        if (isCurrent) setPost(data);
      })
      .catch(() => undefined)
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [country, slug]);

  useEffect(() => {
    fetch(`${getApiUrl()}/blogs/?limit=8&country=${country}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Blog posts unavailable'))))
      .then((data: { items?: BlogPost[] }) => {
        if (data.items?.length) setLatestPosts(data.items.filter((item) => item.slug !== slug).slice(0, 7));
      })
      .catch(() => setLatestPosts([]));
  }, [country, slug]);

  if (isLoading && !post) {
    return <main className="mx-auto max-w-max-width px-margin-mobile py-24 text-center font-body-md text-on-surface-variant md:px-margin-desktop">Loading article...</main>;
  }

  if (!post) {
    return (
      <main className="mx-auto max-w-max-width px-margin-mobile py-24 text-center md:px-margin-desktop">
        <h1 className="font-headline-lg text-headline-lg mb-4 text-charcoal">Article not found</h1>
        <button onClick={() => onNavigate('blogs')} className="font-label-md text-label-md text-primary cursor-pointer">Back to Blogs</button>
      </main>
    );
  }

  const publishedDate = formatPublishedDate(post.created_at);
  const sidebarPosts = latestPosts.length ? latestPosts : [getFallbackBlog('how-to-build-a-revision-plan-that-actually-works'), getFallbackBlog('the-exam-technique-habits-that-save-marks'), getFallbackBlog('why-mistakes-are-the-fastest-route-to-better-maths')].filter((item): item is BlogPost => Boolean(item && item.slug !== post.slug));

  return (
    <article className="border-t border-outline-variant/40 bg-white font-body-md text-charcoal">
      <div className="mx-auto grid max-w-[1280px] md:grid-cols-[minmax(0,1fr)_300px]">
        <div className="px-margin-mobile py-12 md:border-r md:border-outline-variant/50 md:px-16 md:py-16 lg:px-24">
          <button onClick={() => onNavigate('blogs')} className="mb-10 flex items-center gap-2 font-label-md text-label-md text-primary cursor-pointer"><ArrowLeft className="h-4 w-4" /> Back to Blogs</button>
          <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-body-sm text-body-sm text-on-surface-variant"><span>by {post.author}</span>{publishedDate && <><span>|</span><span>{publishedDate}</span></>}<span>|</span><span>{post.category || 'Study Skills'}</span><span>|</span><span>{post.read_time || 5} min read</span></div>
          <h1 className="mb-8 max-w-4xl font-display-lg text-display-lg-mobile leading-[1.08] text-charcoal md:text-[3.8rem]">{post.title}</h1>
          {post.author_detail && <p className="mb-8 max-w-3xl font-body-md text-body-md text-on-surface-variant">{post.author_detail}</p>}
          <img src={post.cover_image || FALLBACK_COVER} alt={post.title} className="mb-12 max-h-[560px] w-full object-cover" />
          <div className="prose max-w-none font-body-lg text-body-lg leading-relaxed text-on-surface-variant" dangerouslySetInnerHTML={{ __html: post.content }} />
          <button onClick={() => onNavigate('trial')} className="mt-12 flex items-center gap-2 bg-royal-purple px-6 py-4 font-label-md text-label-md text-white cursor-pointer">Build your study plan <ArrowRight className="h-4 w-4" /></button>
        </div>
        <aside className="border-t border-outline-variant/50 px-margin-mobile py-12 md:border-t-0 md:px-8 md:py-16">
          <h2 className="mb-6 font-headline-md text-headline-md text-charcoal">Latest Posts</h2>
          <nav aria-label="Latest posts" className="space-y-5">
            {sidebarPosts.map((item) => <button key={item.slug} onClick={() => onNavigate('blog', item.slug)} className="block text-left font-body-md text-body-md leading-relaxed text-primary hover:underline cursor-pointer">{item.title}</button>)}
          </nav>
        </aside>
      </div>
    </article>
  );
}