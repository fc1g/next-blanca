import Title from '@/client/components/Title';
import WrappedPage from '@/client/containers/admin/contacts/WrappedPage';
import { Params } from '@/client/types/Params';
import { fetchManyWithParams } from '@/server/actions/bookedDate/fetchManyWithParams';
import { auth } from '@/server/libs/auth';

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReadonlyURLSearchParams, redirect } from 'next/navigation';

type PageProps = {
  searchParams: ReadonlyURLSearchParams;
} & Params;

export default async function page({
  searchParams,
  params: { locale },
}: PageProps) {
  unstable_setRequestLocale(locale);
  const session = await auth();
  if (!session) redirect('/api/auth/signin');

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
        subtitle={`${t('admin.calendar.adminGreet')}, ${session?.user?.name}`}
      />

      <WrappedPage data={bookedDates} results={totalResults} t={translate} />
    </div>
  );
}
