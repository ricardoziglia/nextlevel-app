import 'server-only';
import { db } from './db';
import { usersTable } from './db/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

const user: typeof usersTable.$inferInsert = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

export async function getUsers() {
  return await db.select().from(usersTable);
}

export async function getUser() {
  return await db.query.usersTable.findFirst({
    where: (model, { eq }) => eq(model.email, user.email),
  });
}

export async function deleteUser() {
  await db.delete(usersTable).where(eq(usersTable.email, user.email));

  redirect('/');
}

export async function insertUser() {
  return await db.insert(usersTable).values(user);
}
