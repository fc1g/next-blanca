import Footer from '@/client/components/ui/footer/Footer';
import { Children } from '@/client/types/Children';
import { Params } from '@/client/types/Params';
import { routing } from '@/server/libs/i18n/routing';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Providers from '../providers';

export const metadata: Metadata = {
  title: 'CasaBlanca',
  description:
    'Rent a house with a private pool in San Pedro del Pinatar, Spain. Enjoy comfort, modern amenities, and beautiful beaches in one of the most attractive resorts. Book your vacation today!',
  keywords:
    '#heatedpool,Heated pool,Big house,luxury villa,luxury house,holidays,holidays in Spain,private pool,private pool heated,private house,vacation,rest,rent houses in Spain',
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

type RootLayoutProps = Children & Params;

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className="h-full">
        <Providers>
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
