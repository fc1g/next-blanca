'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/client/components/ui/dropdown-menu';
import { Separator } from '@/client/components/ui/separator';
import { usePathname, useRouter } from '@/server/libs/i18n/routing';
import { useSearchParams } from 'next/navigation';
import { FaXmark } from 'react-icons/fa6';

type FiltersProps = {
  sortText: string;
  limitText: string;
  filtersText: string;
  sortData: {
    low: string;
    high: string;
  };
  limitData: {
    three: string;
    nine: string;
  };
};

export default function Filters({
  sortText,
  limitText,
  filtersText,
  sortData,
  limitData,
}: FiltersProps) {
  const searchParams = new URLSearchParams(useSearchParams());
  const pathname = usePathname();
  const router = useRouter();

  function filterHandler(type: string, param: string) {
    searchParams.set(type, param);
    searchParams.set('page', '1');
    router.replace(`${pathname}?${searchParams.toString()}`, { scroll: false });
  }

  return (
    <section className="my-12 flex flex-col">
      <div className="flex items-center justify-end p-6 text-secondary-foreground [&>div:nth-child(odd)]:border-r [&>div:nth-child(odd)]:border-border">
        <div className="px-4">
          <DropdownMenu>
            <DropdownMenuTrigger>{sortText}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => filterHandler('sort', 'asc')}>
                {sortData.low}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => filterHandler('sort', 'desc')}>
                {sortData.high}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="px-4">
          <DropdownMenu>
            <DropdownMenuTrigger>{limitText}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => filterHandler('limit', '3')}>
                {limitData.three}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => filterHandler('limit', '9')}>
                {limitData.nine}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator />

      <div className="flex items-center p-6">
        <div className="mr-4 pr-4 text-muted-foreground">{filtersText}</div>

        <ul className="flex h-4 items-center space-x-4">
          {searchParams
            .toString()
            .split('&')
            .map(param => {
              if (!param || param.includes('limit=6') || param.includes('page'))
                return '';

              let paramData = param;
              if (paramData.includes('desc'))
                paramData = paramData.replace('desc', 'high');
              if (paramData.includes('asc'))
                paramData = paramData.replace('asc', 'low');

              return (
                <li key={paramData}>
                  <div className="flex items-center space-x-1 rounded-full border border-gray-300 px-4 py-1 text-sm dark:border-gray-600">
                    <span className="text-secondary-foreground">
                      {paramData.split('=').join(': ')}
                    </span>

                    <FaXmark
                      onClick={() => {
                        searchParams.set('page', '1');

                        searchParams.delete(
                          paramData.split('=')[0] as 'sort' | 'limit'
                        );

                        router.replace(
                          `${pathname}?${searchParams.toString()}`,
                          {
                            scroll: false,
                          }
                        );
                      }}
                      className="h-4 w-4 cursor-pointer rounded-full p-[1px] hover:bg-gray-300 hover:text-secondary-foreground dark:hover:bg-gray-600"
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
