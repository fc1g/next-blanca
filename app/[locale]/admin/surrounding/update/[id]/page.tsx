import WrappedPageUpdate from '@/client/containers/admin/surrounding/WrappedPageUpdate';
import { Locale } from '@/client/types/Locale';
import { fetchMany } from '@/server/actions/surrounding/fetchMany';
import { fetchOne } from '@/server/actions/surrounding/fetchOne';
import { getTranslations, setRequestLocale } from 'next-intl/server';
type PageProps = {
  params: {
    id: string;
    locale: Locale;
  };
};

export const revalidate = 60;
export const dynamicParams = true;

export const generateStaticParams = async () => {
  const { places } = await fetchMany();

  return places.map(({ id }) => ({
    id,
  }));
};

export default async function page({ params: { id, locale } }: PageProps) {
  setRequestLocale(locale);

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
