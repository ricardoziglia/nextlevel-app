import Button from '@/components/UI/Button';

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
    <div className="flex">
      <aside className="w-1/3 px-8 py-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your ToDos
        </h2>
        <div>
          <Button>+ Add To-Do</Button>
        </div>
        <ul className="mt-8">
          {todos.map((todo) => {
            let cssClasses =
              'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

            // if (todo.id === selectedProjectId) {
            //   cssClasses += ' bg-stone-800 text-stone-200';
            // } else {
            //   cssClasses += ' text-stone-400';
            // }

            return (
              <li key={todo.id}>
                <button className={cssClasses}>{todo.title}</button>
              </li>
            );
          })}
        </ul>
      </aside>

      {children}
    </div>
  );
}
