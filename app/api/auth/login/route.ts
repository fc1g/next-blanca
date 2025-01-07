import { prisma } from '@/server/libs/prisma-client';
import { checkPassword } from '@/server/services/checkPassword';
import { signToken } from '@/server/services/signToken';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.email || !body.password) {
      return NextResponse.json(
        { status: 'fail', message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email },
      select: { password: true, id: true },
    });

    if (!user || !(await checkPassword(body.password, user.password))) {
      return NextResponse.json(
        { status: 'fail', message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = signToken(user.id);

    const response = NextResponse.json(
      { status: 'success', message: 'Login successful' },
      { status: 200 }
    );

    const maxAge = Number(process.env.JWT_TOKEN_EXPIRES_IN);

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * maxAge,
      path: '/',
    });

    return response;
  } catch (err) {
    console.error('Error during login:', err);
    return NextResponse.json(
      { status: 'error', message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
