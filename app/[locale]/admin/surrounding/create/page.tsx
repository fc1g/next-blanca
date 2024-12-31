import WrappedPageCreate from '@/client/containers/admin/surrounding/WrappedPageCreate';
import { Params } from '@/client/types/Params';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function page({ params: { locale } }: Params) {
  setRequestLocale(locale);

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

  return <WrappedPageCreate t={translation} />;
}
