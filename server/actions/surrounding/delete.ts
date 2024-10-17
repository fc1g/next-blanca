'use server';

import { prisma } from '@/server/db/prisma-client';
import { revalidatePath } from 'next/cache';

export const deleteOne = async (id: string) => {
  try {
    const place = await prisma.surroundingPlace.findUnique({
      where: {
        id,
      },
      select: {
        titleId: true,
        subtitleId: true,
        descriptionId: true,
        imageAltTextId: true,
        coordsId: true,
      },
    });

    if (!place) {
      throw new Error(
        JSON.stringify({
          statusCode: 404,
          message: `Surrounding place with ID: ${id} does not exist.`,
        })
      );
    }

    await prisma.$transaction([
      prisma.surroundingPlace.delete({
        where: { id },
      }),
      prisma.title.delete({
        where: { id: place.titleId },
      }),
      prisma.subtitle.delete({
        where: { id: place.subtitleId },
      }),
      prisma.description.delete({
        where: { id: place.descriptionId },
      }),
      prisma.imageAltText.delete({
        where: { id: place.imageAltTextId },
      }),
      prisma.coords.delete({
        where: { id: place.coordsId },
      }),
    ]);

    console.log(`Successfully deleted surrounding place with ID: ${id}`);
    revalidatePath('/admin/surrounding');
  } catch (err) {
    console.error('An error occurred:', err);
    throw new Error(
      'An error occurred while trying to delete the surroundingPlace.'
    );
  }
};
