'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UKALevelsPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/uk/test-preparation/a-levels');
  }, [router]);
  return null;
}
