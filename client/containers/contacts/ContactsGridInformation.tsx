import { useTranslations } from 'next-intl';

export default function ContactsGridInformation() {
  const t = useTranslations('contacts.information');

  return (
    <ul className="mx-auto mb-8 grid max-w-screen-xl md:grid-cols-2 lg:mb-12 lg:grid-cols-3">
      <li className="border-b border-gray-200 bg-primary-foreground p-8 text-center text-secondary-foreground dark:border-gray-600 md:p-12 lg:border-r">
        {t('firstCol')}
      </li>
      <li className="border-b border-gray-200 bg-primary-foreground p-8 text-center text-secondary-foreground dark:border-gray-600 md:p-12 lg:border-r">
        {t('secondCol')}
      </li>
      <li className="border-b border-gray-200 bg-primary-foreground p-8 text-center text-secondary-foreground dark:border-gray-600 md:p-12 lg:border-r">
        {t('thirdCol')}
      </li>
      <li className="border-b border-gray-200 bg-primary-foreground p-8 text-center text-secondary-foreground dark:border-gray-600 md:p-12 lg:border-r">
        {t('fourthCol')}
      </li>
      <li className="border-b border-gray-200 bg-primary-foreground p-8 text-center text-secondary-foreground dark:border-gray-600 md:p-12 lg:border-r">
        {t('fifthCol')}
      </li>
      <li className="border-b border-gray-200 bg-primary-foreground p-8 text-center text-secondary-foreground dark:border-gray-600 md:p-12 lg:border-r">
        {t('sixthCol')}
      </li>
    </ul>
  );
}
