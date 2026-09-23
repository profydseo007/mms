'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowLeft, FilePlus2, LogOut, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ADMIN_TOKEN_KEY, getApiUrl } from '@/lib/admin';

type BlogStatus = 'draft' | 'published';
type BlogCountry = 'US' | 'GB' | 'AU' | 'CA' | 'IE' | 'NZ';

interface FormState {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  author_detail: string;
  country: BlogCountry;
  tags: string;
  keywords: string;
  status: BlogStatus;
}

const initialForm: FormState = { title: '', slug: '', content: '', excerpt: '', author: '', author_detail: '', country: 'US', tags: '', keywords: '', status: 'draft' };

function normalizeList(value: string) {
  return [...new Set(value.split(',').map((item) => item.trim().toLowerCase()).filter(Boolean))];
}

export default function AdminBlogCreate() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedToken = sessionStorage.getItem(ADMIN_TOKEN_KEY);
    if (!savedToken) router.replace('/admin/login');
    else setToken(savedToken);
  }, [router]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token) return;
    setError('');
    setMessage('');
    setIsSubmitting(true);

    const payload = new FormData();
    payload.append('title', form.title);
    payload.append('slug', form.slug);
    payload.append('content', form.content);
    if (form.excerpt) payload.append('excerpt', form.excerpt);
    payload.append('author', form.author);
    if (form.author_detail) payload.append('author_detail', form.author_detail);
    payload.append('country', form.country);
    normalizeList(form.tags).forEach((tag) => payload.append('tags', tag));
    normalizeList(form.keywords).forEach((keyword) => payload.append('keywords', keyword));
    payload.append('status', form.status);
    if (coverImage) payload.append('cover_image', coverImage);

    try {
      const response = await fetch(`${getApiUrl()}/blogs/`, { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: payload });
      const data = (await response.json().catch(() => ({}))) as { detail?: string; blog_id?: string };
      if (!response.ok) throw new Error(data.detail || 'The blog post could not be created.');
      setMessage(`Blog post created${data.blog_id ? ` (${data.blog_id})` : ''}.`);
      setForm(initialForm);
      setCoverImage(null);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to reach the blog service.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function signOut() {
    sessionStorage.removeItem(ADMIN_TOKEN_KEY);
    router.replace('/admin/login');
  }

  if (!token) return <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center font-body-md text-on-surface-variant">Checking admin access...</main>;

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-soft-gray px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><button onClick={() => router.push('/blog')} className="mb-5 flex items-center gap-2 font-label-md text-label-md text-primary cursor-pointer"><ArrowLeft className="h-4 w-4" /> View blogs</button><p className="mb-2 font-label-sm text-label-sm uppercase tracking-[0.14em] text-primary">Content studio</p><h1 className="font-display-lg text-display-lg-mobile text-charcoal md:text-display-lg">Create a blog post</h1></div><button onClick={signOut} className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant cursor-pointer hover:text-error"><LogOut className="h-4 w-4" /> Sign out</button></div>
        <form onSubmit={handleSubmit} className="space-y-7 rounded-2xl border border-outline-variant/40 bg-white p-6 shadow-[0_12px_40px_rgba(36,36,48,0.08)] md:p-10">
          <div className="grid gap-6 md:grid-cols-2"><label className="block md:col-span-2"><span className="mb-2 block font-label-md text-label-md text-charcoal">Title</span><input value={form.title} onChange={(event) => updateField('title', event.target.value)} required maxLength={200} className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block md:col-span-2"><span className="mb-2 block font-label-md text-label-md text-charcoal">Slug</span><input value={form.slug} onChange={(event) => updateField('slug', event.target.value.toLowerCase())} required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="my-first-blog-post" className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block"><span className="mb-2 block font-label-md text-label-md text-charcoal">Author</span><input value={form.author} onChange={(event) => updateField('author', event.target.value)} required maxLength={100} className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block"><span className="mb-2 block font-label-md text-label-md text-charcoal">Author detail</span><input value={form.author_detail} onChange={(event) => updateField('author_detail', event.target.value)} maxLength={300} className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block"><span className="mb-2 block font-label-md text-label-md text-charcoal">Country</span><select value={form.country} onChange={(event) => updateField('country', event.target.value)} className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"><option value="US">United States</option><option value="GB">United Kingdom</option><option value="AU">Australia</option><option value="CA">Canada</option><option value="IE">Ireland</option><option value="NZ">New Zealand</option></select></label><label className="block"><span className="mb-2 block font-label-md text-label-md text-charcoal">Tags <span className="font-normal text-on-surface-variant">(comma separated)</span></span><input value={form.tags} onChange={(event) => updateField('tags', event.target.value)} placeholder="fastapi, mongodb" className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block"><span className="mb-2 block font-label-md text-label-md text-charcoal">Keywords <span className="font-normal text-on-surface-variant">(comma separated)</span></span><input value={form.keywords} onChange={(event) => updateField('keywords', event.target.value)} placeholder="blogging, api" className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block md:col-span-2"><span className="mb-2 block font-label-md text-label-md text-charcoal">Excerpt</span><textarea value={form.excerpt} onChange={(event) => updateField('excerpt', event.target.value)} maxLength={500} rows={3} className="w-full resize-y rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block md:col-span-2"><span className="mb-2 block font-label-md text-label-md text-charcoal">Cover image</span><input type="file" accept="image/*" onChange={(event) => setCoverImage(event.target.files?.[0] || null)} className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block md:col-span-2"><span className="mb-2 block font-label-md text-label-md text-charcoal">Content</span><textarea value={form.content} onChange={(event) => updateField('content', event.target.value)} required rows={14} className="w-full resize-y rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="block"><span className="mb-2 block font-label-md text-label-md text-charcoal">Status</span><select value={form.status} onChange={(event) => updateField('status', event.target.value)} className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"><option value="draft">Draft</option><option value="published">Published</option></select></label></div>
          {error && <p role="alert" className="rounded-lg bg-error-container px-4 py-3 font-body-md text-body-md text-on-error-container">{error}</p>}{message && <p role="status" className="rounded-lg bg-secondary-container px-4 py-3 font-body-md text-body-md text-on-secondary-container">{message}</p>}
          <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 rounded-lg bg-royal-purple px-6 py-3.5 font-label-md text-label-md text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"><Send className="h-4 w-4" />{isSubmitting ? 'Creating...' : form.status === 'published' ? 'Publish blog post' : 'Save draft'}</button>
        </form>
        <p className="mt-5 flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"><FilePlus2 className="h-4 w-4" /> Posts are validated by the FastAPI service before they are saved.</p>
      </div>
    </main>
  );
}