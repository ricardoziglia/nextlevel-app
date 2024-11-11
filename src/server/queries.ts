import 'server-only';
import { db } from './db';
import { users } from './db/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

const user: typeof users.$inferInsert = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

export async function getUsers() {
  return await db.select().from(users);
}

export async function getUser() {
  return await db.query.users.findFirst({
    where: (model, { eq }) => eq(model.email, user.email),
  });
}

export async function deleteUser() {
  await db.delete(users).where(eq(users.email, user.email));

  redirect('/');
}

export async function insertUser() {
  return await db.insert(users).values(user);
}
