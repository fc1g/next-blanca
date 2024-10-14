import { Children } from '@/client/types/Children';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from './theme-provider';
import { Toaster } from '@/client/components/ui/toaster';

export default async function Providers({ children }: Children) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        <div className="wrapper">{children}</div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
