import Title from '@/client/components/Title';
import WrappedPage from '@/client/containers/admin/surrounding/WrappedPage';
import { Params } from '@/client/types/Params';
import { fetchMany } from '@/server/actions/surrounding/fetchMany';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ReadonlyURLSearchParams } from 'next/navigation';

type PageProps = {
  searchParams: ReadonlyURLSearchParams;
} & Params;

export default async function page({
  searchParams,
  params: { locale },
}: PageProps) {
  setRequestLocale(locale);

  const { places, totalResults } = await fetchMany(
    new URLSearchParams(searchParams)
  );
  const t = await getTranslations();

  const translation = {
    emptyText: t('error.empty'),
    prev: t('surrounding.pagination.previous'),
    next: t('surrounding.pagination.next'),
  };

  return (
    <div className="mt-12">
      <Title
        title={t('admin.calendar.welcome')}
        subtitle={`${t('admin.calendar.adminGreet')}`}
      />

      <WrappedPage data={places} results={totalResults} t={translation} />
    </div>
  );
}
