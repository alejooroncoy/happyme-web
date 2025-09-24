'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { PhoneData } from '@/types/auth';

export default function PhoneStep() {
  const { setPhoneData, goToStep, setLoading, setError } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+57');
  const [isValid, setIsValid] = useState(false);

  const validatePhoneNumber = (phone: string) => {
    // Validación básica para números colombianos
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Solo números
    setPhoneNumber(value);
    setIsValid(validatePhoneNumber(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValid) {
      setError('Por favor ingresa un número de teléfono válido');
      return;
    }

    setLoading(true);
    setError(undefined);

    try {
      // Simular envío de SMS
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const phoneData: PhoneData = {
        phoneNumber,
        countryCode,
      };
      
      setPhoneData(phoneData);
      goToStep('sms');
    } catch (error) {
      setError('Error al enviar el código SMS. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Ingresa tu número de teléfono
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Te enviaremos un código de verificación por SMS
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="px-3 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="+57">🇨🇴 +57</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+52">🇲🇽 +52</option>
                <option value="+34">🇪🇸 +34</option>
              </select>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="300 123 4567"
                className="flex-1 px-3 py-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={10}
                required
              />
            </div>
            
            {phoneNumber && !isValid && (
              <p className="text-red-500 text-sm">
                Ingresa un número de 10 dígitos
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid || phoneNumber.length === 0}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Enviar código SMS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
