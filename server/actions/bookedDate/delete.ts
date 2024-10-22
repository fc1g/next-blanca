'use server';

import { prisma } from '@/server/libs/prisma-client';
import { revalidatePath } from 'next/cache';

type PrismaError = {
  code?: string;
} & Error;

export const deleteOne = async (id: string) => {
  try {
    await prisma.bookedDate.delete({
      where: {
        id,
      },
    });

    console.log(`Successfully deleted booked date with ID: ${id}`);
    revalidatePath('/admin/contacts');
  } catch (err) {
    if (
      (err as PrismaError).code === 'P2025' ||
      (err as PrismaError).code === 'P2023'
    ) {
      console.error("BookedDate doesn't exist:", err);
      throw new Error(
        JSON.stringify({
          statusCode: 404,
          message: `Booked date with ID: ${id} does not exist.`,
        })
      );
    }

    console.error('An error occurred while deleting bookedDate:', err);
    throw new Error(
      'An error occurred while trying to delete the booked date.'
    );
  }
};
