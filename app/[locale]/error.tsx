'use client';

import { Button } from '@/client/components/ui/button';
import { useTranslations } from 'next-intl';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations('error');

  return (
    <section
      role="alert"
      className="flex flex-1 items-center justify-center px-4 py-8 lg:py-16"
    >
      <div className="text-center">
        <p className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
          {`${t('pity')}: ${error.message}`}
        </p>

        <Button onClick={() => reset()} variant="default" size="lg">
          {t('reset')}
        </Button>
      </div>
    </section>
  );
}
