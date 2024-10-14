'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from '@/client/components/ui/pagination';
import { usePathname, useRouter } from '@/server/libs/i18n/routing';
import { useSearchParams } from 'next/navigation';

type CustomePaginationProps = {
  results: number;
  previous: string;
  next: string;
};

export default function CustomePagination({
  results,
  previous,
  next,
}: CustomePaginationProps) {
  const searchParams = new URLSearchParams(useSearchParams());
  const currPage = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 6;

  const prevCondition = currPage === 1;
  const nextCondition = currPage * limit >= results;

  const router = useRouter();
  const pathname = usePathname();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            text={previous}
            className={`cursor-pointer ${prevCondition && 'pointer-events-none opacity-50'}`}
            onClick={() => {
              if (prevCondition) return;

              searchParams.set('page', `${currPage - 1}`);
              router.replace(`${pathname}?${searchParams.toString()}`);
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            text={next}
            className={`cursor-pointer ${nextCondition && 'pointer-events-none opacity-50'}`}
            onClick={() => {
              if (nextCondition) return;

              searchParams.set('page', `${currPage + 1}`);
              router.replace(`${pathname}?${searchParams.toString()}`);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
