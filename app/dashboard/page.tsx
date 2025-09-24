'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import HomePage from '@/components/auth/HomePage';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!state.user) {
      router.push('/register');
    }
  }, [state.user, router]);

  if (!state.user) {
    return null; // O un loading spinner
  }

  return <HomePage />;
}
