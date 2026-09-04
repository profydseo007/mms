'use client';

import { useParams, useRouter } from 'next/navigation';
import BlogArticle from './BlogArticle';
import Blogs from './Blogs';
import { useAppNavigate } from '@/lib/useAppNavigate';

interface CountryBlogsProps {
  country: string;
}

export default function CountryBlogs({ country }: CountryBlogsProps) {
  const params = useParams<{ slug?: string }>();
  const router = useRouter();
  const { navigateTo } = useAppNavigate();
  const basePath = `/${country.toLowerCase()}/blog`;

  function navigate(page: Parameters<typeof navigateTo>[0], subjectTitle?: string) {
    if (page === 'blogs') {
      router.push(basePath);
      return;
    }
    if (page === 'blog') {
      router.push(`${basePath}/${encodeURIComponent(subjectTitle ?? '')}`);
      return;
    }
    navigateTo(page, subjectTitle);
  }

  if (params.slug) {
    return <BlogArticle slug={params.slug} country={country} onNavigate={navigate} />;
  }

  return <Blogs country={country} onNavigate={navigate} />;
}
