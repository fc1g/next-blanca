'use server';

import { prisma } from '@/server/libs/prisma-client';
import {
  imageSchema,
  surroundingPlaceSchemaWithoutImage,
} from '@/server/schemas/SurroundingPlace';
import { revalidatePath } from 'next/cache';

type DataLng = {
  en: string;
  pl: string;
  es: string;
};

export const update = async (id: string, formData: FormData) => {
  const parsedData = surroundingPlaceSchemaWithoutImage.parse({
    title: {
      en: formData.get('titleEn') as string,
      pl: formData.get('titlePl') as string,
      es: formData.get('titleEs') as string,
    },
    subtitle: {
      en: formData.get('subtitleEn') as string,
      pl: formData.get('subtitlePl') as string,
      es: formData.get('subtitleEs') as string,
    },
    description: {
      en: formData.get('descriptionEn') as string,
      pl: formData.get('descriptionPl') as string,
      es: formData.get('descriptionEs') as string,
    },
    imageAltText: {
      en: formData.get('imageAltTextEn') as string,
      pl: formData.get('imageAltTextPl') as string,
      es: formData.get('imageAltTextEs') as string,
    },
    routeLink: formData.get('routeLink') as string,
    distance: Number(formData.get('distance')),
    coords: [Number(formData.get('lat')), Number(formData.get('lng'))],
  });

  const existingPlace = await prisma.surroundingPlace.findUnique({
    where: { id },
    select: {
      title: true,
      subtitle: true,
      description: true,
      image: true,
      imageAltText: true,
      routeLink: true,
      distance: true,
      coords: true,
    },
  });

  if (!existingPlace) {
    throw new Error(
      JSON.stringify({
        statusCode: 404,
        message: `Surrounding place with id ${id} not found.`,
      })
    );
  }

  const hasChanged = (key: keyof typeof parsedData, existingValue: DataLng) => {
    return JSON.stringify(parsedData[key]) !== JSON.stringify(existingValue);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatePromises: Promise<any>[] = [];

  const imageFile = formData.get('image') as File | null;

  if (imageFile && imageFile instanceof File && imageFile.size > 0) {
    const buffer = await imageFile.arrayBuffer();
    const imageBuffer = Buffer.from(buffer);
    imageSchema.parse(imageBuffer);
    updatePromises.push(
      prisma.surroundingPlace.update({
        where: {
          id,
        },
        data: {
          image: imageBuffer,
        },
      })
    );
  }

  if (hasChanged('title', existingPlace.title)) {
    updatePromises.push(
      prisma.surroundingPlace.update({
        where: { id },
        data: { title: { update: parsedData.title } },
      })
    );
  }

  if (hasChanged('subtitle', existingPlace.subtitle)) {
    updatePromises.push(
      prisma.surroundingPlace.update({
        where: { id },
        data: { subtitle: { update: parsedData.subtitle } },
      })
    );
  }

  if (hasChanged('description', existingPlace.description)) {
    updatePromises.push(
      prisma.surroundingPlace.update({
        where: { id },
        data: { description: { update: parsedData.description } },
      })
    );
  }

  if (hasChanged('imageAltText', existingPlace.imageAltText)) {
    updatePromises.push(
      prisma.surroundingPlace.update({
        where: { id },
        data: { imageAltText: { update: parsedData.imageAltText } },
      })
    );
  }

  if (
    parsedData.coords[0] !== existingPlace.coords.lat ||
    parsedData.coords[1] !== existingPlace.coords.lng
  ) {
    updatePromises.push(
      prisma.surroundingPlace.update({
        where: { id },
        data: {
          coords: {
            update: { lat: parsedData.coords[0], lng: parsedData.coords[1] },
          },
        },
      })
    );
  }

  if (parsedData.routeLink !== existingPlace.routeLink) {
    updatePromises.push(
      prisma.surroundingPlace.update({
        where: { id },
        data: { routeLink: parsedData.routeLink },
      })
    );
  }

  if (parsedData.distance !== existingPlace.distance) {
    updatePromises.push(
      prisma.surroundingPlace.update({
        where: { id },
        data: { distance: parsedData.distance },
      })
    );
  }

  if (updatePromises.length > 0) {
    await Promise.all(updatePromises);
  }

  revalidatePath('/admin/surrounding');
  revalidatePath(`/surrounding/${id}`);
};
