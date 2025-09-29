import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database';

export async function GET() {
  try {
    console.log('🔍 Testing accounts API - fetching from Neon DB...');
    
    // Obtener todas las cuentas
    const accounts = await prisma.accounts.findMany({
      take: 10,
      select: {
        id: true,
        email: true,
        user_id: true,
        created_at: true,
        users: {
          select: {
            name: true,
            phone_number: true
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    });

    console.log(`✅ Successfully fetched ${accounts.length} accounts from Neon DB`);

    return NextResponse.json({
      success: true,
      message: 'Accounts fetched successfully from Neon DB',
      count: accounts.length,
      data: accounts
    });

  } catch (error) {
    console.error('❌ Error fetching accounts from Neon DB:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch accounts from Neon DB',
        details: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}
