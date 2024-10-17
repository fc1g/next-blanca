'use client';

import { Button } from '@/client/components/ui/button';
import { useTranslations } from 'next-intl';

type ZodError = {
  message: string;
}[];

type NotFound = {
  message: string;
};

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations('error');

  let statusCode: number = 500;
  let message: string = error.message;
  let details: string = t('message');

  if (error.message.includes('custom')) {
    const err = JSON.parse(error.message) as ZodError;
    statusCode = 400;
    message = t('validation');
    details = err.map(e => e.message).join(', ');
  }

  if (error.message.includes('404')) {
    const err = JSON.parse(error.message) as NotFound;
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

        <Button onClick={() => reset()} variant="default" size="lg">
          {t('reset')}
        </Button>
      </div>
    </section>
  );
}
