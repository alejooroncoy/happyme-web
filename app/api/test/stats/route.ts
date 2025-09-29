import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database';

export async function GET() {
  try {
    console.log('🔍 Testing stats API - fetching from Neon DB...');
    
    // Obtener estadísticas generales de la base de datos
    const [
      totalUsers,
      totalAccounts,
      totalActions,
      totalReminders,
      recentUsers,
      recentActions
    ] = await Promise.all([
      prisma.users.count(),
      prisma.accounts.count(),
      prisma.actions_logs.count(),
      prisma.reminders.count(),
      prisma.users.findMany({
        take: 5,
        select: {
          id: true,
          name: true,
          phone_number: true,
          mood: true,
          plan: true,
          created_at: true
        },
        orderBy: { created_at: 'desc' }
      }),
      prisma.actions_logs.findMany({
        take: 5,
        select: {
          action_type: true,
          mood_at_action: true,
          created_at: true
        },
        orderBy: { created_at: 'desc' }
      })
    ]);

    // Calcular distribución de estados de ánimo
    const moodDistribution = await prisma.actions_logs.groupBy({
      by: ['mood_at_action'],
      _count: {
        mood_at_action: true
      },
      where: {
        mood_at_action: {
          not: null
        }
      }
    });

    // Calcular distribución de tipos de acción
    const actionDistribution = await prisma.actions_logs.groupBy({
      by: ['action_type'],
      _count: {
        action_type: true
      },
      where: {
        action_type: {
          not: null
        }
      }
    });

    console.log('✅ Successfully fetched stats from Neon DB');

    return NextResponse.json({
      success: true,
      message: 'Stats fetched successfully from Neon DB',
      stats: {
        totalUsers,
        totalAccounts,
        totalActions,
        totalReminders,
        recentUsers,
        recentActions,
        moodDistribution,
        actionDistribution
      }
    });

  } catch (error) {
    console.error('❌ Error fetching stats from Neon DB:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch stats from Neon DB',
        details: error instanceof Error ? error.message : 'Unknown error occurred' 
      },
      { status: 500 }
    );
  }
}
