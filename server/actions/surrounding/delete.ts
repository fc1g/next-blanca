'use server';

import { prisma } from '@/server/db/prisma-client';

type PrismaError = {
  code?: string;
} & Error;

export const deleteOne = async (id: string) => {
  try {
    await prisma.surroundingPlace.delete({
      where: {
        id,
      },
    });

    console.log(`Successfully deleted surrounding place with ID: ${id}`);
    return;
  } catch (err) {
    console.error(`Error deleting surrounding place with ID: ${id}`, err);

    if ((err as PrismaError).code === 'P2025') {
      throw new Error(`Surrounding place with ID: ${id} does not exist.`);
    }

    throw new Error(
      'An error occurred while trying to delete the surrounding place.'
    );
  }
};
