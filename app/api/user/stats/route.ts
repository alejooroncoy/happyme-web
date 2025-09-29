import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const userIdInt = parseInt(userId);

    // Obtener logs de acciones del usuario
    const actionLogs = await prisma.actions_logs.findMany({
      where: {
        user_id: userIdInt
      },
      orderBy: {
        created_at: 'desc'
      },
      take: 10
    });

    // Obtener recordatorios del usuario
    const reminders = await prisma.reminders.findMany({
      where: {
        user_id: userIdInt
      },
      orderBy: {
        datetime_event: 'asc'
      }
    });

    // Calcular estadísticas de estado de ánimo
    const moodStats = actionLogs.reduce((acc, log) => {
      if (log.mood_at_action) {
        acc[log.mood_at_action] = (acc[log.mood_at_action] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    // Calcular estadísticas de tipos de acción
    const actionStats = actionLogs.reduce((acc, log) => {
      if (log.action_type) {
        acc[log.action_type] = (acc[log.action_type] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return NextResponse.json({
      success: true,
      stats: {
        totalActions: actionLogs.length,
        totalReminders: reminders.length,
        moodDistribution: moodStats,
        actionTypes: actionStats,
        recentActions: actionLogs.slice(0, 5),
        upcomingReminders: reminders.filter(r => new Date(r.datetime_event) > new Date()).slice(0, 5)
      }
    });
  } catch (error) {
    console.error('Error getting user stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
