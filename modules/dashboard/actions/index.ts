'use server';

import { db } from '@/lib/db';
import { currentUser } from '@/modules/auth/actions';
import { revalidatePath } from 'next/cache';

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
        starMarks: {
          where: {
            userId: user?.id,
          },
          select: {
            isMarked: true,
          },
        },
      },
    });
    return playgrounds;
  } catch (error) {
    console.log(error);
  }
};

export const createPlayground = async (data: {
  title: string;
  template: 'REACT' | 'NEXTJS' | 'EXPRESS' | 'VUE' | 'HONO' | 'ANGULAR';
  description?: string;
}) => {
  const user = await currentUser();

  const { template, title, description } = data;

  try {
    const playground = await db.playground.create({
      data: {
        title: title,
        description: description,
        template: template,
        userId: user?.id!,
      },
    });
    return playground;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProjectById = async (id: string) => {
  try {
    await db.playground.delete({
      where: {
        id,
      },
    });
    revalidatePath('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const editProjectById = async (id: string, data: { title: string; description: string }) => {
  try {
    await db.playground.update({
      where: {
        id,
      },
      data: data,
    });
    revalidatePath('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const duplicateProjectById = async (id: string) => {
  try {
    const originalPlayground = await db.playground.findUnique({
      where: {
        id,
        // todo : add template file
      },
    });
    if (!originalPlayground) throw new Error(`Original playground not found!`);

    const duplicatedPlayground = await db.playground.create({
      data: {
        title: `${originalPlayground.title} (Copy)`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: originalPlayground.userId,

        // todo: add template files
      },
    });
    revalidatePath('/dashboard');
    return duplicatedPlayground;
  } catch (error) {
    console.log(`Error duplicating project`, error);
  }
};

export const toggleStarMarked = async (playgroundId: string, isChecked: boolean) => {
  const user = await currentUser();
  const userId = user?.id;

  if (!userId) throw new Error(`User id is Required`);
  try {
    if (isChecked) {
      await db.starMark.create({
        data: {
          userId: userId!,
          playgroundId,
          isMarked: isChecked,
        },
      });
    } else {
      await db.starMark.delete({
        where: {
          userId_playgroundId: {
            userId,
            playgroundId: playgroundId,
          },
        },
      });
    }
    revalidatePath('/dashboard');
    return { success: true, isMarked: isChecked };
  } catch (error) {
    console.error(`Error updating problem`, error);
    return { success: true, error: `Failed to update problem` };
  }
};
