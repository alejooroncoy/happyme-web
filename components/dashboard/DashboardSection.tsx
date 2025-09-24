'use client';

import { 
  TrendingUp,
  Activity,
  Brain,
  Smile,
  Target,
  Clock,
  BarChart3
} from 'lucide-react';

export default function DashboardSection() {
  // Datos hardcodeados de estadísticas de salud mental
  const mentalHealthStats = {
    moodScore: 8.2,
    anxietyLevel: 3.1,
    stressLevel: 4.5,
    sleepQuality: 7.8,
    energyLevel: 6.9,
    socialConnections: 8.5,
    weeklyProgress: 85,
    goalsCompleted: 12,
    totalGoals: 15,
    streakDays: 7,
    sessionsThisWeek: 5,
    averageSessionTime: 12
  };

  const moodData = [
    { day: 'Lun', mood: 7, color: 'bg-green-400' },
    { day: 'Mar', mood: 8, color: 'bg-green-500' },
    { day: 'Mié', mood: 6, color: 'bg-yellow-400' },
    { day: 'Jue', mood: 9, color: 'bg-green-600' },
    { day: 'Vie', mood: 8, color: 'bg-green-500' },
    { day: 'Sáb', mood: 7, color: 'bg-green-400' },
    { day: 'Dom', mood: 8, color: 'bg-green-500' }
  ];

  const recentActivities = [
    { activity: 'Meditación matutina', duration: '15 min', mood: 'happy', time: '08:30', icon: '🧘‍♀️' },
    { activity: 'Ejercicio de respiración', duration: '5 min', mood: 'calm', time: '14:20', icon: '🌬️' },
    { activity: 'Reflexión diaria', duration: '10 min', mood: 'thoughtful', time: '19:45', icon: '🤔' },
    { activity: 'Gratitud', duration: '3 min', mood: 'grateful', time: '21:00', icon: '🙏' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              ¡Bienvenido a HappyMe!
            </h2>
            <p className="text-blue-100 text-lg">
              Tu bot de salud mental está listo para ayudarte. Accede a tus estadísticas 
              y comienza tu viaje hacia el bienestar.
            </p>
          </div>
        </div>
      </div>

      {/* Métricas Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-green-600">{mentalHealthStats.moodScore}</span>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Puntuación de Ánimo</h4>
          <p className="text-sm text-gray-600">Promedio semanal</p>
          <div className="mt-3 bg-green-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(mentalHealthStats.moodScore / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">{mentalHealthStats.anxietyLevel}</span>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Nivel de Ansiedad</h4>
          <p className="text-sm text-gray-600">Bajo - ¡Excelente!</p>
          <div className="mt-3 bg-blue-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(mentalHealthStats.anxietyLevel / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-purple-600">{mentalHealthStats.sleepQuality}</span>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Calidad de Sueño</h4>
          <p className="text-sm text-gray-600">Muy buena</p>
          <div className="mt-3 bg-purple-200 rounded-full h-2">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(mentalHealthStats.sleepQuality / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-orange-600">{mentalHealthStats.weeklyProgress}%</span>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Progreso Semanal</h4>
          <p className="text-sm text-gray-600">Objetivos cumplidos</p>
          <div className="mt-3 bg-orange-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${mentalHealthStats.weeklyProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Gráfico de Estado de Ánimo */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span>Estado de Ánimo - Esta Semana</span>
        </h4>
        <div className="flex items-end justify-between space-x-3 h-40">
          {moodData.map((day, index) => (
            <div key={day.day} className="flex flex-col items-center space-y-3 flex-1 group">
              <div className="flex flex-col items-center space-y-2">
                <div 
                  className={`w-full ${day.color} rounded-t-lg transition-all duration-1000 ease-out hover:scale-105 group-hover:shadow-lg`}
                  style={{ 
                    height: `${(day.mood / 10) * 100}%`,
                    minHeight: '20px',
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
              <div className="text-center">
                <div className="text-xs font-medium text-gray-600 mb-1">{day.day}</div>
                <div className="text-sm font-bold text-gray-800">{day.mood}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <span>0</span>
          <span>5</span>
          <span>10</span>
        </div>
      </div>

      {/* Actividades Recientes */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <Clock className="w-5 h-5 text-blue-600" />
          <span>Actividades Recientes</span>
        </h4>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {activity.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">{activity.activity}</h5>
                  <p className="text-sm text-gray-600">{activity.duration}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
