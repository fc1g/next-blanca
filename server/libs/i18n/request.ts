import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { Locale } from '@/client/types/Locale';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`@/messages/${locale}.ts`)).default,
  };
});
