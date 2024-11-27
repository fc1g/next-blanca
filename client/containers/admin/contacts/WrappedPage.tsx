'use client';

import CustomePagination from '@/client/components/CustomePagination';
import { BookedDate } from '@/client/types/BookedDate';
import { deleteOne } from '@/server/actions/bookedDate/delete';
import { Link, usePathname, useRouter } from '@/server/libs/i18n/routing';
import { useSearchParams } from 'next/navigation';
import { startTransition, useOptimistic } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

type WrappedPageProps = {
  data: BookedDate[];
  results: number;
  t: {
    emptyText: string;
    prev: string;
    next: string;
    from: string;
    to: string;
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

  const [optimisticBookedDates, optimisticDelete] = useOptimistic(
    data,
    (currentBookedDates, bookedDateId) => {
      return currentBookedDates.filter(date => date.id !== bookedDateId);
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
        <Link href="/admin/contacts/create">
          <IoCreateOutline className="h-8 w-8 cursor-pointer" />
        </Link>
      </div>

      <ul className="mb-6 space-y-4">
        {optimisticBookedDates.length > 0 ? (
          <>
            {optimisticBookedDates.map(({ id, initialDate, deadlineDate }) => (
              <li
                className="flex w-full items-center justify-between rounded-lg border px-4 py-2"
                key={id}
              >
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
                  <p>
                    {t.from}: {initialDate}
                  </p>

                  <p>
                    {t.to}: {deadlineDate}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Link href={`/admin/contacts/update/${id}`}>
                    <RiPencilLine className="h-4 w-4 cursor-pointer" />
                  </Link>

                  <RiDeleteBinLine
                    onClick={() => deleteHandler(id)}
                    className="h-4 w-4 cursor-pointer"
                  />
                </div>
              </li>
            ))}

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
