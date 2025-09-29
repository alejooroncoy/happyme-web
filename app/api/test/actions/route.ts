import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database';

export async function GET() {
  try {
    console.log('🔍 Testing actions API - fetching from Neon DB...');
    
    // Obtener logs de acciones con información del usuario
    const actions = await prisma.actions_logs.findMany({
      take: 10,
      select: {
        id: true,
        action_type: true,
        mood_at_action: true,
        created_at: true,
        users: {
          select: {
            name: true,
            phone_number: true
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    console.log(`✅ Successfully fetched ${actions.length} actions from Neon DB`);

    return NextResponse.json({
      success: true,
      message: 'Actions fetched successfully from Neon DB',
      count: actions.length,
      data: actions
    });

  } catch (error) {
    console.error('❌ Error fetching actions from Neon DB:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch actions from Neon DB',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
