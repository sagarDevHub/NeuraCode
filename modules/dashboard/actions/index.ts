'use server';

import { db } from '@/lib/db';
import { currentUser } from '@/modules/auth/actions';

export const getAllPlaygroundData = async () => {
  const user = await currentUser();
  if (!user?.id) return [];
  try {
    const playgrounds = await db.playground.findMany({
      where: {
        userId: user?.id as string,
      },
      include: {
        user: true,
      },
    });
    return playgrounds;
  } catch (error) {
    console.log(error);
  }
};
