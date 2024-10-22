import ErrorBoundary from '@/client/components/ErrorBoundary';
import CalendarSkeleton from '@/client/components/skeleton/CalendarSkeleton';
import Title from '@/client/components/Title';
import Header from '@/client/components/ui/header/Header';
import ContactsAccordion from '@/client/containers/contacts/ContactsAccordion';
import ContactsChart from '@/client/containers/contacts/ContactsChart';
import ContactsGridInformation from '@/client/containers/contacts/ContactsGridInformation';
import ContactsPriceList from '@/client/containers/contacts/ContactsPriceList';
import WrappedContactsCalendar from '@/client/containers/contacts/WrappedContactsCalendar';
import { Params } from '@/client/types/Params';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export default function ContactsPage({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  return (
    <>
      <Header logoStyles="text-secondary-foreground" className="" />

      <main className="flex-auto" role="main">
        <section className="my-12 grid space-y-8 sm:space-y-12 md:my-24 md:grid-cols-2 lg:space-y-0">
          <div role="region" aria-labelledby="charts-section">
            <h2 className="sr-only">{t('contacts.charts.title')}</h2>

            <ContactsChart />

            <ContactsPriceList />
          </div>

          <ErrorBoundary>
            <Suspense fallback={<CalendarSkeleton />}>
              <WrappedContactsCalendar />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section>
          <Title
            title={t('contacts.information.title')}
            subtitle={t('contacts.information.subtitle')}
          />

          <ContactsGridInformation />
        </section>

        <ContactsAccordion />
      </main>
    </>
  );
}
