import CalendarSkeleton from '@/client/components/skeleton/CalendarSkeleton';
import Title from '@/client/components/Title';
import Header from '@/client/components/ui/header/Header';
import ContactsAccordion from '@/client/containers/contacts/ContactsAccordion';
import ContactsChart from '@/client/containers/contacts/ContactsChart';
import ContactsGridInformation from '@/client/containers/contacts/ContactsGridInformation';
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

      <main className="flex-auto">
        <section className="my-12 grid space-y-8 sm:space-y-12 md:my-24 md:grid-cols-2 lg:space-y-0">
          <div>
            <ContactsChart />

            <section className="mt-2 flex flex-col px-2 lg:mt-12 lg:px-6">
              <ul className="grid items-center space-y-2 text-muted-foreground lg:-mt-8 lg:grid-cols-2">
                <li>
                  <span className="font-semibold text-secondary-foreground">
                    {t('contacts.months.october')}:
                  </span>{' '}
                  2500 euro — {t('contacts.fullPrice')}
                </li>
                <li>
                  <span className="font-semibold text-secondary-foreground">
                    {t('contacts.months.november')}:
                  </span>{' '}
                  2300 euro — {t('contacts.fullPrice')}
                </li>
                <li>
                  <span className="font-semibold text-secondary-foreground">
                    {t('contacts.months.christmasNewYear')}:
                  </span>{' '}
                  2500 euro — {t('contacts.fullPrice')}
                </li>
                <li>
                  <span className="font-semibold text-secondary-foreground">
                    {t('contacts.months.march')}:
                  </span>{' '}
                  2200 euro — {t('contacts.fullPrice')}
                </li>
                <li>
                  <span className="col-span-2 font-semibold text-secondary-foreground">
                    {t('contacts.months.april')}:
                  </span>{' '}
                  2500 euro — {t('contacts.fullPrice')}
                </li>
              </ul>

              <p className="mt-4 font-semibold text-primary">
                {t('contacts.deposit')}
              </p>
            </section>
          </div>

          <Suspense fallback={<CalendarSkeleton />}>
            <WrappedContactsCalendar />
          </Suspense>
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
