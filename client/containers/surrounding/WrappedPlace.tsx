import { fetchOne } from '@/server/actions/surrounding/fetchOne';
import { getTranslations } from 'next-intl/server';
import Place from './Place';

export default async function WrappedPlace({ id }: { id: string }) {
  const place = await fetchOne(id);
  const t = await getTranslations();

  return (
    <Place
      routeText={t('surrounding.placeGenerateRoute')}
      houseText={t('surrounding.placeHouse')}
      place={place}
      enable={t('surrounding.enable')}
      disable={t('surrounding.disable')}
    />
  );
}
