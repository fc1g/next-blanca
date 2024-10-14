import type { Children } from '@/client/types/Children';
import { useTranslations } from 'next-intl';
import Image, { type StaticImageData } from 'next/image';

export default function TestimonialsList({ children }: Children) {
  return (
    <div className="mx-auto mb-8 grid max-w-screen-xl lg:mb-12 lg:grid-cols-2">
      {children}
    </div>
  );
}

type TestimonialProps = {
  src: StaticImageData;
  username: string;
};

function Testimonial({ src, username }: TestimonialProps) {
  const t = useTranslations('homepage.testimonials');

  return (
    <figure className="flex flex-col items-center justify-center border-b border-gray-200 bg-primary-foreground p-8 text-center dark:border-gray-600 md:p-12 lg:border-r">
      <blockquote className="mx-auto mb-8 max-w-2xl text-muted-foreground">
        <h3 className="text-lg font-semibold text-secondary-foreground">
          {t(`${username}.title`)}
        </h3>
        <p className="my-4">{t(`${username}.text`)}</p>
      </blockquote>

      <figcaption className="flex items-center justify-center space-x-3">
        <Image
          src={src}
          className="h-9 w-9 rounded-full"
          width={36}
          height={36}
          priority
          alt={t(`${username}.imgAltText`)}
        />
        <div className="text-left font-medium text-primary">
          {t(`${username}.userName`)}
        </div>
      </figcaption>
    </figure>
  );
}

TestimonialsList.Testimonial = Testimonial;
