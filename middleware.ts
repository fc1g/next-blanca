/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from './server/libs/auth';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/server/libs/i18n/routing';

const nextIntlMiddleware = createMiddleware(routing);

export const middleware = async (request: any) => {
  const authResponse = await auth(request);

  if (authResponse) {
    return nextIntlMiddleware(request);
  }

  return authResponse;
};

export const config = {
  matcher: ['/', '/(en|pl|es)/:path*'],
};
