import WrappedPageCreate from '@/client/containers/admin/contacts/WrappedPageCreate';
import { Params } from '@/client/types/Params';
import { auth } from '@/server/libs/auth';
import { redirect } from '@/server/libs/i18n/routing';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export default async function page({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const session = await auth();
  if (!session) redirect('/api/auth/signin');

  const t = await getTranslations();

  const translation = {
    initialDate: t('admin.calendar.initialDate'),
    deadlineDate: t('admin.calendar.deadlineDate'),
  };

  return <WrappedPageCreate t={translation} />;
}
