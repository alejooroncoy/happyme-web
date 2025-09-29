'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import HomePage from '@/components/auth/HomePage';
import { useRouter } from 'next/navigation';
import { useHydration } from '@/hooks/useHydration';
import Loading from '@/components/ui/loading';

export default function DashboardPage() {
  const { state } = useAuth();
  const router = useRouter();
  const isHydrated = useHydration();

  useEffect(() => {
    if (isHydrated && !state.user) {
      router.push('/register');
    }
  }, [state.user, router, isHydrated]);

  // Mostrar un loading mientras se hidrata
  if (!isHydrated) {
    return <Loading message="Cargando..." />;
  }

  if (!state.user) {
    return null;
  }

  return <HomePage />;
}
