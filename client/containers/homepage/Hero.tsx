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
        src={heroMobile}
        alt={t('about.gallery.terasaEnter')}
        priority
        fill
        sizes="(max-width: 600px) 375px, (min-width: 601px) 1280px"
        className="object-cover md:hidden"
      />

      <Image
        src={heroDesktop}
        alt={t('about.gallery.terasaEnter')}
        priority
        fill
        sizes="(max-width: 600px) 375px, (min-width: 601px) 1280px"
        className="hidden object-cover md:block"
      />

      <div className="relative z-20 flex flex-col justify-center px-3 sm:px-6">
        <h1 className="max-w-52 text-lg xs:max-w-64 xs:text-2xl sm:max-w-80 sm:text-3xl md:max-w-xl md:text-5xl lg:max-w-2xl lg:text-6xl xl:max-w-3xl xl:text-7xl">
          {t('homepage.hero.title.firstPart')}{' '}
          <span className="text-[#85cbff]">
            {t('homepage.hero.title.vacation')}
          </span>{' '}
          {t('homepage.hero.title.lastPart')}
        </h1>

        <p className="mb-6 mt-2 text-[.65rem] text-white xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
          {t('homepage.hero.subtitle')}
        </p>

        <div className="inline-block sm:hidden">
          <Button variant="outline" size="sm" asChild>
            <Link href="/about">{t('homepage.hero.moreInfo')} &darr;</Link>
          </Button>
        </div>

        <div className="hidden sm:inline-block md:hidden">
          <Button variant="outline" aria-hidden asChild>
            <Link href="/about">{t('homepage.hero.moreInfo')} &darr;</Link>
          </Button>
        </div>

        <div className="hidden md:inline-block">
          <Button aria-hidden variant="outline" size="lg" asChild>
            <Link href="/about">{t('homepage.hero.moreInfo')} &darr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
