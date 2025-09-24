'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { SMSData } from '@/types/auth';

export default function SMSStep() {
  const { state, setSMSData, goToStep, setLoading, setError } = useAuth();
  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.length !== 6) {
      setError('El código debe tener 6 dígitos');
      return;
    }

    setLoading(true);
    setError(undefined);

    try {
      // Simular verificación del código
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simular código correcto (en producción sería verificado por el backend)
      if (code === '123456') {
        const smsData: SMSData = {
          code,
          phoneNumber: state.phoneData?.phoneNumber || '',
        };
        
        setSMSData(smsData);
        goToStep('register');
      } else {
        setError('Código incorrecto. Intenta nuevamente.');
      }
    } catch (error) {
      setError('Error al verificar el código. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    setError(undefined);
    
    try {
      // Simular reenvío de código
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTimeLeft(60);
      setCanResend(false);
    } catch (error) {
      setError('Error al reenviar el código. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verifica tu número
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ingresa el código de 6 dígitos que enviamos a
          </p>
          <p className="text-center text-sm font-medium text-gray-900">
            {state.phoneData?.countryCode} {state.phoneData?.phoneNumber}
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={code}
                onChange={handleCodeChange}
                placeholder="000000"
                className="w-full px-4 py-4 text-center text-2xl font-mono border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent tracking-widest"
                maxLength={6}
                required
              />
            </div>
            
            <div className="text-center">
              {!canResend ? (
                <p className="text-sm text-gray-500">
                  Reenviar código en {formatTime(timeLeft)}
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={state.isLoading}
                  className="text-sm text-blue-600 hover:text-blue-500 font-medium disabled:text-gray-400"
                >
                  Reenviar código
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={code.length !== 6}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Verificar código
            </button>
            
            <button
              type="button"
              onClick={() => goToStep('phone')}
              className="w-full text-center text-sm text-gray-600 hover:text-gray-500"
            >
              Cambiar número de teléfono
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
