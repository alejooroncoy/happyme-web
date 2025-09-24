'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { SMSData } from '@/types/auth';
import { MessageSquare, RotateCcw, ArrowLeft } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-10 text-center">
            <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Verifica tu número</h1>
            <p className="text-green-100 text-lg mb-2">
              Ingresa el código de 6 dígitos que enviamos a tu teléfono
            </p>
            <p className="text-green-200 font-medium">
              {state.phoneData?.countryCode} {state.phoneData?.phoneNumber}
            </p>
          </div>
          
          {/* Form */}
          <div className="px-8 py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  value={code}
                  onChange={handleCodeChange}
                  placeholder="000000"
                  className="w-full text-center text-3xl font-mono tracking-widest h-16 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 placeholder-gray-400"
                  maxLength={6}
                  required
                />
                
                <div className="text-center">
                  {!canResend ? (
                    <p className="text-sm text-gray-600">
                      Reenviar código en {formatTime(timeLeft)}
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendCode}
                      disabled={state.isLoading}
                      className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center justify-center space-x-1 mx-auto"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reenviar código</span>
                    </button>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={code.length !== 6}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                <span>Verificar código</span>
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}