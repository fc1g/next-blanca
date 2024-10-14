import Title from '@/client/components/Title';
import { Button } from '@/client/components/ui/button';
import TestimonialsList from '@/client/components/ui/homepage/testimonials/TestimonialsList';
import { useTranslations } from 'next-intl';

import kuba from '@/public/images/users/kuba.webp';
import monika from '@/public/images/users/monika.webp';
import nik from '@/public/images/users/nik.webp';
import adam from '@/public/images/users/adam.webp';

export default function Testimonials() {
  const t = useTranslations('homepage.testimonials');

  return (
    <section className="pb-8 pt-16 text-center lg:pb-16 lg:pt-24">
      <Title title={t('title')} subtitle={t('subtitle')} />

      <TestimonialsList>
        <TestimonialsList.Testimonial src={kuba} username="kuba" />

        <TestimonialsList.Testimonial src={monika} username="monika" />

        <TestimonialsList.Testimonial src={nik} username="nik" />

        <TestimonialsList.Testimonial src={adam} username="adam" />
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
