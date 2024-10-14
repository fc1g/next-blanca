'use client';

import { Calendar } from '@/client/components/ui/calendar';
import { BookedDate } from '@/client/types/BookedDate';
import { Locale } from '@/client/types/Locale';
import { enUS, pl, es } from 'date-fns/locale';
import { useLocale } from 'next-intl';

const locales = {
  en: enUS,
  pl: pl,
  es: es,
};

export default function ContactsCalendar({ data }: { data: BookedDate[] }) {
  const localeActive = useLocale() as Locale;

  const bookedDates = data.map(item => ({
    from: new Date(item.initialDate),
    to: new Date(item.deadlineDate),
  }));

  return (
    <div className="flex justify-center">
      <Calendar
        className="rounded-xl border"
        locale={locales[localeActive]}
        selected={bookedDates}
      />
    </div>
  );
}
