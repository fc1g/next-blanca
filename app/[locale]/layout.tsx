import type { Metadata } from 'next';
import { Children } from '@/client/types/Children';
import Providers from '../providers';
import Footer from '@/client/components/ui/footer/Footer';
import { routing } from '@/server/libs/i18n/routing';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Params } from '@/client/types/Params';

export const metadata: Metadata = {
  title: 'CasaBlanca',
  description: '',
  keywords: '',
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

type RootLayoutProps = Children & Params;

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale);

  return (
    <html
      className="h-full scroll-smooth"
      lang={locale}
      suppressHydrationWarning
    >
      <body className="h-full scroll-smooth">
        <Providers>
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
