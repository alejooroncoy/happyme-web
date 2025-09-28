'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { PhoneData } from '@/types/auth';
import { Phone, Smartphone } from 'lucide-react';

export default function PhoneStep() {
  const { setPhoneData, goToStep, setLoading, setError, setExistingUser } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+51');
  const [isValid, setIsValid] = useState(false);

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
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
      // Simular verificación si el usuario existe
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const phoneData: PhoneData = {
        phoneNumber,
        countryCode,
      };
      
      setPhoneData(phoneData);
      
      // Simular verificación de usuario existente
      // En producción esto sería una llamada al backend
      const isExistingUser = phoneNumber === '987654321'; // Simular usuario existente
      setExistingUser(isExistingUser);
      
      console.log('PhoneStep: Navegando al siguiente paso...', { isExistingUser, phoneNumber });
      
      if (isExistingUser) {
        goToStep('login');
      } else {
        goToStep('sms');
      }
    } catch (error) {
      setError('Error al verificar el número. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-center">
            <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">¡Bienvenido a HappyMe!</h1>
            <p className="text-blue-100 text-lg mb-2">
              Tu bot de salud mental te está esperando
            </p>
            <p className="text-blue-200 text-sm">
              Ingresa tu número de teléfono para comenzar
            </p>
          </div>
          
          {/* Form */}
          <div className="px-8 py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-32 px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 font-medium"
                  >
                        <option value="+51">🇵🇪 +51</option>
                        <option value="+57">🇨🇴 +57</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+52">🇲🇽 +52</option>
                        <option value="+34">🇪🇸 +34</option>
                  </select>
                  
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="987 654 321"
                    className="flex-1 px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                    maxLength={9}
                    required
                  />
                </div>
                
                {phoneNumber && !isValid && (
                  <p className="text-sm text-red-500 flex items-center">
                    <span className="mr-1">⚠️</span>
                      Ingresa un número de 9 dígitos
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid || phoneNumber.length === 0}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                <Phone className="w-5 h-5" />
                <span>Registrarme</span>
              </button>
            </form>
            
            <div className="mt-6 space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  ¿Ya tienes cuenta?{' '}
                  <button
                    onClick={() => goToStep('login')}
                    className="font-semibold text-blue-600 hover:text-blue-700 underline"
                  >
                    Inicia sesión aquí
                  </button>
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Al continuar, aceptas nuestros términos y condiciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
