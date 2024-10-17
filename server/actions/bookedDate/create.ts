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

    const newBookedDate = await prisma.bookedDate.create({
      data: parsedData,
    });

    console.log(
      `Successfully created booked date with ID: ${newBookedDate.id}`
    );
    redirect('/admin/contacts');
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      console.error('Validation failed:', err);
      throw err;
    }

    console.error('An error occurred while creating bookedDate:', err);
    throw new Error('Failed to create bookedDate');
  }
};
