'use client';

import { useParams } from 'next/navigation';
import BlogArticle from '@/components/BlogArticle';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const params = useParams<{ slug: string }>();
  const { navigateTo } = useAppNavigate();
  return <BlogArticle slug={params.slug} onNavigate={navigateTo} />;
}