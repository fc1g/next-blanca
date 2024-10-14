import SurroundingPageSkeleton from '@/client/components/skeleton/SurroundingPageSkeleton';
import Filters from '@/client/containers/surrounding/Filters';
import WrappedContent from '@/client/containers/surrounding/WrappedContent';
import { Params } from '@/client/types/Params';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';

type SurroundingPageProps = {
  searchParams: ReadonlyURLSearchParams;
} & Params;

export default function SurroundingPage({
  searchParams,
  params: { locale },
}: SurroundingPageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('surrounding.filtersMenu');
  const params = new URLSearchParams(searchParams);

  return (
    <>
      <Filters
        sortText={t('sort')}
        limitText={t('limit')}
        filtersText={t('filters')}
        sortData={{
          low: t('sortTypes.low'),
          high: t('sortTypes.high'),
        }}
        limitData={{
          three: t('limitTypes.three'),
          nine: t('limitTypes.nine'),
        }}
      />

      <Suspense
        fallback={
          <SurroundingPageSkeleton limit={Number(params.get('limit'))} />
        }
      >
        <WrappedContent searchParams={params} />
      </Suspense>
    </>
  );
}
