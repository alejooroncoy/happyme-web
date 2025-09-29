    import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth-service';
import { prisma } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    let phoneNumber;
    try {
      const body = await request.json();
      phoneNumber = body.phoneNumber;
    } catch (jsonError) {
      console.error('JSON parsing error:', jsonError);
      return NextResponse.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      );
    }

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    console.log('🔍 Checking phone number:', phoneNumber);

    // Formatear el número para buscar en la BD
    // El usuario ingresa: 987654321 (9 dígitos)
    // En la BD está guardado como: 51987654321 (11 dígitos con 51 al inicio)
    let formattedPhone = phoneNumber;
    
    // Remover cualquier caracter que no sea número
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    
    // Si tiene 9 dígitos, agregar 51 al inicio
    if (cleanNumber.length === 9) {
      formattedPhone = `51${cleanNumber}`;
    } else if (cleanNumber.length === 11 && cleanNumber.startsWith('51')) {
      // Si ya tiene 11 dígitos y empieza con 51, usarlo tal como está
      formattedPhone = cleanNumber;
    } else {
      return NextResponse.json({
        exists: false,
        message: 'Número de teléfono inválido. Debe tener 9 dígitos.'
      });
    }

    console.log('🔍 Formatted phone for search:', formattedPhone);

    // Verificar si el teléfono existe en la BD
    const user = await prisma.users.findUnique({
      where: {
        phone_number: formattedPhone
      }
    });

    if (user) {
      console.log('✅ User found in Neon DB:', user.name);
      
      // Usuario existe, verificar si ya tiene cuenta
      const accounts = await prisma.accounts.findMany({
        where: {
          user_id: user.id
        }
      });
      
      return NextResponse.json({
        exists: true,
        hasAccount: accounts.length > 0,
        user: {
          id: user.id,
          name: user.name,
          phone_number: user.phone_number
        }
      });
    } else {
      console.log('❌ User not found in Neon DB');
      return NextResponse.json({
        exists: false,
        message: 'Número de teléfono inválido'
      });
    }
  } catch (error) {
    console.error('Error checking phone:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
