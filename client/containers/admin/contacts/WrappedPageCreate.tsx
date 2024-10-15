'use client';

import SubmitBtn from '@/client/components/SubmitBtn';
import { Input } from '@/client/components/ui/input';
import { create } from '@/server/actions/bookedDate/create';
import { Label } from '@/client/components/ui/label';

type WrappedPageCreate = {
  t: {
    initialDate: string;
    deadlineDate: string;
  };
};

export default function WrappedPageCreate({ t }: WrappedPageCreate) {
  return (
    <form
      className="flex h-96 w-full items-center justify-center"
      action={create}
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
