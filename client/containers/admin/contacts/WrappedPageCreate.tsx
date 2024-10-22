'use client';

import SubmitBtn from '@/client/components/SubmitBtn';
import { Input } from '@/client/components/ui/input';
import { create } from '@/server/actions/bookedDate/create';
import { Label } from '@/client/components/ui/label';
import { useFormState } from 'react-dom';
import { useToast } from '@/client/hooks/use-toast';
import { useEffect } from 'react';
import { useRouter } from '@/server/libs/i18n/routing';
import { ToastAction } from '@/client/components/ui/toast';
import { FORM_TOAST_DURATION } from '@/client/utils';

type WrappedPageCreate = {
  t: {
    initialDate: string;
    deadlineDate: string;
  };
};

export default function WrappedPageCreate({ t }: WrappedPageCreate) {
  const [error, formAction] = useFormState(create, {
    message: '',
    details: '',
  });
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!error.details || !error.message) return;

    toast({
      title: error.message,
      description: error.details,
      variant: error.message === 'Success' ? 'default' : 'destructive',
      duration: FORM_TOAST_DURATION,
      action:
        error.message === 'Success' ? (
          <ToastAction
            onClick={() => router.back()}
            altText="Return to contacts page"
          >
            Return
          </ToastAction>
        ) : undefined,
    });
  }, [toast, error, router]);

  return (
    <form
      className="flex h-96 w-full items-center justify-center"
      action={formAction}
    >
      <div className="mt-4 flex items-end justify-center space-x-6">
        <fieldset>
          <Label htmlFor="initialDate">{t.initialDate}</Label>
          <Input
            id="initialDate"
            name="initialDate"
            type="date"
            placeholder={t.initialDate}
            required
          />
        </fieldset>

        <fieldset>
          <Label htmlFor="deadlineDate">{t.deadlineDate}</Label>
          <Input
            id="deadlineDate"
            name="deadlineDate"
            type="date"
            placeholder={t.deadlineDate}
            required
          />
        </fieldset>

        <SubmitBtn />
      </div>
    </form>
  );
}
