import {
  pgTable,
  serial,
  text,
  integer,
  varchar,
  timestamp,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  todos: many(todos),
}));

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  userId: integer('user_id').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const todosRelations = relations(todos, ({ one, many }) => ({
  user: one(users, {
    fields: [todos.userId],
    references: [users.id],
  }),
  tasks: many(tasks),
}));

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  text: text('text'),
  todoId: integer('todo_id').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const commentsRelations = relations(tasks, ({ one }) => ({
  post: one(todos, {
    fields: [tasks.todoId],
    references: [todos.id],
  }),
}));
