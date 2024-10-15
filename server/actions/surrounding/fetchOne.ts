'use server';

import { convertImage } from '@/server/services/convertImageToString';
import { prisma } from '@/server/db/prisma-client';

export const fetchOne = async (id: string) => {
  try {
    const surroundingPlace = await prisma.surroundingPlace.findUnique({
      where: {
        id,
      },
      include: {
        title: {
          select: {
            en: true,
            pl: true,
            es: true,
          },
        },
        subtitle: {
          select: {
            en: true,
            pl: true,
            es: true,
          },
        },
        description: {
          select: {
            en: true,
            pl: true,
            es: true,
          },
        },
        imageAltText: {
          select: {
            en: true,
            pl: true,
            es: true,
          },
        },
        coords: {
          select: {
            lat: true,
            lng: true,
          },
        },
      },
    });

    if (!surroundingPlace)
      throw new Error(`Failed to fetch a place with id: ${id}`);

    const place = {
      id: surroundingPlace.id,
      subtitle: surroundingPlace.subtitle,
      title: surroundingPlace.title,
      description: surroundingPlace.description,
      imageAltText: surroundingPlace.imageAltText,
      image: convertImage(surroundingPlace.image),
      distance: surroundingPlace.distance,
      routeLink: surroundingPlace.routeLink,
      coords: surroundingPlace.coords,
    };

    return place;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch place');
  }
};
