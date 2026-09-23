'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ALevelsPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/uk/a-levels');
  }, [router]);
  return null;
}
