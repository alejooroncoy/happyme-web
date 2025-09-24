'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { RegisterData } from '@/types/auth';

export default function RegisterStep() {
  const { state, setRegisterData, setUser, setLoading, setError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const passwordsMatch = password === confirmPassword;

  const isFormValid = 
    validateEmail(email) && 
    validatePassword(password) && 
    passwordsMatch && 
    password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      setError('Por favor completa todos los campos correctamente');
      return;
    }

    setLoading(true);
    setError(undefined);

    try {
      // Simular creación de cuenta
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const registerData: RegisterData = {
        email,
        password,
        confirmPassword,
        phoneNumber: state.phoneData?.phoneNumber || '',
      };
      
      setRegisterData(registerData);
      
      // Simular usuario creado
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        phoneNumber: state.phoneData?.phoneNumber || '',
        email,
        createdAt: new Date(),
      };
      
      setUser(user);
    } catch (error) {
      setError('Error al crear la cuenta. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Completa tu registro
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Crea tu cuenta con email y contraseña
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="mt-1 w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              {email && !validateEmail(email) && (
                <p className="mt-1 text-red-500 text-sm">
                  Ingresa un email válido
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <span className="text-gray-400 hover:text-gray-600">
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </button>
              </div>
              {password && !validatePassword(password) && (
                <p className="mt-1 text-red-500 text-sm">
                  La contraseña debe tener al menos 8 caracteres
                </p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmar contraseña
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repite tu contraseña"
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <span className="text-gray-400 hover:text-gray-600">
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </button>
              </div>
              {confirmPassword && !passwordsMatch && (
                <p className="mt-1 text-red-500 text-sm">
                  Las contraseñas no coinciden
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isFormValid}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
