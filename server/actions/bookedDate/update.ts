'use server';

import { prisma } from '@/server/libs/prisma-client';
import { bookedDateSchema } from '@/server/schemas/BookedDate';
import { revalidatePath } from 'next/cache';

export const update = async (id: string, formData: FormData) => {
  const initialDate = formData.get('initialDate') as string;
  const deadlineDate = formData.get('deadlineDate') as string;

  const parsedData = bookedDateSchema.parse({
    initialDate,
    deadlineDate,
  });

  await prisma.bookedDate.update({
    where: {
      id,
    },
    data: {
      initialDate: parsedData.initialDate,
      deadlineDate: parsedData.deadlineDate,
    },
  });
  revalidatePath('/admin/contacts');
};
