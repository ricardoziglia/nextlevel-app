'use client';

import { useFormStatus } from 'react-dom';

import Button from '@/components/UI/Button';

export default function ToDoSaveButton() {
  const { pending } = useFormStatus();
  return <Button>{pending ? 'Submitting...' : 'Save'}</Button>;
}
