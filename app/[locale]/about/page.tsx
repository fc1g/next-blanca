import Header from '@/client/components/ui/header/Header';
import Gallery from '@/client/containers/about/Gallery';
import HouseInformation from '@/client/containers/about/HouseInformation';
import { Params } from '@/client/types/Params';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function AboutPage({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header
        className="absolute inset-x-0 top-0 z-[999]"
        logoStyles="invisible"
      />

      <main className="flex-auto" role="main">
        <Gallery />

        <HouseInformation />
      </main>
    </>
  );
}
