import Title from '@/client/components/Title';
import WrappedPage from '@/client/containers/admin/contacts/WrappedPage';
import { Params } from '@/client/types/Params';
import { fetchManyWithParams } from '@/server/actions/bookedDate/fetchManyWithParams';

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

  const { bookedDates, totalResults } = await fetchManyWithParams(
    new URLSearchParams(searchParams)
  );
  const t = await getTranslations();

  const translate = {
    emptyText: t('error.empty'),
    prev: t('surrounding.pagination.previous'),
    next: t('surrounding.pagination.next'),
    from: t('admin.calendar.from'),
    to: t('admin.calendar.to'),
  };

  return (
    <div className="mt-12">
      <Title
        title={t('admin.calendar.welcome')}
        subtitle={`${t('admin.calendar.adminGreet')}`}
      />

      <WrappedPage data={bookedDates} results={totalResults} t={translate} />
    </div>
  );
}
