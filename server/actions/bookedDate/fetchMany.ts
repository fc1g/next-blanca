'use server';

import { BookedDate } from '@/client/types/BookedDate';
import { prisma } from '@/server/libs/prisma-client';
import { deleteExpired } from './deleteExpired';

export const fetchMany = async (): Promise<{
  bookedDates: BookedDate[];
  totalResults: number;
}> => {
  try {
    const bookedDates = await prisma.bookedDate.findMany();

    const delitionPromise = bookedDates
      .filter(({ deadlineDate }) => new Date(deadlineDate) < new Date())
      .map(({ id }) => deleteExpired(id));

    await Promise.all(delitionPromise);

    const totalResults = await prisma.bookedDate.count();

    return { bookedDates, totalResults };
  } catch (err) {
    console.error('Error fetching booked dates:', err);
    throw new Error('Failed to fetch booked dates.');
  }
};
