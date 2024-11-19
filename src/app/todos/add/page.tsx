'use client';

import { useActionState } from 'react';

import { createTodo } from '@/app/todos/actions';
import Input from '@/components/UI/Input';
import ToDoSaveButton from './to-do-save-button';
import ToDoCancelLink from './to-do-cancel-link';

export default function Page() {
  const [state, formAction] = useActionState(createTodo, { message: '' });

  return (
    <div className="w-[35rem] mt-16">
      <section className="flex flex-col items-center">
        <h3 className="font-bold md:text-xl text-stone-200">New To-Do</h3>
      </section>
      <form action={formAction}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <ToDoCancelLink />
          </li>
          <li>
            <ToDoSaveButton />
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" name="title" />
          <Input label="Description" textarea name="description" />
          <p>{state.message}</p>
        </div>
      </form>
    </div>
  );
}
