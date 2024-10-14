'use server';

import { convertImage } from '@/server/services/convertImageToString';
import { SurroundingPlaces } from '@/client/types/SurroundingPlace';
import { prisma } from '@/server/db/prisma-client';

export const fetchMany = async (searchParams?: URLSearchParams) => {
  const sort = searchParams?.get('sort') || '';
  const page =
    Number(searchParams?.get('page')) > 0
      ? Number(searchParams?.get('page'))
      : 1;
  const take =
    Number(searchParams?.get('limit')) > 0
      ? Number(searchParams?.get('limit'))
      : 6;
  const skip = (page - 1) * take;

  try {
    const [surroundingPlaces, totalResults] = await Promise.all([
      prisma.surroundingPlace.findMany({
        select: {
          id: true,
          title: true,
          subtitle: true,
          imageAltText: true,
          image: true,
        },
        skip,
        take,
        orderBy: sort
          ? {
              distance: sort === 'asc' ? 'asc' : 'desc',
            }
          : undefined,
      }),
      prisma.surroundingPlace.count(),
    ]);

    const places = surroundingPlaces.map(place => ({
      ...place,
      image: convertImage(place.image),
    })) as SurroundingPlaces[];

    return { places, totalResults };
  } catch (err) {
    console.error('Error fetching places:', err);
    throw new Error('Failed to fetch places');
  }
};
