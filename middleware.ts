import { routing } from '@/server/libs/i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const nextIntlMiddleware = createMiddleware(routing);

export const middleware = (request: NextRequest) => nextIntlMiddleware(request);

export const config = {
  matcher: ['/', '/(en|pl|es)/:path*'],
};
