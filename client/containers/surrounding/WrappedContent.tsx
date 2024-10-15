import { fetchMany } from '@/server/actions/surrounding/fetchMany';
import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';

const PlaceCard = dynamic(() => import('./Card'), { ssr: false });
const CustomePagination = dynamic(
  () => import('../../components/CustomePagination'),
  {
    ssr: false,
  }
);

export default async function WrappedContent({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const { places, totalResults } = await fetchMany(searchParams);
  const t = await getTranslations();

  return (
    <section className="mx-auto mb-4 max-w-screen-xl px-4 md:mb-8">
      {places ? (
        <>
          <ul className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {places.map(place => (
              <li key={place.id}>
                <PlaceCard
                  text={t('surrounding.placeMoreInfo')}
                  place={place}
                />
              </li>
            ))}
          </ul>

          <CustomePagination
            results={totalResults}
            previous={t('surrounding.pagination.previous')}
            next={t('surrounding.pagination.next')}
          />
        </>
      ) : (
        <p className="text-center text-3xl text-primary sm:col-span-2 md:col-span-3">
          {t('error.empty')}
        </p>
      )}
    </section>
  );
}
