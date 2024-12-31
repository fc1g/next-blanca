import WrappedPageUpdate from '@/client/containers/admin/contacts/WrappedPageUpdate';
import { Locale } from '@/client/types/Locale';
import { fetchOne } from '@/server/actions/bookedDate/fetchOne';
import { fetchStaticParams } from '@/server/actions/bookedDate/fetchStaticParams';
import { getTranslations, setRequestLocale } from 'next-intl/server';

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
  setRequestLocale(locale);

  const bookedDate = await fetchOne(id);
  const t = await getTranslations();

  const translation = {
    initialDate: t('admin.calendar.initialDate'),
    deadlineDate: t('admin.calendar.deadlineDate'),
  };

  return <WrappedPageUpdate bookedDate={bookedDate} t={translation} />;
}
