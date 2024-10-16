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
    let errorMessage = 'Failed to update bookedDate';
    let details = '';
    let statusCode = 500;

    if (err instanceof ZodError) {
      errorMessage = 'Validation failed. Please provide valid data';
      details = err.errors.map(e => e.message).join(', ');
      statusCode = 400;
    }

    throw new Error(
      JSON.stringify({ message: errorMessage, details, statusCode })
    );
  }
  redirect('/admin/contacts');
};
