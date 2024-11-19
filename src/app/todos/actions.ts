'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { insertTodo /*insertUser*/ } from '@/server/queries';

function isInvalidText(text: FormDataEntryValue | null) {
  return !text || text.toString().trim() === '';
}

export async function createTodo(
  prevState: { message: string },
  formData: FormData
) {
  const todo = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
  };

  if (isInvalidText(todo.title) || isInvalidText(todo.description)) {
    return {
      message: 'Invalid input.',
    };
  }

  //await insertUser();
  await insertTodo(todo.title, todo.description);
  revalidatePath('/todos');
  redirect('/todos');
}
