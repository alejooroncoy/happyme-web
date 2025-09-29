'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  MessageSquare, 
  BookOpen, 
  Settings, 
  User, 
  Heart,
  Menu,
  X,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ activeSection, onSectionChange, onLogout }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3, color: 'text-blue-600' },
    { id: 'chat', name: 'Chat con Bot', icon: MessageSquare, color: 'text-green-600' },
    { id: 'resources', name: 'Recursos', icon: BookOpen, color: 'text-purple-600' },
    { id: 'profile', name: 'Perfil', icon: User, color: 'text-orange-600' },
    { id: 'settings', name: 'Configuración', icon: Settings, color: 'text-gray-600' }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:fixed top-0 left-0 bottom-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">HappyMe</h1>
              <p className="text-sm text-gray-600">Bot de Salud Mental</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : section.color}`} />
                <span className="font-medium">{section.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout button */}
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200 border border-red-200 hover:border-red-300"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </>
  );
}