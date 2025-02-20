import LinkButton from '@/components/UI/LinkButton';
import ToDoSidebarLink from './to-do-sidebar-link';
import { todos } from '@/server/db/schema';

type TodoModel = typeof todos.$inferSelect;

export default function ToDoSidebar({ todos }: { todos: Array<TodoModel> }) {
  return (
    <aside className="w-1/3 px-8 py-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your To-Dos
      </h2>
      <div>
        <LinkButton href="/todos/add">+ Add To-Do</LinkButton>
      </div>
      <ul className="mt-8 ">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <ToDoSidebarLink todoId={todo.id}>{todo.title}</ToDoSidebarLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
