'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Clock3, Search, Sparkles } from 'lucide-react';
import { BlogPost, fallbackBlogs } from '@/lib/blogs';
import { ActivePage } from '@/lib/types';

const FALLBACK_COVER = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80';

interface BlogsProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
  country?: string;
}

export default function Blogs({ onNavigate, country = 'US' }: BlogsProps) {
  const [posts, setPosts] = useState(fallbackBlogs);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return;

    fetch(`${apiUrl.replace(/\/$/, '')}/blogs/?limit=100&country=${country}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Blog API unavailable'))))
      .then((data: { items?: BlogPost[] }) => {
        if (data.items?.length) setPosts(data.items);
      })
      .catch(() => undefined);
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return posts;
    return posts.filter((post) =>
      [post.title, post.excerpt, post.category, ...post.tags].filter((value): value is string => Boolean(value)).some((value) => value.toLowerCase().includes(normalizedQuery))
    );
  }, [posts, query]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="bg-surface font-body-md text-on-surface">
      <section className="relative overflow-hidden bg-charcoal py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(162,235,47,0.25),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(97,88,233,0.35),transparent_35%)]" />
        <div className="relative mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 font-label-sm text-label-sm uppercase tracking-[0.16em] text-lime-green">
              <Sparkles className="h-4 w-4" /> Ideas for the next step
            </div>
            <h1 className="font-display-lg text-display-lg-mobile mb-6 text-white md:text-display-lg">The smarter study journal</h1>
            <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-white/75">
              Clear, useful advice for students and families navigating revision, exams, and the satisfying work of getting better.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-max-width px-margin-mobile py-16 md:px-margin-desktop md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-label-sm text-label-sm uppercase tracking-[0.14em] text-primary">From our tutors</p>
            <h2 className="font-headline-lg text-headline-lg text-charcoal">A better way to prepare</h2>
          </div>
          <label className="flex w-full items-center gap-3 border-b-2 border-outline-variant bg-transparent py-3 text-on-surface-variant md:max-w-xs">
            <Search className="h-5 w-5 shrink-0" />
            <span className="sr-only">Search blog posts</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="w-full bg-transparent font-body-md outline-none placeholder:text-on-surface-variant/70" />
          </label>
        </div>

        {featuredPost ? (
          <>
            <article className="mb-14 grid overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_rgba(36,36,48,0.09)] md:grid-cols-[1.1fr_0.9fr]">
              <img src={featuredPost.cover_image || FALLBACK_COVER} alt="" className="h-72 w-full object-cover md:h-full" />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="mb-5 flex items-center gap-3 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                  <span>{featuredPost.category || 'Study Skills'}</span><span className="h-1 w-1 rounded-full bg-lime-green" /><span>{featuredPost.read_time || 5} min read</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg mb-4 text-charcoal">{featuredPost.title}</h3>
                <p className="mb-8 max-w-xl font-body-md text-body-md leading-relaxed text-on-surface-variant">{featuredPost.excerpt}</p>
                <button onClick={() => onNavigate('blog', featuredPost.slug)} className="flex w-fit items-center gap-2 font-label-md text-label-md text-primary hover:gap-4 cursor-pointer transition-all">
                  Read the full article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>

            <div className="grid gap-8 md:grid-cols-2">
              {remainingPosts.map((post) => (
                <article key={post.slug} className="group overflow-hidden rounded-2xl border border-outline-variant/30 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(36,36,48,0.09)]">
                  <img src={post.cover_image || FALLBACK_COVER} alt="" className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-7">
                    <div className="mb-4 flex items-center justify-between gap-3 font-label-sm text-label-sm uppercase tracking-wider text-primary"><span>{post.category || 'Study Skills'}</span><span className="flex items-center gap-1 text-on-surface-variant"><Clock3 className="h-3.5 w-3.5" /> {post.read_time || 5} min</span></div>
                    <h3 className="font-headline-md text-headline-md mb-3 text-charcoal">{post.title}</h3>
                    <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">{post.excerpt}</p>
                    <button onClick={() => onNavigate('blog', post.slug)} className="flex items-center gap-2 font-label-md text-label-md text-primary cursor-pointer">Read article <ArrowRight className="h-4 w-4" /></button>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="py-20 text-center"><BookOpen className="mx-auto mb-4 h-10 w-10 text-primary" /><p className="font-body-lg text-body-lg text-on-surface-variant">No articles match that search.</p></div>
        )}
      </main>
    </div>
  );
}