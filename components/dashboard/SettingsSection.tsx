'use client';

import { Settings, Bell, Shield, Palette, Globe, Database, HelpCircle } from 'lucide-react';

export default function SettingsSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white p-8 rounded-2xl">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Configuración</h2>
            <p className="text-gray-100 text-lg">
              Personaliza tu experiencia con HappyMe
            </p>
          </div>
        </div>
      </div>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Notifications */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Notificaciones</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Recordatorios de Meditación</h4>
                <p className="text-sm text-gray-600">Recibir notificaciones diarias</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Actualizaciones de Progreso</h4>
                <p className="text-sm text-gray-600">Resumen semanal de tu bienestar</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Mensajes del Bot</h4>
                <p className="text-sm text-gray-600">Notificaciones de chat</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Privacidad y Seguridad</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">🔒 Datos Encriptados</h4>
              <p className="text-sm text-gray-600">Toda tu información está protegida con encriptación de extremo a extremo</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">👤 Anonimato</h4>
              <p className="text-sm text-gray-600">Tus conversaciones con el bot son completamente privadas</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">📊 Datos Locales</h4>
              <p className="text-sm text-gray-600">Tus estadísticas se almacenan localmente en tu dispositivo</p>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Palette className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Apariencia</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tema</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option value="light">Claro</option>
                <option value="dark">Oscuro</option>
                <option value="auto">Automático</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tamaño de Fuente</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option value="small">Pequeño</option>
                <option value="medium" selected>Mediano</option>
                <option value="large">Grande</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">Animaciones</h4>
                <p className="text-sm text-gray-600">Mostrar transiciones suaves</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <Globe className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Idioma y Región</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Zona Horaria</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option value="America/Lima">Lima (GMT-5)</option>
                <option value="America/Bogota">Bogotá (GMT-5)</option>
                <option value="America/Mexico_City">Ciudad de México (GMT-6)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Formato de Fecha</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Database className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Gestión de Datos</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left">
            <h4 className="font-semibold text-gray-800 mb-2">📥 Exportar Datos</h4>
            <p className="text-sm text-gray-600">Descargar tu información personal</p>
          </button>
          <button className="p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left">
            <h4 className="font-semibold text-gray-800 mb-2">🗑️ Eliminar Datos</h4>
            <p className="text-sm text-gray-600">Borrar toda tu información</p>
          </button>
        </div>
      </div>

      {/* Help & Support */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Ayuda y Soporte</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 text-left">
            <h4 className="font-semibold text-gray-800 mb-2">📚 Centro de Ayuda</h4>
            <p className="text-sm text-gray-600">Preguntas frecuentes y guías</p>
          </button>
          <button className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 text-left">
            <h4 className="font-semibold text-gray-800 mb-2">💬 Contactar Soporte</h4>
            <p className="text-sm text-gray-600">Habla con nuestro equipo</p>
          </button>
          <button className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 text-left">
            <h4 className="font-semibold text-gray-800 mb-2">🐛 Reportar Problema</h4>
            <p className="text-sm text-gray-600">Informar errores o sugerencias</p>
          </button>
        </div>
      </div>
    </div>
  );
}
