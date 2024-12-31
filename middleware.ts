import { routing } from '@/server/libs/i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextIntlMiddleware = createMiddleware(routing);

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  const protectedRoutes = /^\/(en|pl|es)\/admin\/(contacts|surrounding)$/;

  if (protectedRoutes.test(pathname)) {
    const token = req.cookies.get('token');

    if (!token) {
      const languageMatch = pathname.match(/^\/(en|pl|es)\//);
      const language = languageMatch ? languageMatch[1] : 'en';

      return NextResponse.redirect(new URL(`/${language}/login`, req.url));
    }
    const validationResponse = await fetch(
      `${req.nextUrl.origin}/api/auth/validate-token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token.value }),
      }
    );

    const validationData = await validationResponse.json();

    if (validationData.status !== 'success') {
      const languageMatch = pathname.match(/^\/(en|pl|es)\//);
      const language = languageMatch ? languageMatch[1] : 'en';

      return NextResponse.redirect(new URL(`/${language}/login`, req.url));
    }
  }

  return nextIntlMiddleware(req);
};

export const config = {
  matcher: ['/', '/(en|pl|es)/:path*'],
};
