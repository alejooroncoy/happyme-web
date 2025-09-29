'use client';

import { useState, useEffect } from 'react';
import { 
  TrendingUp,
  Activity,
  Brain,
  Smile,
  Target,
  Clock,
  BarChart3,
  Heart,
  Calendar,
  Users,
  Award,
  TrendingDown
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AnalyticsData {
  moodAnalysis: {
    currentMood: string;
    moodDistribution: Record<string, number>;
    moodTrend: Array<{date: string, mood: string, value: number}>;
  };
  activityAnalysis: {
    totalActivities: number;
    activityTypes: Record<string, number>;
    mostFrequentActivity: string;
    activitiesByDay: Record<string, number>;
    activitiesByHour: Record<string, number>;
  };
  reminderAnalysis: {
    totalReminders: number;
    completedReminders: number;
    pendingReminders: number;
    completionRate: number;
    mostFrequentReminder: string;
    remindersByType: Record<string, number>;
  };
  temporalAnalysis: {
    mostActiveDay: string;
    mostActiveHour: string;
    weeklyPattern: Record<string, number>;
    dailyActivity: Array<{date: string, count: number}>;
  };
  progressAnalysis: {
    currentStreak: number;
    longestStreak: number;
    totalSessions: number;
    averageSessionDuration: number;
    goalsCompleted: number;
    totalGoals: number;
  };
  demographicProfile: {
    age: number;
    gender: string;
    university: string;
    semester: number;
    plan: string;
    hasSeenPsychologist: boolean;
    registrationDate: string;
  };
  remindersList: {
    id: number;
    title: string;
    description: string | null;
    datetimeEvent: string;
    durationMinutes: number | null;
    notified: boolean | null;
    createdAt: string | null;
  }[];
}

export default function DashboardSection() {
  const { state } = useAuth();
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'total'>('week');

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!state.user?.id) {
        setLoading(false);
        return;
      }
      
      try {
        console.log('🔍 Fetching analytics for user:', state.user.id, 'period:', selectedPeriod);
        const response = await fetch(`/api/user/analytics?userId=${state.user.id}&period=${selectedPeriod}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📊 Analytics response:', data);
        
        if (data.success) {
          setAnalytics(data.analytics);
        } else {
          console.error('❌ Analytics API returned error:', data.error);
        }
      } catch (error) {
        console.error('❌ Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [state.user?.id, selectedPeriod]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando tus estadísticas...</p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">No se pudieron cargar las estadísticas</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl">
            <div className="w-full">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-5xl font-bold mb-4 text-white">
                    ¡Hola, {state.user?.name || 'Usuario'}! 👋
                  </h1>
                  <p className="text-white/90 text-2xl font-medium">
                    Aquí tienes un resumen de tu bienestar mental
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center bg-white/30 rounded-full px-8 py-4 backdrop-blur-sm border border-white/20">
                    <Award className="w-8 h-8 mr-4 text-white" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{analytics.progressAnalysis.currentStreak}</div>
                      <div className="text-sm text-white/90">días seguidos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demographic Profile */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Perfil Demográfico</h3>
              <Users className="w-6 h-6 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-gray-800 mb-2">{analytics.demographicProfile.age} años</div>
                <div className="text-sm text-gray-500">Edad</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-gray-800 mb-2 capitalize">{analytics.demographicProfile.gender}</div>
                <div className="text-sm text-gray-500">Género</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-gray-800 mb-2">{analytics.demographicProfile.semester}°</div>
                <div className="text-sm text-gray-500">Semestre</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-gray-800 mb-2 capitalize">{analytics.demographicProfile.plan}</div>
                <div className="text-sm text-gray-500">Plan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Period Selector */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Período de Análisis</h3>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setSelectedPeriod('week')}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedPeriod === 'week'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Última Semana
              </button>
              <button
                onClick={() => setSelectedPeriod('month')}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedPeriod === 'month'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Último Mes
              </button>
              <button
                onClick={() => setSelectedPeriod('total')}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedPeriod === 'total'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Total
              </button>
            </div>
          </div>
        </div>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          
          {/* Total Activities */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <Activity className="w-8 h-8 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Actividades</span>
            </div>
            <div className="mb-6">
              <h3 className="text-4xl font-bold text-gray-800 mb-3">
                {analytics.activityAnalysis.totalActivities}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((analytics.activityAnalysis.totalActivities / 50) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-blue-600 flex items-center font-medium">
              <TrendingUp className="w-5 h-5 mr-2" />
              Últimos 30 días
            </p>
          </div>

          {/* Completion Rate */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-green-50 rounded-2xl">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {selectedPeriod === 'total' ? 'Recordatorios Completados' : 'Cumplimiento'}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-4xl font-bold text-gray-800 mb-3">
                {analytics.reminderAnalysis.completedReminders}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${analytics.reminderAnalysis.completionRate}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-green-600 flex items-center font-medium">
              <Target className="w-5 h-5 mr-2" />
              de {analytics.reminderAnalysis.totalReminders} total
            </p>
          </div>

          {/* Current Streak */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-purple-50 rounded-2xl">
                <Clock className="w-8 h-8 text-purple-500" />
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Racha Actual</span>
            </div>
            <div className="mb-6">
              <h3 className="text-4xl font-bold text-gray-800 mb-3">
                {analytics.progressAnalysis.currentStreak}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((analytics.progressAnalysis.currentStreak / 30) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-purple-600 flex items-center font-medium">
              <TrendingUp className="w-5 h-5 mr-2" />
              Días consecutivos
            </p>
          </div>

          {/* Average Session Duration */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-orange-50 rounded-2xl">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Duración Promedio</span>
            </div>
            <div className="mb-6">
              <h3 className="text-4xl font-bold text-gray-800 mb-3">
                {analytics.progressAnalysis.averageSessionDuration}min
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-orange-400 to-orange-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((analytics.progressAnalysis.averageSessionDuration / 60) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-orange-600 flex items-center font-medium">
              <Clock className="w-5 h-5 mr-2" />
              Por sesión
            </p>
          </div>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Mood Analysis - Circular Chart */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Estados de Ánimo</h2>
              <Smile className="w-6 h-6 text-yellow-500" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Circular Chart */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-64 h-64 mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {(() => {
                      const total = Object.values(analytics.moodAnalysis.moodDistribution).reduce((sum, count) => sum + count, 0);
                      let cumulativePercentage = 0;
                      const colors = ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];
                      
                      return Object.entries(analytics.moodAnalysis.moodDistribution).map(([mood, count], index) => {
                        const percentage = (count / total) * 100;
                        const startAngle = (cumulativePercentage / 100) * 360;
                        const endAngle = ((cumulativePercentage + percentage) / 100) * 360;
                        
                        const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                        const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                        const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                        const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                        
                        const largeArcFlag = percentage > 50 ? 1 : 0;
                        const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                        
                        cumulativePercentage += percentage;
                        
                        return (
                          <path
                            key={mood}
                            d={pathData}
                            fill={colors[index % colors.length]}
                            className="transition-all duration-1000"
                            style={{ animationDelay: `${index * 200}ms` }}
                          />
                        );
                      });
                    })()}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{Object.values(analytics.moodAnalysis.moodDistribution).reduce((sum, count) => sum + count, 0)}</div>
                      <div className="text-sm text-gray-500">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Distribución</h3>
                <div className="space-y-4">
                  {Object.entries(analytics.moodAnalysis.moodDistribution).map(([mood, count], index) => {
                    const total = Object.values(analytics.moodAnalysis.moodDistribution).reduce((sum, c) => sum + c, 0);
                    const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
                    const colors = ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];
                    
                    return (
                      <div key={mood} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: colors[index % colors.length] }}
                          />
                          <span className="text-sm font-medium text-gray-700 capitalize">{mood}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-gray-800">{count}</span>
                          <span className="text-xs text-gray-500 ml-2">({percentage}%)</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Activity Types Pie Chart */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Tipos de Actividades</h2>
              <Activity className="w-6 h-6 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {Object.entries(analytics.activityAnalysis.activityTypes).map(([type, count], index) => {
                const percentage = (count / analytics.activityAnalysis.totalActivities) * 100;
                const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500', 'bg-yellow-500'];
                const color = colors[index % colors.length];
                
                return (
                  <div key={type} className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${color}`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 capitalize">{type}</span>
                        <span className="text-sm text-gray-500">{count} ({Math.round(percentage)}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Weekly Pattern and Hourly Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Weekly Pattern */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Actividad Semanal</h2>
              <Calendar className="w-6 h-6 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {Object.entries(analytics.temporalAnalysis.weeklyPattern).map(([day, count]) => {
                const maxCount = Math.max(...Object.values(analytics.temporalAnalysis.weeklyPattern));
                const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
                
                return (
                  <div key={day} className="flex items-center space-x-4">
                    <div className="w-20 text-sm font-medium text-gray-700">{day}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-500">{count} actividades</span>
                        <span className="text-sm text-gray-500">{Math.round(percentage)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hourly Activity */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Actividad por Hora</h2>
              <Clock className="w-6 h-6 text-gray-400" />
            </div>
            
            <div className="space-y-2">
              <div className="text-sm text-gray-500 mb-4">
                Hora más activa: {analytics.temporalAnalysis.mostActiveHour}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {Object.entries(analytics.activityAnalysis.activitiesByHour)
                  .filter(([hour]) => parseInt(hour.split(':')[0]) >= 6 && parseInt(hour.split(':')[0]) <= 22)
                  .map(([hour, count]) => {
                    const maxCount = Math.max(...Object.values(analytics.activityAnalysis.activitiesByHour));
                    const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
                    
                    return (
                      <div key={hour} className="text-center">
                        <div className="text-xs text-gray-500 mb-1">{hour.split(':')[0]}</div>
                        <div 
                          className="bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-1000"
                          style={{ height: `${Math.max(percentage * 2, 4)}px` }}
                        ></div>
                        <div className="text-xs text-gray-400 mt-1">{count}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

        </div>



        {/* Reminders Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Recordatorios</h2>
            <Calendar className="w-6 h-6 text-blue-500" />
          </div>
          
          {/* 3 Cuadritos Estadísticos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Completed Reminders */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Completados</h3>
                    <p className="text-sm text-green-600">Recordatorios finalizados</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-800">
                  {analytics.reminderAnalysis.completedReminders}
                </div>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${analytics.reminderAnalysis.completionRate}%` }}
                />
              </div>
              <p className="text-sm text-green-600 mt-2">
                {analytics.reminderAnalysis.completionRate}% de cumplimiento
              </p>
            </div>

            {/* Pending Reminders */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800">Pendientes</h3>
                    <p className="text-sm text-orange-600">Por completar</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-800">
                  {analytics.reminderAnalysis.pendingReminders}
                </div>
              </div>
              <div className="w-full bg-orange-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${100 - analytics.reminderAnalysis.completionRate}%` }}
                />
              </div>
              <p className="text-sm text-orange-600 mt-2">
                {100 - analytics.reminderAnalysis.completionRate}% pendiente
              </p>
            </div>

            {/* Total Reminders */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">Total</h3>
                    <p className="text-sm text-blue-600">Recordatorios creados</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-800">
                  {analytics.reminderAnalysis.totalReminders}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600">Completados</span>
                  <span className="font-semibold text-blue-800">{analytics.reminderAnalysis.completedReminders}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600">Pendientes</span>
                  <span className="font-semibold text-blue-800">{analytics.reminderAnalysis.pendingReminders}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lista Detallada de Recordatorios - Filtrada por Período */}
          {analytics?.remindersList && analytics.remindersList.length > 0 ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Lista de Recordatorios - {selectedPeriod === 'week' ? 'Última Semana' : selectedPeriod === 'month' ? 'Último Mes' : 'Total'}
              </h3>
              <div className="space-y-4">
                {analytics.remindersList.map((reminder) => (
                  <div 
                    key={reminder.id} 
                    className={`bg-white rounded-2xl p-6 border-2 transition-all duration-200 hover:shadow-lg ${
                      reminder.notified 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-orange-200 bg-orange-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-3 h-3 rounded-full ${
                            reminder.notified ? 'bg-green-500' : 'bg-orange-500'
                          }`} />
                          <h4 className="text-lg font-semibold text-gray-800">
                            {reminder.title}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            reminder.notified 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {reminder.notified ? 'Completado' : 'Pendiente'}
                          </span>
                        </div>
                        
                        {reminder.description && (
                          <p className="text-gray-600 mb-3">{reminder.description}</p>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Fecha del evento:</span>
                            <p className="text-gray-600">
                              {reminder.datetimeEvent ? new Date(reminder.datetimeEvent).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              }) : 'N/A'}
                            </p>
                          </div>
                          
                          {reminder.durationMinutes && (
                            <div>
                              <span className="font-medium text-gray-700">Duración:</span>
                              <p className="text-gray-600">{reminder.durationMinutes} minutos</p>
                            </div>
                          )}
                          
                          <div>
                            <span className="font-medium text-gray-700">Creado:</span>
                            <p className="text-gray-600">
                              {reminder.createdAt ? new Date(reminder.createdAt).toLocaleDateString('es-ES') : 'N/A'}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        {reminder.notified ? (
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Target className="w-5 h-5 text-green-600" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <Clock className="w-5 h-5 text-orange-600" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No hay recordatorios</h3>
              <p className="text-gray-500">
                {selectedPeriod === 'week' && 'No tienes recordatorios en la última semana'}
                {selectedPeriod === 'month' && 'No tienes recordatorios en el último mes'}
                {selectedPeriod === 'total' && 'No tienes recordatorios creados'}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// Helper function to get mood color
function getMoodColor(value: number): string {
  if (value >= 8) return 'bg-green-500';
  if (value >= 6) return 'bg-yellow-400';
  if (value >= 4) return 'bg-orange-400';
  return 'bg-red-400';
}