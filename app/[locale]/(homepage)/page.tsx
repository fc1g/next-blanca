import Header from '@/client/components/ui/header/Header';
import Hero from '@/client/containers/homepage/Hero';
import Testimonials from '@/client/containers/homepage/Testimonials';
import { Params } from '@/client/types/Params';
import { setRequestLocale } from 'next-intl/server';

export default function Home({ params: { locale } }: Params) {
  setRequestLocale(locale);

  return (
    <>
      <Header
        className="absolute inset-x-0 top-0 z-[999]"
        logoStyles="text-white"
      />

      <main className="flex-auto" role="main">
        <Hero />

        <Testimonials />
      </main>
    </>
  );
}
