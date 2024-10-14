import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/client/components/ui/carousel';
import { useTranslations } from 'next-intl';
import type { StaticImageData } from 'next/image';

import bathFirstDesktop from '@/public/images/desktop/bathFirst.webp';
import bathFirstMobile from '@/public/images/mobile/bathFirst.webp';

import bathSecondDesktop from '@/public/images/desktop/bathSecond.webp';
import bathSecondMobile from '@/public/images/mobile/bathSecond.webp';

import poolDesktop from '@/public/images/desktop/pool.webp';
import poolMobile from '@/public/images/mobile/pool.webp';

import diningRoomDesktop from '@/public/images/desktop/diningRoom.webp';
import diningRoomMobile from '@/public/images/mobile/diningRoom.webp';

import doubleRoomDesktop from '@/public/images/desktop/doubleRoom.webp';
import doubleRoomMobile from '@/public/images/mobile/doubleRoom.webp';

import kitchenDesktop from '@/public/images/desktop/kitchen.webp';
import kitchenMobile from '@/public/images/mobile/kitchen.webp';

import loungeDesktop from '@/public/images/desktop/lounge.webp';
import loungeMobile from '@/public/images/mobile/lounge.webp';

import loungeFromOutsideDesktop from '@/public/images/desktop/loungeFromOutside.webp';
import loungeFromOutsideMobile from '@/public/images/mobile/loungeFromOutside.webp';

import terasaDesktop from '@/public/images/desktop/terasa.webp';
import terasaMobile from '@/public/images/mobile/terasa.webp';

import terasaEnterDesktop from '@/public/images/desktop/terasaEnter.webp';
import terasaEnterMobile from '@/public/images/mobile/terasaEnter.webp';

import twinRoomDarkDesktop from '@/public/images/desktop/twinRoomDark.webp';
import twinRoomDarkMobile from '@/public/images/mobile/twinRoomDark.webp';

import twinRoomLightDesktop from '@/public/images/desktop/twinRoomLight.webp';
import twinRoomLightMobile from '@/public/images/mobile/twinRoomLight.webp';
import Image from 'next/image';

type Images = {
  src: {
    desktop: StaticImageData;
    mobile: StaticImageData;
  };
  altText: string;
};

export default function Gallery() {
  const t = useTranslations('about.gallery');
  const images: Images[] = [
    {
      src: {
        desktop: loungeFromOutsideDesktop,
        mobile: loungeFromOutsideMobile,
      },
      altText: t('loungeFromOutside'),
    },
    {
      src: {
        desktop: loungeDesktop,
        mobile: loungeMobile,
      },
      altText: t('lounge'),
    },
    {
      src: {
        desktop: diningRoomDesktop,
        mobile: diningRoomMobile,
      },
      altText: t('diningRoom'),
    },
    {
      src: {
        desktop: kitchenDesktop,
        mobile: kitchenMobile,
      },
      altText: t('kitchen'),
    },
    {
      src: {
        desktop: doubleRoomDesktop,
        mobile: doubleRoomMobile,
      },
      altText: t('doubleRoom'),
    },
    {
      src: {
        desktop: twinRoomLightDesktop,
        mobile: twinRoomLightMobile,
      },
      altText: t('twinRoomLight'),
    },
    {
      src: {
        desktop: twinRoomDarkDesktop,
        mobile: twinRoomDarkMobile,
      },
      altText: t('twinRoomDark'),
    },
    {
      src: {
        desktop: bathFirstDesktop,
        mobile: bathFirstMobile,
      },
      altText: t('bathFirst'),
    },
    {
      src: {
        desktop: bathSecondDesktop,
        mobile: bathSecondMobile,
      },
      altText: t('bathSecond'),
    },
    {
      src: {
        desktop: terasaEnterDesktop,
        mobile: terasaEnterMobile,
      },
      altText: t('terasaEnter'),
    },
    {
      src: {
        desktop: terasaDesktop,
        mobile: terasaMobile,
      },
      altText: t('terasa'),
    },
    {
      src: {
        desktop: poolDesktop,
        mobile: poolMobile,
      },
      altText: t('pool'),
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <Carousel
        opts={{
          loop: true,
        }}
        className="relative mx-auto w-full"
      >
        <CarouselContent>
          {images.map(image => (
            <CarouselItem className="relative h-screen" key={image.altText}>
              <Image
                priority
                fill
                sizes="80vw"
                src={image.src.desktop}
                alt={image.altText}
                className="hidden rounded object-cover md:block"
              />
              <Image
                priority
                fill
                sizes="80vw"
                src={image.src.mobile}
                alt={image.altText}
                className="rounded object-cover md:hidden"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  );
}
