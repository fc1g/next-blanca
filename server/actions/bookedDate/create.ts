'use server';

import { redirect } from '@/server/libs/i18n/routing';
import { prisma } from '@/server/db/prisma-client';
import { bookedDateSchema } from '@/server/models/BookedDate';
import { ZodError } from 'zod';

export const create = async (formData: FormData) => {
  try {
    const initialDate = formData.get('initialDate') as string;
    const deadlineDate = formData.get('deadlineDate') as string;

    const parsedData = bookedDateSchema.parse({ initialDate, deadlineDate });

    await prisma.bookedDate.create({
      data: parsedData,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      console.error('Validation Error:', err.errors);
      throw new Error('Validation failed. Please provide valid data');
    }

    console.error('Database Error:', err);
    throw new Error('Failed to create bookedDate');
  }

  redirect('/admin/contacts');
};
