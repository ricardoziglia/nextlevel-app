'use client';

import { useActionState } from 'react';

import Input from '@/components/UI/Input';
import ToDoSaveButton from '../../_components/todo/to-do-save-button';
import ToDoCancelLink from '../../_components/todo/to-do-cancel-link';
import { todos } from '@/server/db/schema';
import { createTodoAction, updateTodoAction } from '@/app/todos/actions';

export default function ToDoForm({
  todo,
}: {
  todo?: typeof todos.$inferInsert;
}) {
  const [state, formAction] = useActionState(
    todo ? updateTodoAction : createTodoAction,
    { message: '', todoId: todo?.id }
  );

  return (
    <div className="w-[35rem] mt-16">
      <section className="flex flex-col items-center">
        <h3 className="font-bold md:text-xl text-stone-200">
          {todo ? 'Edit' : 'Add'}
        </h3>
      </section>
      <form action={formAction}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <ToDoCancelLink />
          </li>
          <li>
            <ToDoSaveButton />
          </li>
          {todo && <p>Delete todo</p>}
        </menu>
        <div>
          <Input
            type="text"
            label="Title"
            name="title"
            defaultValue={todo?.title}
          />
          <Input
            label="Description"
            textarea
            name="description"
            defaultValue={todo?.description}
          />
          <p>{state.message}</p>
        </div>
      </form>
    </div>
  );
}
