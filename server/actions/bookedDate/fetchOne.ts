'use server';

import { BookedDate } from '@/client/types/BookedDate';
import { prisma } from '@/server/db/prisma-client';

type PrismaError = {
  code?: string;
} & Error;

export const fetchOne = async (id: string): Promise<BookedDate> => {
  try {
    const bookedDate = await prisma.bookedDate.findUnique({
      where: {
        id,
      },
    });

    if (!bookedDate)
      throw new Error(
        JSON.stringify({
          statusCode: 404,
          message: `Failed to fetch booked date with id: ${id}`,
        })
      );

    return bookedDate;
  } catch (err) {
    if ((err as PrismaError).code === 'P2023') {
      console.error("BookedDate doesn't exist:", err);
      throw new Error(
        JSON.stringify({
          statusCode: 404,
          message: `Booked date with ID: ${id} does not exist.`,
        })
      );
    }

    console.error('An error occurred while fetching bookedDate:', err);
    throw new Error('Failed to fetch booked date');
  }
};
