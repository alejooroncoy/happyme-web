import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database';

export async function GET() {
  try {
    console.log('🔍 Testing users API - fetching from Neon DB...');
    
    // Obtener todos los usuarios
    const users = await prisma.users.findMany({
      take: 10, // Solo los primeros 10 para no sobrecargar
      select: {
        id: true,
        phone_number: true,
        name: true,
        age: true,
        mood: true,
        plan: true,
        college: true,
        semester: true,
        gender: true,
        created_at: true
      },
      orderBy: {
        id: 'desc'
      }
    });

    console.log(`✅ Successfully fetched ${users.length} users from Neon DB`);

    return NextResponse.json({
      success: true,
      message: 'Users fetched successfully from Neon DB',
      count: users.length,
      data: users
    });

  } catch (error) {
    console.error('❌ Error fetching users from Neon DB:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch users from Neon DB',
        details: error instanceof Error ? error.message : 'Unknown error occurred' 
      },
      { status: 500 }
    );
  }
}
