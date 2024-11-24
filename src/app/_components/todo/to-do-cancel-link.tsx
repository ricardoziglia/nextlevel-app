'use client';

import { useFormStatus } from 'react-dom';

import Link from 'next/link';

export default function ToDoCancelLink() {
  const { pending } = useFormStatus();
  const className = `text-stone-500 hover:text-stone-300 ${
    pending ? 'pointer-events-none' : ''
  }`;
  return (
    <Link
      className={className}
      aria-disabled={pending}
      tabIndex={pending ? -1 : undefined}
      href="/todos"
    >
      Cancel
    </Link>
  );
}
