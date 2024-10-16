import { z } from 'zod';

export const bookedDateSchema = z
  .object({
    initialDate: z.string().date(),
    deadlineDate: z.string().date(),
  })
  .refine(date => new Date(date.initialDate) < new Date(date.deadlineDate), {
    message: 'initial date must be earlier than deadline date',
    path: ['deadlineDate'],
  });
