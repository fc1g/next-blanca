import { z } from 'zod';
import { wordCount } from '../services/wordCount';

const titleSchema = z.object({
  en: z
    .string()
    .min(5, 'The title should be at least 5 characters long.')
    .max(30, 'The title should not exceed 30 characters.')
    .trim(),
  pl: z
    .string()
    .min(5, 'The title should be at least 5 characters long.')
    .max(30, 'The title should not exceed 30 characters.')
    .trim(),
  es: z
    .string()
    .min(5, 'The title should be at least 5 characters long.')
    .max(30, 'The title should not exceed 30 characters.')
    .trim(),
});

const subtitleSchema = z.object({
  en: z
    .string()
    .min(20, 'The subtitle should be at least 20 characters long.')
    .max(80, 'The subtitle should not exceed 80 characters.'),
  pl: z
    .string()
    .min(20, 'The subtitle should be at least 20 characters long.')
    .max(80, 'The subtitle should not exceed 80 characters.'),
  es: z
    .string()
    .min(20, 'The subtitle should be at least 20 characters long.')
    .max(80, 'The subtitle should not exceed 80 characters.'),
});

const descriptionSchema = z.object({
  en: z
    .string()
    .min(20, 'The description should be at least 20 characters long.')
    .trim()
    .refine(desc => wordCount(desc) <= 75, {
      message:
        'The description in English should contain no more than 75 words.',
    }),
  pl: z
    .string()
    .min(20, 'The description should be at least 20 characters long.')
    .trim()
    .refine(desc => wordCount(desc) <= 75, {
      message:
        'The description in Polish should contain no more than 75 words.',
    }),
  es: z
    .string()
    .min(20, 'The description should be at least 20 characters long.')
    .trim()
    .refine(desc => wordCount(desc) <= 75, {
      message:
        'The description in Spanish should contain no more than 75 words.',
    }),
});

export const imageSchema = z.instanceof(Buffer).refine(
  buffer => {
    const maxSize = 1 * 1024 * 1024;
    return buffer.length <= maxSize;
  },
  {
    message: 'The image must not exceed 1 MB.',
  }
);

const imageAltTextSchema = z.object({
  en: z
    .string()
    .max(100, 'Alternative text in English should not exceed 100 characters.'),
  pl: z
    .string()
    .max(
      100,
      'The alternative text in Polish should not exceed 100 characters.'
    ),
  es: z
    .string()
    .max(
      100,
      'The alternative text in Spanish should not exceed 100 characters.'
    ),
});

const routeLinkSchema = z
  .string()
  .url('The URL must be valid.')
  .regex(
    /^https:\/\/maps\.app\.goo\.gl\/[A-Za-z0-9]+$/,
    'The link should be in the format of a Google Maps route.'
  );

const distanceSchema = z
  .number()
  .min(0, 'The distance cannot be negative.')
  .max(100000, 'The distance should not exceed 100 km.');

const coordsSchema = z.tuple([
  z
    .number()
    .min(-90, 'The latitude should be at least -90.')
    .max(90, 'The latitude should not exceed 90.'),
  z
    .number()
    .min(-180, 'The longitude should be at least -180.')
    .max(180, 'The longitude should not exceed 180.'),
]);

export const surroundingPlaceSchema = z.object({
  title: titleSchema,
  subtitle: subtitleSchema,
  description: descriptionSchema,
  image: imageSchema,
  imageAltText: imageAltTextSchema,
  routeLink: routeLinkSchema,
  distance: distanceSchema,
  coords: coordsSchema,
});

export const surroundingPlaceSchemaWithoutImage = z.object({
  title: titleSchema,
  subtitle: subtitleSchema,
  description: descriptionSchema,
  imageAltText: imageAltTextSchema,
  routeLink: routeLinkSchema,
  distance: distanceSchema,
  coords: coordsSchema,
});
