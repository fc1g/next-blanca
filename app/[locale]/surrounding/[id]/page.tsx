import { fetchStaticParams } from '@/server/actions/surrounding/fetchStaticParams';
import PlaceSkeleton from '@/client/components/skeleton/PlaceSkeleton';
import WrappedPlace from '@/client/containers/surrounding/WrappedPlace';
import { Locale } from '@/client/types/Locale';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export const generateStaticParams = async () => {
  const places = await fetchStaticParams();

  return places.map(({ id }) => ({
    id,
  }));
};

type SurroundingPlacePageProps = {
  params: {
    id: string;
    locale: Locale;
  };
};

export default async function SurroundingPlacePage({
  params: { id, locale },
}: SurroundingPlacePageProps) {
  unstable_setRequestLocale(locale);

  return (
    <Suspense fallback={<PlaceSkeleton />}>
      <WrappedPlace id={id} />
    </Suspense>
  );
}
