'use client';

import { useRouter } from '@/server/libs/i18n/routing';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

type ZodError = {
  message: string;
}[];
type NotFound = {
  message: string;
};

export default function ErrorComponent({
  error,
}: {
  error: string | undefined;
}) {
  const t = useTranslations('error');
  const router = useRouter();

  let statusCode: number = 500;
  let message: string = error || '';
  let details: string = t('message');

  if (error && error.includes('custom')) {
    const err = JSON.parse(error) as ZodError;
    statusCode = 400;
    message = t('validation');
    details = err.map(e => e.message).join(', ');
  }

  if (error && error.includes('404')) {
    const err = JSON.parse(error) as NotFound;
    statusCode = 404;
    message = t('notFound');
    details = err.message;
  }

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-8 lg:py-16">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
          {statusCode}
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
          {message}
        </p>
        <p className="mb-4 text-lg font-light text-muted-foreground">
          {details}
        </p>

        <Button onClick={() => router.back()} variant="default" size="lg">
          {t('reset')}
        </Button>
      </div>
    </section>
  );
}
