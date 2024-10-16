'use client';

import { Button } from '@/client/components/ui/button';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations('error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  let errorMessage: string = 'An unexpected error occurred';
  let errorDetails: string = '';
  let statusCode: number = 500;

  try {
    const parsedError = JSON.parse(error.message);
    errorMessage = parsedError.message || errorMessage;
    errorDetails = parsedError.details || '';
    statusCode = parsedError.statusCode;
  } catch (err) {
    console.log(console.error('Failed to parse error message:', err));
  }

  return (
    <section>
      <div className="flex h-full items-center justify-center px-4 py-8 lg:py-16">
        <div className="text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            {statusCode}
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            {errorMessage}
          </p>
          <p className="mb-4 text-lg font-light text-muted-foreground">
            {errorDetails ? errorDetails : t('message')}
          </p>

          <Button onClick={() => reset()} variant="default" size="lg">
            {t('reset')}
          </Button>
        </div>
      </div>
    </section>
  );
}
