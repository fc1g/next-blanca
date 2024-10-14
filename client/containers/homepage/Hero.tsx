import Image from 'next/image';
import heroDesktop from '@/public/images/desktop/terasaEnter.webp';
import heroMobile from '@/public/images/mobile/terasaEnter.webp';
import { useTranslations } from 'next-intl';
import { Button } from '@/client/components/ui/button';
import { Link } from '@/server/libs/i18n/routing';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative mx-auto flex h-screen w-full before:absolute before:inset-0 before:z-10 before:block before:bg-gradient-to-r before:from-[#00000080] before:to-[#00000080] before:opacity-75 before:content-['']">
      <Image
        src={heroDesktop}
        alt={t('about.gallery.terasaEnter')}
        priority
        fill
        sizes="90vw"
        className="hidden object-cover md:block"
      />

      <Image
        src={heroMobile}
        alt={t('about.gallery.terasaEnter')}
        priority
        fill
        sizes="90vw"
        className="object-cover md:hidden"
      />

      <div className="relative z-20 flex flex-col justify-center px-3 sm:px-6">
        <h1 className="text-[2.2rem] leading-10 text-white xs:max-w-md xs:text-4xl sm:max-w-xl sm:text-5xl md:max-w-2xl md:text-6xl lg:max-w-3xl lg:text-7xl">
          {t('homepage.hero.title.firstPart')}{' '}
          <span className="text-[#85cbff]">
            {t('homepage.hero.title.vacation')}
          </span>{' '}
          {t('homepage.hero.title.lastPart')}
        </h1>

        <p className="mb-6 mt-2 text-base text-white xs:text-base md:text-lg lg:text-xl">
          {t('homepage.hero.subtitle')}
        </p>

        <div className="inline-block">
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">{t('homepage.hero.moreInfo')} &darr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
