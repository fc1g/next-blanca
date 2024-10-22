import { prisma } from '@/server/libs/prisma-client';

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
    if ((err as PrismaError).code === 'P2025') {
      console.error("BookedDate doesn't exist:", err);
      throw new Error(
        JSON.stringify({
          statusCode: 404,
          message: `Booked date with id ${id} does not exist.`,
        })
      );
    }

    console.error('An error occurred while deleting expired bookedDate:', err);
    throw new Error(
      'An error occurred while trying to delete the booked date.'
    );
  }
};
