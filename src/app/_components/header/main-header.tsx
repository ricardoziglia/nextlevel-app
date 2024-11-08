import Image from 'next/image';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header
      role="navigation"
      className="w-full flex items-center justify-between py-4 px-8 sm:px-12 bg-foreground text-stone-50 dark:text-stone-600"
    >
      <div className="flex gap-2">
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        <h1>A To-Do List app with Next.js</h1>
      </div>
      <ul className="flex text-stone-600 gap-4">
        <li>
          <NavLink href={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink href={'/todos'}>To-Dos</NavLink>
        </li>
        {/* <li>My Account</li> */}
      </ul>
    </header>
  );
}
