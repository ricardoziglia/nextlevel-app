import { notFound } from 'next/navigation';

import { getTodo } from '@/server/queries';
import ToDoForm from '@/app/_components/todo/to-do-form';

export async function generateMetadata({
  params,
}: {
  params: { todoId: string };
}) {
  const { todoId } = params;
  let todo;

  try {
    todo = await getTodo(Number(todoId));
  } catch (e) {
    console.log('Generate metadata', (e as Error).message);
    notFound();
  }

  if (!todo) {
    console.log('Generate metadata not found');
    notFound();
  }

  return {
    title: todo.title,
    description: todo.description,
  };
}

export default async function TodoPage({
  params,
}: {
  params: { todoId: string };
}) {
  const { todoId } = params;
  let todo;

  try {
    todo = await getTodo(Number(todoId));
  } catch (e) {
    console.log('ToDo Page', (e as Error).message);
    notFound();
  }

  if (!todo) {
    console.log('ToDo page not found');
    notFound();
  }

  return <ToDoForm todo={todo} />;
}
