'use server';

import { redirect } from '@/server/libs/i18n/routing';
import { prisma } from '@/server/db/prisma-client';
import { bookedDateSchema } from '@/server/models/BookedDate';
import { ZodError } from 'zod';

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
    if (err instanceof ZodError) {
      console.error('Validation failed:', err);
      throw err;
    }

    console.error('An error occurred while updating bookedDate:', err);
    throw new Error('Failed to update bookedDate');
  }
  redirect('/admin/contacts');
};
