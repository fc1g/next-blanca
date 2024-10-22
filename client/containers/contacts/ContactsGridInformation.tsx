import { useTranslations } from 'next-intl';

export default function ContactsGridInformation() {
  const t = useTranslations('contacts.information');

  const items = [
    { id: 'firstCol', text: t('firstCol') },
    { id: 'secondCol', text: t('secondCol') },
    { id: 'thirdCol', text: t('thirdCol') },
    { id: 'fourthCol', text: t('fourthCol') },
    { id: 'fifthCol', text: t('fifthCol') },
    { id: 'sixthCol', text: t('sixthCol') },
  ];

  return (
    <ul className="mx-auto mb-8 grid max-w-screen-xl md:grid-cols-2 lg:mb-12 lg:grid-cols-3">
      {items.map(({ id, text }) => (
        <li
          key={id}
          className="border-b border-gray-200 bg-primary-foreground p-8 text-center text-secondary-foreground dark:border-gray-600 md:p-12 lg:border-r"
        >
          {text}
        </li>
      ))}
    </ul>
  );
}
