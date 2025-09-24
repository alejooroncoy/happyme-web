'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoginStep from '@/components/auth/LoginStep';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.user) {
      router.push('/dashboard');
    }
  }, [state.user, router]);

  return <LoginStep />;
}
