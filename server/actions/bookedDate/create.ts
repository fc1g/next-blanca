'use server';

import { prisma } from '@/server/db/prisma-client';
import { bookedDateSchema } from '@/server/models/BookedDate';
import { revalidatePath } from 'next/cache';
import { ZodError } from 'zod';

type prevStateProps = {
  message: string;
  details: string;
};

export const create = async (_: prevStateProps, formData: FormData) => {
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
    revalidatePath('/admin/contacts');
    return {
      message: 'Success',
      details: 'New bookedDate was Successfully created',
    };
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      console.error('Validation failed:', err);
      return {
        message: 'Validation failed',
        details: err.errors.map(e => e.message).join(', '),
      };
    }

    console.error('An error occurred while creating bookedDate:', err);
    return {
      message: 'Failed',
      details: 'An error occurred while creating bookedDate',
    };
  }
};
