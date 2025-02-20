import { getTodos } from '@/server/queries';
import ToDoSidebar from '../_components/todo/to-do-sidebar';

export const metadata = {
  title: 'My To-Dos',
  description: 'To-Dos for the next level',
};

export default async function TodoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const todos = await getTodos();

  return (
    <main className="flex gap-8">
      <ToDoSidebar todos={todos} />
      {children}
    </main>
  );
}
