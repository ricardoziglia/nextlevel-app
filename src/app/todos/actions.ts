'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { insertUser } from '@/server/queries';

function isInvalidText(text: FormDataEntryValue | null) {
  return !text || text.toString().trim() === '';
}

export async function createTodo(
  prevState: { message: string },
  formData: FormData
) {
  const todo = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(todo.title) ||
    isInvalidText(todo.summary) ||
    isInvalidText(todo.instructions) ||
    isInvalidText(todo.creator) ||
    isInvalidText(todo.creator_email)
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await insertUser();
  revalidatePath('/todos');
  redirect('/todos');
}
