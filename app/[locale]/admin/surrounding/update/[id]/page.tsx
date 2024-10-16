import WrappedPageUpdate from '@/client/containers/admin/surrounding/WrappedPageUpdate';
import { Locale } from '@/client/types/Locale';
import { fetchOne } from '@/server/actions/surrounding/fetchOne';
import { auth } from '@/server/libs/auth';
import { redirect } from '@/server/libs/i18n/routing';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
type PageProps = {
  params: {
    id: string;
    locale: Locale;
  };
};

export default async function page({ params: { id, locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  const session = await auth();
  if (!session) redirect('/');
  const place = await fetchOne(id);
  const t = await getTranslations();

  const translation = {
    title: t('admin.surrounding.title'),
    subtitle: t('admin.surrounding.subtitle'),
    description: t('admin.surrounding.description'),
    imageAltText: t('admin.surrounding.imageAltText'),
    image: t('admin.surrounding.image'),
    distance: t('admin.surrounding.distance'),
    routeLink: t('admin.surrounding.routeLink'),
    coords: {
      lat: t('admin.surrounding.coords.lat'),
      lng: t('admin.surrounding.coords.lng'),
    },
  };

  return <WrappedPageUpdate t={translation} data={place} />;
}
