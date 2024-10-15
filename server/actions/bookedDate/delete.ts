'use server';

import { prisma } from '@/server/db/prisma-client';
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
    console.error(`Error deleting booked date with ID: ${id}`, err);

    if ((err as PrismaError).code === 'P2025') {
      throw new Error(`Booked date with ID: ${id} does not exist.`);
    }

    throw new Error(
      'An error occurred while trying to delete the booked date.'
    );
  }
};
