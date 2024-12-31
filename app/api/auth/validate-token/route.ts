import { prisma } from '@/server/libs/prisma-client';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

type DecodedToken = { id: string };

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token)
      return NextResponse.json(
        { status: 'fail', message: 'Token is required' },
        { status: 400 }
      );

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (user?.role === 'ADMIN') {
      return NextResponse.json(
        { status: 'success', message: 'Valid token' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: 'fail', message: 'Forbidden' },
        { status: 403 }
      );
    }
  } catch (err) {
    console.error('Token validation error:', err);

    return NextResponse.json(
      { status: 'error', message: 'Invalid token' },
      { status: 500 }
    );
  }
}
