import { prisma } from '@/server/db/prisma-client';

type PrismaError = {
  code?: string;
} & Error;

export const deleteExpired = async (id: string): Promise<void> => {
  try {
    const deletedDate = await prisma.bookedDate.delete({
      where: {
        id,
      },
    });

    console.log(`Deleted booked date with id: ${deletedDate.id}`);
    return;
  } catch (err) {
    console.error(`Error deleting booked date with id ${id}:`, err);

    if ((err as PrismaError).code === 'P2025') {
      throw new Error(`Booked date with id ${id} does not exist.`);
    }
    throw new Error(
      'An error occurred while trying to delete the booked date.'
    );
  }
};
