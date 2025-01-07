import { prisma } from '@/server/libs/prisma-client';
import { signToken } from '@/server/services/signToken';
import bcrypt from 'bcryptjs';
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

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'User with this email already exists',
        },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: await bcrypt.hash(body.password, 12),
      },
    });

    const token = signToken(newUser.id);

    const response = NextResponse.json(
      { status: 'success', message: 'User successfully registered' },
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
    console.error('Error during registration:', err);

    return NextResponse.json(
      {
        status: 'error',
        message: `Server error: ${err instanceof Error ? err.message : err}`,
      },
      { status: 500 }
    );
  }
}
