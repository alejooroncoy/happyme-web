import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth-service';

export async function POST(request: NextRequest) {
  try {
    const { email, password, userId } = await request.json();

    if (!email || !password || !userId) {
      return NextResponse.json(
        { error: 'Email, password, and userId are required' },
        { status: 400 }
      );
    }

    // Crear la cuenta
    const account = await AuthService.createAccount(email, password, userId);

    if (account) {
      return NextResponse.json({
        success: true,
        account: {
          id: account.id,
          email: account.email,
          user_id: account.user_id
        }
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to create account' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error creating account:', error);
    
    if (error.message === 'Email already in use') {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
