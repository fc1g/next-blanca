'use client';

import SubmitBtn from '@/client/components/SubmitBtn';
import { Input } from '@/client/components/ui/input';
import { BookedDate } from '@/client/types/BookedDate';
import { update } from '@/server/actions/bookedDate/update';
import { useEffect, useState } from 'react';
import { Label } from '@/client/components/ui/label';
import { useFormState } from 'react-dom';
import { ZodError } from 'zod';
import { ToastAction } from '@/client/components/ui/toast';
import { useRouter } from '@/server/libs/i18n/routing';
import { useToast } from '@/client/hooks/use-toast';

type WrappedPageUpdate = {
  bookedDate: BookedDate;
  t: {
    initialDate: string;
    deadlineDate: string;
  };
};

export default function WrappedPageUpdate({
  bookedDate,
  t,
}: WrappedPageUpdate) {
  const updateBookedDate = async (
    _: {
      message: string;
      details: string;
    },
    formData: FormData
  ) => {
    const id = bookedDate.id;

    try {
      await update(id, formData);

      return {
        message: 'Success',
        details: 'Successfully updated bookedDate',
      };
    } catch (err) {
      if (err instanceof ZodError) {
        console.error('Validation failed:', err);
        return {
          message: 'Validation failed',
          details: err.errors.map(e => e.message).join(', '),
        };
      }

      console.error('An error occurred while updating bookedDate:', err);
      return {
        message: 'Failed',
        details: 'Failed to update bookedDate',
      };
    }
  };

  const [error, formAction] = useFormState(updateBookedDate, {
    message: '',
    details: '',
  });
  const { toast } = useToast();
  const router = useRouter();
  const [initialDate, setInitialDate] = useState(bookedDate.initialDate);
  const [deadlineDate, setDeadlineDate] = useState(bookedDate.deadlineDate);

  useEffect(() => {
    if (!error.details || !error.message) return;

    toast({
      title: error.message,
      description: error.details,
      variant: error.message === 'Success' ? 'default' : 'destructive',
      duration: 10000,
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
      action={formAction}
      className="flex h-[60vh] w-full flex-col justify-center"
    >
      <div className="mt-4 flex items-end justify-center space-x-6">
        <fieldset>
          <Label htmlFor="initialDate">{t.initialDate}</Label>
          <Input
            id="initialDate"
            name="initialDate"
            value={initialDate}
            onChange={e => setInitialDate(e.target.value)}
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
            value={deadlineDate}
            onChange={e => setDeadlineDate(e.target.value)}
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
