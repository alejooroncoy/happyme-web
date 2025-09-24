'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function HomePage() {
  const { state, reset } = useAuth();

  const handleLogout = () => {
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">HappyMe</h1>
              <p className="text-gray-600">¡Bienvenido a tu cuenta!</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Información de tu cuenta
              </h2>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="bg-gray-50 px-4 py-5 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Número de teléfono</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {state.phoneData?.countryCode} {state.phoneData?.phoneNumber}
                  </dd>
                </div>
                
                <div className="bg-gray-50 px-4 py-5 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Correo electrónico</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {state.registerData?.email}
                  </dd>
                </div>
                
                <div className="bg-gray-50 px-4 py-5 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">ID de usuario</dt>
                  <dd className="mt-1 text-sm text-gray-900 font-mono">
                    {state.user?.id}
                  </dd>
                </div>
                
                <div className="bg-gray-50 px-4 py-5 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Fecha de registro</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {state.user?.createdAt.toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </dd>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">🎉</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  ¡Cuenta creada exitosamente!
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Tu cuenta ha sido creada correctamente. Ahora puedes disfrutar de todos 
                    los servicios de HappyMe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Acciones rápidas</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <button className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-left">
                <div className="text-2xl mb-2">👤</div>
                <h4 className="font-medium text-gray-900">Perfil</h4>
                <p className="text-sm text-gray-500">Actualiza tu información personal</p>
              </button>
              
              <button className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-left">
                <div className="text-2xl mb-2">⚙️</div>
                <h4 className="font-medium text-gray-900">Configuración</h4>
                <p className="text-sm text-gray-500">Ajusta las preferencias de tu cuenta</p>
              </button>
              
              <button className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-left">
                <div className="text-2xl mb-2">📞</div>
                <h4 className="font-medium text-gray-900">Soporte</h4>
                <p className="text-sm text-gray-500">Contacta con nuestro equipo</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
