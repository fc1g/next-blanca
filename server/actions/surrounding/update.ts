'use server';

import { redirect } from '@/server/libs/i18n/routing';
import { prisma } from '@/server/db/prisma-client';
import { surroundingPlaceSchema } from '@/server/models/SurroundingPlace';

export const update = async (id: string, formData: FormData) => {
  try {
    const imageFile = formData.get('image');

    if (!imageFile || !(imageFile instanceof File)) {
      throw new Error('Image file is required and must be a valid file.');
    }

    const buffer = await imageFile.arrayBuffer();
    const imageBuffer = Buffer.from(buffer);

    const parsedData = surroundingPlaceSchema.parse({
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
      image: imageBuffer,
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
      include: {
        title: true,
        subtitle: true,
        description: true,
        imageAltText: true,
        coords: true,
      },
    });

    if (!existingPlace) {
      throw new Error(`Surrounding place with id ${id} not found.`);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updates: any = {};

    if (
      parsedData.title.en !== existingPlace.title.en ||
      parsedData.title.pl !== existingPlace.title.pl ||
      parsedData.title.es !== existingPlace.title.es
    ) {
      updates.title = {
        update: {
          en: parsedData.title.en,
          pl: parsedData.title.pl,
          es: parsedData.title.es,
        },
      };
    }

    if (
      parsedData.subtitle.en !== existingPlace.subtitle.en ||
      parsedData.subtitle.pl !== existingPlace.subtitle.pl ||
      parsedData.subtitle.es !== existingPlace.subtitle.es
    ) {
      updates.subtitle = {
        update: {
          en: parsedData.subtitle.en,
          pl: parsedData.subtitle.pl,
          es: parsedData.subtitle.es,
        },
      };
    }

    if (
      parsedData.description.en !== existingPlace.description.en ||
      parsedData.description.pl !== existingPlace.description.pl ||
      parsedData.description.es !== existingPlace.description.es
    ) {
      updates.description = {
        update: {
          en: parsedData.description.en,
          pl: parsedData.description.pl,
          es: parsedData.description.es,
        },
      };
    }

    if (
      parsedData.imageAltText.en !== existingPlace.imageAltText.en ||
      parsedData.imageAltText.pl !== existingPlace.imageAltText.pl ||
      parsedData.imageAltText.es !== existingPlace.imageAltText.es
    ) {
      updates.imageAltText = {
        update: {
          en: parsedData.imageAltText.en,
          pl: parsedData.imageAltText.pl,
          es: parsedData.imageAltText.es,
        },
      };
    }

    if (
      parsedData.coords[0] !== existingPlace.coords.lat ||
      parsedData.coords[1] !== existingPlace.coords.lng
    ) {
      updates.coords = {
        update: {
          lat: parsedData.coords[0],
          lng: parsedData.coords[1],
        },
      };
    }

    if (parsedData.image !== existingPlace.image) {
      updates.image = parsedData.image;
    }

    if (parsedData.routeLink !== existingPlace.routeLink) {
      updates.routeLink = parsedData.routeLink;
    }

    if (parsedData.distance !== existingPlace.distance) {
      updates.distance = parsedData.distance;
    }

    await prisma.surroundingPlace.update({
      where: { id },
      data: {
        ...updates,
      },
    });
  } catch (err) {
    console.error('Failed to update surrounding place:', err);
    throw new Error('An error occurred while updating the surrounding place.');
  }
  redirect('/admin/surrounding');
};
