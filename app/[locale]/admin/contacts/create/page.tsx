import WrappedPageCreate from '@/client/containers/admin/contacts/WrappedPageCreate';
import { Params } from '@/client/types/Params';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function page({ params: { locale } }: Params) {
  setRequestLocale(locale);

  const t = await getTranslations();

  const translation = {
    initialDate: t('admin.calendar.initialDate'),
    deadlineDate: t('admin.calendar.deadlineDate'),
  };

  return <WrappedPageCreate t={translation} />;
}
