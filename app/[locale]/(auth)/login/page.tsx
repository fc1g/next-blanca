'use client';

import { Button } from '@/client/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/client/components/ui/form';
import { Input } from '@/client/components/ui/input';
import { Link, useRouter } from '@/server/libs/i18n/routing';
import { loginUserSchema } from '@/server/schemas/User';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export default function Login() {
  const t = useTranslations('auth');
  const router = useRouter();
  const form = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof loginUserSchema>
  > = async userData => {
    const res = await fetch(`${process.env.AUTH_URL}/api/auth/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      method: 'POST',
    });

    const data = await res.json();

    if (data.status === 'fail') {
      form.setError('root', { message: data.message });
      return;
    }

    router.back();
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <div className="w-96 space-y-4 rounded-lg border bg-black p-6 shadow sm:p-8 md:space-y-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary-foreground md:text-2xl">
          {t('login.title')}
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email.title')}</FormLabel>
                  <FormControl>
                    <Input
                      className="block w-full border bg-primary-foreground p-2.5"
                      placeholder={t('email.title')}
                      type="email"
                      required
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.email && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('password.title')}</FormLabel>
                  <FormControl>
                    <Input
                      className="block w-full border bg-primary-foreground p-2.5"
                      placeholder={t('password.title')}
                      type="password"
                      required
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.password && <FormMessage />}
                </FormItem>
              )}
            />

            {form.formState.errors.root && (
              <p>{form.formState.errors.root.message}</p>
            )}

            <Button
              disabled={form.formState.isSubmitting}
              className="w-full"
              type="submit"
            >
              {form.formState.isSubmitting
                ? t('submitting')
                : t('loginBtnText')}
            </Button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {t('login.signup.question')}{' '}
              <Link
                href="/signup"
                className="font-medium text-primary hover:underline"
              >
                {t('login.signup.linkText')}
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
