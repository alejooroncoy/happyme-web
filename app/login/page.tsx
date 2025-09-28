'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthFlow from '@/components/auth/AuthFlow';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { state, goToStep } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.user) {
      router.push('/dashboard');
    } else {
      // Asegurar que empezamos en el paso de login
      goToStep('login');
    }
  }, [state.user, router, goToStep]);

  return <AuthFlow />;
}
