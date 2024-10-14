'use server';

import { convertImage } from '@/server/services/convertImageToString';
import { prisma } from '@/server/db/prisma-client';

export const fetchOne = async (id: string) => {
  try {
    const surroundingPlace = await prisma.surroundingPlace.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        subtitle: true,
        description: true,
        imageAltText: true,
        image: true,
        distance: true,
        coords: true,
        routeLink: true,
      },
    });

    if (!surroundingPlace)
      throw new Error(`Failed to fetch a place with id: ${id}`);

    return { ...surroundingPlace, image: convertImage(surroundingPlace.image) };
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch place');
  }
};
