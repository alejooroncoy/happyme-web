'use client';

import { BookOpen, Play, Download, Heart, Brain, Moon, Activity } from 'lucide-react';

type ResourceItem = {
  title: string;
  type: string;
  duration?: string;
};

type ResourceCategory = {
  category: string;
  items: ResourceItem[];
};

export default function ResourcesSection() {
  const resources: ResourceCategory[] = [
    {
      category: 'Meditación',
      items: [
        { title: 'Meditación para Principiantes', duration: '10 min', type: 'audio' },
        { title: 'Respiración Profunda', duration: '5 min', type: 'guía' },
        { title: 'Mindfulness Matutino', duration: '15 min', type: 'video' }
      ]
    },
    {
      category: 'Ejercicios',
      items: [
        { title: 'Yoga Suave', duration: '20 min', type: 'video' },
        { title: 'Estiramientos Relajantes', duration: '10 min', type: 'guía' },
        { title: 'Caminata Consciente', duration: '30 min', type: 'audio' }
      ]
    },
    {
      category: 'Lectura',
      items: [
        { title: 'Técnicas de Relajación', type: 'pdf' },
        { title: 'Guía de Autocuidado', type: 'pdf' },
        { title: 'Diario de Emociones', type: 'template' }
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'audio': return <Play className="w-5 h-5 text-blue-600" />;
      case 'video': return <Play className="w-5 h-5 text-red-600" />;
      case 'pdf': return <Download className="w-5 h-5 text-green-600" />;
      case 'guía': return <BookOpen className="w-5 h-5 text-purple-600" />;
      case 'template': return <Download className="w-5 h-5 text-orange-600" />;
      default: return <BookOpen className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Recursos de Bienestar</h2>
            <p className="text-purple-100 text-lg">
              Herramientas y recursos para tu salud mental
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Meditación</h4>
              <p className="text-blue-100 text-sm">Sesiones guiadas</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Ejercicios</h4>
              <p className="text-green-100 text-sm">Actividad física</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Lectura</h4>
              <p className="text-purple-100 text-sm">Material educativo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources by Category */}
      <div className="space-y-6">
        {resources.map((category, categoryIndex) => (
          <div key={category.category} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-purple-600" />
              </div>
              <span>{category.category}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {getIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
                        {item.title}
                      </h4>
                      {item.duration && (
                        <p className="text-sm text-gray-600 mt-1">{item.duration}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1 capitalize">{item.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
          <Moon className="w-5 h-5 text-yellow-600" />
          <span>Tips de Bienestar</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">💤 Sueño de Calidad</h4>
            <p className="text-sm text-gray-600">Mantén un horario regular de sueño y evita pantallas 1 hora antes de dormir.</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">🧘‍♀️ Mindfulness</h4>
            <p className="text-sm text-gray-600">Practica 5 minutos de meditación diaria para reducir el estrés.</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">🏃‍♀️ Ejercicio Regular</h4>
            <p className="text-sm text-gray-600">30 minutos de actividad física diaria mejoran tu estado de ánimo.</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">📝 Gratitud</h4>
            <p className="text-sm text-gray-600">Escribe 3 cosas por las que estés agradecido cada día.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
