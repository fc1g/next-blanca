import { Button } from '@/client/components/ui/button';
import { ThemeProvider } from './theme-provider';

export default function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="flex h-screen w-full items-center justify-center">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
                  404
                </h1>
                <p className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
                  Something&apos;s missing.
                </p>
                <p className="mb-4 text-lg font-light text-muted-foreground">
                  Sorry, we can&apos;t find that page. You&apos;ll find lots to
                  explore on the home page.{' '}
                </p>
                <Button variant="default" size="lg">
                  <a href="/en">Back to Homepage</a>
                </Button>
              </div>
            </div>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
