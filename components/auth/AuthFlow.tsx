'use client';

import { useAuth } from '@/contexts/AuthContext';
import PhoneStep from './PhoneStep';
import SMSStep from './SMSStep';
import RegisterStep from './RegisterStep';
import LoginStep from './LoginStep';
import HomePage from './HomePage';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthFlow() {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.user) {
      router.push('/dashboard');
    }
  }, [state.user, router]);

  const renderStep = () => {
    switch (state.currentStep) {
      case 'phone':
        return <PhoneStep />;
      case 'sms':
        return <SMSStep />;
      case 'register':
        return <RegisterStep />;
      case 'login':
        return <LoginStep />;
      case 'home':
        return <HomePage />;
      default:
        return <PhoneStep />;
    }
  };

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
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <div className="bg-red-50 border border-red-200 rounded-xl shadow-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-red-800">{state.error}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {renderStep()}
    </div>
  );
}
