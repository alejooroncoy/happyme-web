import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth-service';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Autenticar usuario
    const result = await AuthService.authenticateUser(email, password);

    if (result) {
      return NextResponse.json({
        success: true,
        user: {
          id: result.user.id,
          name: result.user.name,
          phone_number: result.user.phone_number,
          age: result.user.age,
          mood: result.user.mood,
          plan: result.user.plan,
          college: result.user.college,
          semester: result.user.semester,
          gender: result.user.gender
        },
        account: {
          id: result.account.id,
          email: result.account.email
        }
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
