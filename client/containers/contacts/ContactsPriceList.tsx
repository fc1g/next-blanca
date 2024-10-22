import { useTranslations } from 'next-intl';

export default function ContactsPriceList() {
  const t = useTranslations();

  return (
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

      <p className="mt-4 font-semibold text-primary">{t('contacts.deposit')}</p>
    </section>
  );
}
