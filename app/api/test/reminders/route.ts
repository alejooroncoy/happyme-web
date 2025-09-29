import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database';

export async function GET() {
  try {
    console.log('🔍 Testing reminders API - fetching from Neon DB...');
    
    // Obtener recordatorios con información del usuario
    const reminders = await prisma.reminders.findMany({
      take: 10,
      select: {
        id: true,
        title: true,
        description: true,
        datetime_event: true,
        duration_minutes: true,
        notified: true,
        created_at: true,
        users: {
          select: {
            name: true,
            phone_number: true
          }
        }
      },
      orderBy: {
        datetime_event: 'desc'
      }
    });

    console.log(`✅ Successfully fetched ${reminders.length} reminders from Neon DB`);

    return NextResponse.json({
      success: true,
      message: 'Reminders fetched successfully from Neon DB',
      count: reminders.length,
      data: reminders
    });

  } catch (error) {
    console.error('❌ Error fetching reminders from Neon DB:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch reminders from Neon DB',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
