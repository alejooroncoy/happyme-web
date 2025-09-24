'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoginData } from '@/types/auth';
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function LoginStep() {
  const { state, setLoginData, setUser, setLoading, setError, goToStep } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(state.phoneData?.phoneNumber || '');
  const [countryCode, setCountryCode] = useState(state.phoneData?.countryCode || '+51');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = validateEmail(email) && password.length >= 6;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      setError('Por favor completa todos los campos correctamente');
      return;
    }

    setLoading(true);
    setError(undefined);

    try {
      // Simular verificación de login
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const loginData: LoginData = {
        email,
        password,
        phoneNumber: phoneNumber || state.phoneData?.phoneNumber || '',
      };
      
      setLoginData(loginData);
      
      // Simular usuario logueado
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        phoneNumber: state.phoneData?.phoneNumber || '',
        email,
        createdAt: new Date(),
      };
      
      setUser(user);
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
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
              <LogIn className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">¡Hola de nuevo!</h1>
            <p className="text-blue-100 text-lg mb-2">
              Accede a tus estadísticas de salud mental
            </p>
            <p className="text-blue-200 text-sm">
              Inicia sesión con tu cuenta de HappyMe
            </p>
          </div>
          
          {/* Form */}
          <div className="px-8 py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                      required
                    />
                  </div>
                  {email && !validateEmail(email) && (
                    <p className="text-sm text-red-500 flex items-center">
                      <span className="mr-1">⚠️</span>
                      Ingresa un email válido
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Tu contraseña"
                      className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 h-5 w-5 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Teléfono opcional */}
                {!state.phoneData && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Número de teléfono (opcional)
                    </label>
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
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        placeholder="987 654 321"
                        className="flex-1 px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                        maxLength={9}
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                <LogIn className="w-5 h-5" />
                <span>Iniciar Sesión</span>
              </button>
            </form>
            
            <div className="mt-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  ¿No tienes cuenta?{' '}
                  <button
                    onClick={() => goToStep('phone')}
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Regístrate aquí
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
