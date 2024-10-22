import Title from '@/client/components/Title';
import { Button } from '@/client/components/ui/button';
import TestimonialsList from '@/client/components/ui/homepage/testimonials/TestimonialsList';
import { useTranslations } from 'next-intl';

import kuba from '@/public/images/users/kuba.webp';
import monika from '@/public/images/users/monika.webp';
import nik from '@/public/images/users/nik.webp';
import adam from '@/public/images/users/adam.webp';
import { StaticImageData } from 'next/image';

type TestimonialData = {
  src: StaticImageData;
  username: string;
};

const testimonials: TestimonialData[] = [
  { src: kuba, username: 'kuba' },
  { src: monika, username: 'monika' },
  { src: nik, username: 'nik' },
  { src: adam, username: 'adam' },
];

export default function Testimonials() {
  const t = useTranslations('homepage.testimonials');

  return (
    <section className="pb-8 pt-16 text-center lg:pb-16 lg:pt-24">
      <Title title={t('title')} subtitle={t('subtitle')} />

      <TestimonialsList>
        {testimonials.map(({ src, username }) => (
          <TestimonialsList.Testimonial
            key={username}
            src={src}
            username={username}
          />
        ))}
      </TestimonialsList>

      <div className="flex items-center justify-center">
        <Button size="lg" variant="outline" asChild>
          <a
            href="https://www.facebook.com/people/CasaBlanca-Private-Heated-Pool/100091592920461/?sk=reviews"
            target="blank"
            rel="noopener noreferrer"
          >
            {t('leaveReview')} &rarr;
          </a>
        </Button>
      </div>
    </section>
  );
}
