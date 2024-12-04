import { notFound } from 'next/navigation';

import { getTodo } from '@/server/queries';

export async function generateMetadata({
  params,
}: {
  params: { todoId: string };
}) {
  const todo = await getTodo(Number(params.todoId));

  if (!todo) {
    notFound();
  }

  return {
    title: todo.title,
    description: todo.description,
  };
}

export default async function todoPage({
  params,
}: {
  params: { todoId: string };
}) {
  const todo = await getTodo(Number(params.todoId));

  if (!todo) {
    notFound();
  }

  return <div>{todo.title}</div>;
}
