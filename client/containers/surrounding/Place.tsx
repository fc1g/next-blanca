'use client';

import { Button } from '@/client/components/ui/button';
import Anchor from '@/client/components/Anchor';
import Title from '@/client/components/Title';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { SurroundingPlace } from '@/client/types/SurroundingPlace';
import { Locale } from '@/client/types/Locale';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

type PlaceProps = {
  routeText: string;
  houseText: string;
  place: SurroundingPlace;
};

const LeafletMap = dynamic(() => import('./LeafMap'), {
  ssr: false,
});

export default function Place({
  routeText,
  houseText,
  place: { title, description, imageAltText, routeLink, coords, image },
}: PlaceProps) {
  const activeLocale = useLocale() as Locale;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  return (
    <section className="px-4 text-center sm:px-6 lg:px-12">
      <div className="my-16 grid gap-8 md:flex-row lg:grid-cols-2">
        <div className="relative h-[60vh]">
          <Image
            src={image}
            alt={imageAltText[activeLocale]}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <Title title={title[activeLocale]} subtitle="" />

          <p className="-mt-6 mb-3 text-secondary-foreground lg:mb-6">
            {description[activeLocale]}
          </p>

          <Button variant="default" size="lg" asChild>
            <Anchor href={routeLink}>{routeText} &rarr;</Anchor>
          </Button>
        </div>
      </div>

      <div className={`map-container ${isLoaded ? 'loaded' : ''}`}>
        <LeafletMap
          coords={[coords.lat, coords.lng]}
          houseText={houseText}
          title={title[activeLocale]}
        />
      </div>
    </section>
  );
}
