'use server';

import { BookedDate } from '@/client/types/BookedDate';
import { prisma } from '@/server/db/prisma-client';

export const fetchOne = async (id: string): Promise<BookedDate> => {
  try {
    const bookedDate = await prisma.bookedDate.findUnique({
      where: {
        id,
      },
    });

    if (!bookedDate)
      throw new Error(`Failed to fetch booked date with id: ${id}. (404)`);

    return bookedDate;
  } catch (err) {
    console.error(err);

    throw new Error('Failed to fetch booked date');
  }
};
