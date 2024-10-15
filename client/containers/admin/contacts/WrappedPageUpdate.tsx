'use client';

import SubmitBtn from '@/client/components/SubmitBtn';
import { Input } from '@/client/components/ui/input';
import { BookedDate } from '@/client/types/BookedDate';
import { update } from '@/server/actions/bookedDate/update';
import { useState } from 'react';
import { Label } from '@/client/components/ui/label';

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
  const [initialDate, setInitialDate] = useState(bookedDate.initialDate);
  const [deadlineDate, setDeadlineDate] = useState(bookedDate.deadlineDate);

  const formAction = async (formData: FormData) => {
    const id = bookedDate.id;

    await update(id, formData);
  };

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
