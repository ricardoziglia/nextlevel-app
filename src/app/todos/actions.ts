'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { insertTodo, updateTodo } from '@/server/queries';

function isInvalidText(text: FormDataEntryValue | null) {
  return !text || text.toString().trim() === '';
}

export async function createTodoAction(
  prevState: { message: string; todoId: number | undefined },
  formData: FormData
) {
  const todo = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
  };

  if (isInvalidText(todo.title) || isInvalidText(todo.description)) {
    return {
      message: 'Invalid input.',
      todoId: prevState.todoId,
    };
  }

  //await insertUser();
  await insertTodo(todo.title, todo.description);
  revalidatePath('/todos');
  redirect('/todos');
}

export async function updateTodoAction(
  prevState: { message: string; todoId: number | undefined },
  formData: FormData
) {
  const todo = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
  };

  if (isInvalidText(todo.title) || isInvalidText(todo.description)) {
    return {
      message: 'Invalid input.',
      todoId: prevState.todoId,
    };
  }

  await updateTodo(Number(prevState.todoId), todo.title, todo.description);
  revalidatePath('/todos');
  redirect('/todos');
}
