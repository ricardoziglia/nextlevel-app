'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ToDoSidebarLink({
  todoId,
  children,
}: {
  todoId: number;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const selectedTodoId = path.split('/')[2];

  let cssClasses =
    'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 inline-block';

  if (todoId.toString() === selectedTodoId) {
    cssClasses += ' bg-stone-800 text-stone-200';
  } else {
    cssClasses += ' text-stone-400';
  }

  return (
    <Link href={`/todos/${todoId}`} className={cssClasses}>
      {children}
    </Link>
  );
}
