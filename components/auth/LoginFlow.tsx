'use client';

import { useAuth } from '@/contexts/AuthContext';
import LoginStep from './LoginStep';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginFlow() {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.user) {
      router.push('/dashboard');
    }
  }, [state.user, router]);

  return (
    <div className="relative">
      {state.isLoading && (
        <div className="fixed inset-0 bg-gray-800/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex items-center space-x-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            <span className="text-gray-800 font-semibold text-lg">Procesando...</span>
          </div>
        </div>
      )}

      {state.error && (
        <div className="fixed top-4 right-4 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3 z-50 max-w-md">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
          <span className="text-red-700 text-sm">{state.error}</span>
        </div>
      )}

      <LoginStep />
    </div>
  );
}
