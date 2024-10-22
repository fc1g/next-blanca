'use server';

import { BookedDate } from '@/client/types/BookedDate';
import { prisma } from "@/server/libs/prisma-client";
import { deleteExpired } from './deleteExpired';

export const fetchManyWithParams = async (
  searchParams: URLSearchParams
): Promise<{
  bookedDates: BookedDate[];
  totalResults: number;
}> => {
  try {
    const page =
      Number(searchParams?.get('page')) > 0
        ? Number(searchParams?.get('page'))
        : 1;
    const take =
      Number(searchParams?.get('limit')) > 0
        ? Number(searchParams?.get('limit'))
        : 6;
    const skip = (page - 1) * take;

    const bookedDates = await prisma.bookedDate.findMany({
      skip,
      take,
    });

    const delitionPromise = bookedDates
      .filter(({ deadlineDate }) => new Date(deadlineDate) < new Date())
      .map(({ id }) => deleteExpired(id));

    await Promise.all(delitionPromise);

    const totalResults = await prisma.bookedDate.count();

    return { bookedDates, totalResults };
  } catch (err) {
    console.error('Error fetching booked dates:', err);
    throw new Error('Failed to fetch bookedDates');
  }
};
