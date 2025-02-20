import 'server-only';
import { db } from './db';
import { users, todos } from './db/schema';
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

export async function insertTodo(title: string, description: string) {
  return await db.insert(todos).values({
    title: title,
    description: description,
    userId: 3, //hardcoded for now
  });
}

export async function getTodo(todoId: number) {
  return await db.query.todos.findFirst({
    where: (model, { eq }) => eq(model.id, todoId),
  });
}

export async function deleteTodo(todoId: number) {
  await db.delete(todos).where(eq(todos.id, todoId));
}

export async function updateTodo(
  todoId: number,
  title: string,
  description: string
) {
  await db
    .update(todos)
    .set({ title, description })
    .where(eq(todos.id, todoId));
}

export async function getTodos() {
  return await db.select().from(todos);
}
