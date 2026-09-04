'use client';

import { FormEvent, useState } from 'react';
import { LockKeyhole, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ADMIN_TOKEN_KEY, getAdminLoginPath, getApiUrl } from '@/lib/admin';

interface TokenResponse {
  access_token?: string;
}

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(`${getApiUrl()}${getAdminLoginPath()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = (await response.json().catch(() => ({}))) as TokenResponse & { detail?: string };

      if (!response.ok || !data.access_token) {
        throw new Error(data.detail || 'Unable to sign in with those details.');
      }

      sessionStorage.setItem(ADMIN_TOKEN_KEY, data.access_token);
      router.push('/admin/blogs/new');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to reach the admin service.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-margin-mobile py-16 md:px-margin-desktop">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(162,235,47,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(97,88,233,0.16),transparent_32%)]" />
      <form onSubmit={handleSubmit} className="relative w-full max-w-md rounded-2xl border border-outline-variant/40 bg-white p-8 shadow-[0_16px_50px_rgba(36,36,48,0.1)] md:p-10">
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white"><LockKeyhole className="h-6 w-6" /></div>
        <p className="mb-2 font-label-sm text-label-sm uppercase tracking-[0.14em] text-primary">Private workspace</p>
        <h1 className="font-headline-lg text-headline-lg mb-3 text-charcoal">Admin sign in</h1>
        <p className="mb-8 font-body-md text-body-md text-on-surface-variant">Sign in to create and manage Math Make Smart blog posts.</p>
        <div className="space-y-5">
          <label className="block"><span className="mb-2 block font-label-md text-label-md text-charcoal">Username</span><input value={username} onChange={(event) => setUsername(event.target.value)} required autoComplete="username" className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
          <label className="block"><span className="mb-2 block font-label-md text-label-md text-charcoal">Password</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" className="w-full rounded-lg border border-outline-variant px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
        </div>
        {error && <p role="alert" className="mt-5 rounded-lg bg-error-container px-4 py-3 font-body-md text-body-md text-on-error-container">{error}</p>}
        <button type="submit" disabled={isSubmitting} className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-royal-purple px-5 py-3.5 font-label-md text-label-md text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"><LogIn className="h-4 w-4" />{isSubmitting ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </main>
  );
}