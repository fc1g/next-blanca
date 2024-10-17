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
      throw new Error(
        JSON.stringify({
          message: 'Validation failed. Please provide valid data',
          details: err.errors.map(e => e.message).join(', '),
          statusCode: 400,
        })
      );
    }

    throw new Error(
      JSON.stringify({
        message: 'Failed to create bookedDate',
        details: '',
        statusCode: 500,
      })
    );
  }

  redirect('/admin/contacts');
};
