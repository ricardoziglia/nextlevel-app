'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import Link from 'next/link';

import { createTodo } from '@/app/todos/actions';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';

export default function Page() {
  const [state, formAction] = useActionState(createTodo, { message: '' });
  const { pending } = useFormStatus();

  return (
    <div className="w-[35rem] mt-16">
      <section className="flex flex-col items-center">
        <h3 className="font-bold md:text-xl text-stone-200">New To-Do</h3>
      </section>
      <form action={formAction}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <Link className="text-stone-500 hover:text-stone-300" href="/todos">
              Cancel
            </Link>
          </li>
          <li>
            <Button>{pending ? 'Submitting...' : 'Save'}</Button>
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
