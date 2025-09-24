'use client';

import { useAuth } from '@/contexts/AuthContext';
import PhoneStep from './PhoneStep';
import SMSStep from './SMSStep';
import RegisterStep from './RegisterStep';
import HomePage from './HomePage';

export default function AuthFlow() {
  const { state } = useAuth();

  const renderStep = () => {
    switch (state.currentStep) {
      case 'phone':
        return <PhoneStep />;
      case 'sms':
        return <SMSStep />;
      case 'register':
        return <RegisterStep />;
      case 'home':
        return <HomePage />;
      default:
        return <PhoneStep />;
    }
  };

  return (
    <div className="relative">
      {state.isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-gray-700">Procesando...</span>
          </div>
        </div>
      )}
      
      {state.error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50 max-w-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-red-400">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm">{state.error}</p>
            </div>
          </div>
        </div>
      )}
      
      {renderStep()}
    </div>
  );
}
