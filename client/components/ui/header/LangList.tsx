import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { usePathname } from '@/server/libs/i18n/routing';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu';
import { Button } from '../button';

export default function LangList() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const localeActive = useLocale();
  const searchParams = useSearchParams();

  function changeLocale(nextLocale: 'en' | 'pl' | 'es') {
    startTransition(() => {
      router.replace(`/${nextLocale}/${pathname}?${searchParams}`);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-24" asChild disabled={isPending}>
        <Button variant="outline">
          {localeActive === 'en'
            ? 'English'
            : localeActive === 'pl'
              ? 'Polish'
              : 'Spanish'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => changeLocale('en')}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => changeLocale('pl')}
        >
          Polish
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => changeLocale('es')}
        >
          Spanish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
