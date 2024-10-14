'use client';

import { Button } from '@/client/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/client/components/ui/card';
import { Link } from '@/server/libs/i18n/routing';
import { Locale } from '@/client/types/Locale';
import { SurroundingPlaces } from '@/client/types/SurroundingPlace';
import { useLocale } from 'next-intl';
import Image from 'next/image';

type PlaceCardProps = {
  text: string;
  place: SurroundingPlaces;
};

export default function PlaceCard({
  place: { title, subtitle, imageAltText, id, image },
  text,
}: PlaceCardProps) {
  const activeLocale = useLocale() as Locale;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title[activeLocale]}</CardTitle>
        <CardDescription>{subtitle[activeLocale]}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-48">
          <Image
            priority
            src={image}
            alt={imageAltText[activeLocale]}
            fill
            sizes="25vw"
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button size="lg" asChild>
          <Link href={`/surrounding/${id}`}>{text} &darr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
