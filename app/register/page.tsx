'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthFlow from '@/components/auth/AuthFlow';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const { state, goToStep } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.user) {
      router.push('/dashboard');
    }
  }, [state.user, router]);

  // Solo establecer el paso inicial una vez al cargar la página
  useEffect(() => {
    goToStep('phone');
  }, [goToStep]);

  return <AuthFlow />;
}
