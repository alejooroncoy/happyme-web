'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import PhoneStep from '@/components/auth/PhoneStep';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.user) {
      router.push('/dashboard');
    }
  }, [state.user, router]);

  return <PhoneStep />;
}
