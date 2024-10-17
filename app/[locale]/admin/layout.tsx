import ErrorBoundary from '@/client/components/ErrorBoundary';
import Header from '@/client/components/ui/header/Header';
import { Children } from '@/client/types/Children';
import { Params } from '@/client/types/Params';
import { unstable_setRequestLocale } from 'next-intl/server';

type LayoutProps = Children & Params;

export default function layout({ children, params: { locale } }: LayoutProps) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header logoStyles="text-secondary-foreground" className="" />

      <ErrorBoundary>
        <main className="flex-auto">{children}</main>
      </ErrorBoundary>
    </>
  );
}
