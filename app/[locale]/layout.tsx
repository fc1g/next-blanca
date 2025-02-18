import Footer from '@/client/components/ui/footer/Footer';
import { Children } from '@/client/types/Children';
import { Params } from '@/client/types/Params';
import { routing } from '@/server/libs/i18n/routing';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Providers from '../providers';
import kolaz from './kolaz.jpg';

export const metadata: Metadata = {
  title: 'CasaBlanca',
  description:
    'Rent a house with a private pool in San Pedro del Pinatar, Spain. Enjoy comfort, modern amenities, and beautiful beaches in one of the most attractive resorts. Book your vacation today!',
  keywords:
    '#heatedpool,Heated pool,Big house,luxury villa,luxury house,holidays,holidays in Spain,private pool,private pool heated,private house,vacation,rest,rent houses in Spain',
  openGraph: {
    title: 'CasaBlanca',
    description:
      'Rent a house with a private pool in San Pedro del Pinatar, Spain. Enjoy comfort, modern amenities, and beautiful beaches in one of the most attractive resorts. Book your vacation today!',
    url: 'https://casablanca.ovh/',
    siteName: 'CasaBlanca',
    images: [
      {
        url: kolaz.src,
        width: 1200,
        height: 630,
        alt: 'Collage of a modern home with pool, living room, bedroom, dining area, and terrace. The website "www.casablanca.ovh" is prominently displayed in the center.',
      },
    ],
    type: 'website',
  },
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
