//import Button from '@/components/UI/Button';
import LinkButton from '@/components/UI/LinkButton';

export default function ToDoSidebar({
  todos,
}: {
  todos: Array<{ id: number; title: string }>;
}) {
  return (
    <aside className="w-1/3 px-8 py-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your To-Dos
      </h2>
      <div>
        <LinkButton href="/todos/add">+ Add To-Do</LinkButton>
      </div>
      <ul className="mt-8">
        {todos.map((todo) => {
          const cssClasses =
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
  );
}
