'use server';

import { redirect } from '@/server/libs/i18n/routing';
import { prisma } from '@/server/db/prisma-client';
import { bookedDateSchema } from '@/server/models/BookedDate';

export const update = async (id: string, formData: FormData) => {
  try {
    const initialDate = formData.get('initialDate') as string;
    const deadlineDate = formData.get('deadlineDate') as string;

    const parsedData = bookedDateSchema.parse({
      initialDate,
      deadlineDate,
    });

    await prisma.bookedDate.update({
      where: {
        id,
      },
      data: {
        initialDate: parsedData.initialDate,
        deadlineDate: parsedData.deadlineDate,
      },
    });
  } catch (err) {
    console.error('Failed to update booked date:', err);
    throw new Error('An error occurred while updating the booked date.');
  }
  redirect('/admin/calendar');
};
