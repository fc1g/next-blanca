'use server';

import { surroundingPlaceSchema } from '@/server/models/SurroundingPlace';
import { ZodError } from 'zod';
import { prisma } from '@/server/db/prisma-client';
import { revalidatePath } from 'next/cache';

type prevStateProps = {
  message: string;
  details: string;
};

export const create = async (_: prevStateProps, formData: FormData) => {
  try {
    const imageFile = formData.get('image');

    if (!imageFile || !(imageFile instanceof File)) {
      throw new Error(
        JSON.stringify({
          code: 'custom',
          message: 'Image file is required and must be a valid file',
        })
      );
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

    const [title, subtitle, description, imageAltText, coords] =
      await Promise.all([
        prisma.title.create({
          data: {
            en: parsedData.title.en,
            pl: parsedData.title.pl,
            es: parsedData.title.es,
          },
        }),
        prisma.subtitle.create({
          data: {
            en: parsedData.subtitle.en,
            pl: parsedData.subtitle.pl,
            es: parsedData.subtitle.es,
          },
        }),
        prisma.description.create({
          data: {
            en: parsedData.description.en,
            pl: parsedData.description.pl,
            es: parsedData.description.es,
          },
        }),
        prisma.imageAltText.create({
          data: {
            en: parsedData.imageAltText.en,
            pl: parsedData.imageAltText.pl,
            es: parsedData.imageAltText.es,
          },
        }),
        prisma.coords.create({
          data: {
            lat: parsedData.coords[0],
            lng: parsedData.coords[1],
          },
        }),
      ]);

    const newSurroundingPlace = await prisma.surroundingPlace.create({
      data: {
        image: parsedData.image,
        routeLink: parsedData.routeLink,
        distance: parsedData.distance,
        titleId: title.id,
        subtitleId: subtitle.id,
        descriptionId: description.id,
        imageAltTextId: imageAltText.id,
        coordsId: coords.id,
      },
    });

    console.log(
      `Successfully created surrounding place with ID: ${newSurroundingPlace.id}`
    );
    revalidatePath('/admin/surrounding');

    return {
      message: 'Success',
      details: 'Successfully created surroundingPlace',
    };
  } catch (err) {
    if (err instanceof ZodError) {
      console.error('Validation failed:', err);
      return {
        message: 'Validation failed',
        details: err.errors.map(e => e.message).join(', '),
      };
    }

    console.error('An error occurred while creating surroundingPlace:', err);
    return {
      message: 'Failed',
      details: 'Failed to create surroundingPlace',
    };
  }
};
