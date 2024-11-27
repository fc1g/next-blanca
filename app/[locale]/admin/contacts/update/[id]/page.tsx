import WrappedPageUpdate from '@/client/containers/admin/contacts/WrappedPageUpdate';
import { Locale } from '@/client/types/Locale';
import { fetchOne } from '@/server/actions/bookedDate/fetchOne';
import { fetchStaticParams } from '@/server/actions/bookedDate/fetchStaticParams';
import { auth } from '@/server/libs/auth';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

type PageProps = {
  params: {
    id: string;
    locale: Locale;
  };
};

export const generateStaticParams = async () => {
  const bookedDates = await fetchStaticParams();

  return bookedDates.map(({ id }) => ({
    id,
  }));
};

export default async function page({ params: { id, locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  const session = await auth();
  if (!session) redirect('/api/auth/signin');

  const bookedDate = await fetchOne(id);
  const t = await getTranslations();

  const translation = {
    initialDate: t('admin.calendar.initialDate'),
    deadlineDate: t('admin.calendar.deadlineDate'),
  };

  return <WrappedPageUpdate bookedDate={bookedDate} t={translation} />;
}
