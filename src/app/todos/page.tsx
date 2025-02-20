import todoImage from '@/assets/todo.png';
import LinkButton from '@/components/UI/LinkButton';
import Image from 'next/image.js';

export default function TodosPage() {
  return (
    <div className="mt-24 text-center w-2/3">
      <Image
        src={todoImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No To-Do list selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a To-Do or get started with a new one
      </p>
      <p className="mt-8">
        <LinkButton href="/todos/add">+ Add To-Do</LinkButton>
      </p>
    </div>
  );
}
