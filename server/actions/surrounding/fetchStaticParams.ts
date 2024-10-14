'use server';

import { prisma } from '@/server/db/prisma-client';

type StaticParams = {
  id: string;
}[];

export const fetchStaticParams = async (): Promise<StaticParams> => {
  try {
    const placesId = await prisma.surroundingPlace.findMany({
      select: {
        id: true,
      },
    });

    return placesId;
  } catch (err) {
    console.error('Error fetching static params:', err);
    throw new Error('Failed to fetch static params');
  }
};
