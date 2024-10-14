import { z } from 'zod';

export const bookedDateSchema = z.object({
  initialDate: z.string().date(),
  deadlineDate: z.string().date(),
});
