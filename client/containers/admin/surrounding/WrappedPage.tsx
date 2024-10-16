'use client';

import CustomePagination from '@/client/components/CustomePagination';
import { Locale } from '@/client/types/Locale';
import { SurroundingPlaces } from '@/client/types/SurroundingPlace';
import { deleteOne } from '@/server/actions/surrounding/delete';
import { Link, usePathname, useRouter } from '@/server/libs/i18n/routing';
import { useLocale } from 'next-intl';
import { startTransition, useOptimistic } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

type WrappedPageProps = {
  data: SurroundingPlaces[];
  results: number;
  t: {
    emptyText: string;
    prev: string;
    next: string;
  };
};

export default function WrappedPage({ data, results, t }: WrappedPageProps) {
  const searchParams = new URLSearchParams(useSearchParams());
  const router = useRouter();
  const pathname = usePathname();
  const currPage = Number(searchParams.get('page')) || 1;
  if (!data.length && currPage > 1) {
    searchParams.set('page', `${currPage - 1}`);
    router.replace(`${pathname}?${searchParams.toString()}`);
  }
  const activeLocale = useLocale() as Locale;
  const [optimisticPlaces, optimisticDelete] = useOptimistic(
    data,
    (currentPlaces, placeId) => {
      return currentPlaces.filter(place => place.id !== placeId);
    }
  );

  async function deleteHandler(id: string) {
    startTransition(() => {
      optimisticDelete(id);
    });

    await deleteOne(id);
  }
  return (
    <section className="mx-auto max-w-screen-xl px-2 lg:px-6">
      <div className="mb-4 flex items-center justify-end">
        <Link href="/admin/surrounding/create">
          <IoCreateOutline className="h-8 w-8 cursor-pointer" />
        </Link>
      </div>

      <ul className="mb-6 space-y-4">
        {optimisticPlaces.length > 0 ? (
          <>
            {optimisticPlaces.map(
              ({ id, image, imageAltText, title, subtitle }) => (
                <li
                  className="flex w-full items-center justify-between rounded-lg border px-4 py-2"
                  key={id}
                >
                  <Image
                    loading="lazy"
                    src={image}
                    alt={imageAltText[activeLocale]}
                    className="h-12 w-12 object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="flex w-full items-center justify-between px-4">
                    <div className="flex flex-col">
                      <h3>{title[activeLocale]}</h3>

                      <p className="text-xs text-muted-foreground">
                        {subtitle[activeLocale]}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Link href={`/admin/surrounding/update/${id}`}>
                        <RiPencilLine className="h-4 w-4 cursor-pointer" />
                      </Link>
                      <RiDeleteBinLine
                        onClick={() => deleteHandler(id)}
                        className="h-4 w-4 cursor-pointer"
                      />
                    </div>
                  </div>
                </li>
              )
            )}
            <CustomePagination
              results={results}
              previous={t.prev}
              next={t.next}
            />
          </>
        ) : (
          <p className="text-center text-3xl text-primary sm:col-span-2 md:col-span-3">
            {t.emptyText}
          </p>
        )}
      </ul>
    </section>
  );
}
