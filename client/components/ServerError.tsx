import { useTranslations } from 'next-intl';

export default function ServerError({ error }: { error: Error | null }) {
  const t = useTranslations('error');

  return (
    <section className="flex flex-1 items-center justify-center bg-primary-foreground px-4 py-8 lg:py-16">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
          {error?.name}
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
          {`${t('pity')}: ${error?.message}`}
        </p>
        <p className="mb-4 text-lg font-light text-muted-foreground">
          {t('message')}
        </p>
      </div>
    </section>
  );
}
