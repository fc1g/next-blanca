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

type LangListProps = {
  en: string;
  pl: string;
  es: string;
};

export default function LangList({ en, pl, es }: LangListProps) {
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
      <DropdownMenuTrigger
        aria-haspopup="menu"
        className="w-24"
        asChild
        disabled={isPending}
      >
        <Button variant="outline">
          {localeActive === 'en' ? en : localeActive === 'pl' ? pl : es}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => changeLocale('en')}
        >
          {en}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => changeLocale('pl')}
        >
          {pl}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => changeLocale('es')}
        >
          {es}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
