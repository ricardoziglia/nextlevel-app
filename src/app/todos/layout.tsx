import ToDoSidebar from '../_components/todo/to-do-sidebar';

export default function ToDoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let todos = [
    {
      title: 'A todo',
      id: '',
    },
    {
      title: 'B todo',
      id: '',
    },
    {
      title: 'C todo',
      id: '',
    },
    {
      title: 'D todo',
      id: '',
    },
    {
      title: 'E todo',
      id: '',
    },
  ];

  todos = todos.map((todo) => {
    return {
      ...todo,
      id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
    };
  });

  return (
    <main className="flex gap-8">
      <ToDoSidebar todos={todos} />
      {children}
    </main>
  );
}
