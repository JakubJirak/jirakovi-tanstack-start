import { relations } from "drizzle-orm";
import { boolean, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const todos = mysqlTable("todo", {
  id: int("id").primaryKey().autoincrement(),
  text: varchar("text", { length: 1500 }),
  date: varchar("date", { length: 15 }),
  isDone: boolean("isDone"),
  userId: int("userId").references(() => users.id),
});

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  username: varchar("username", { length: 50 }).unique(),
  password: varchar("password", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  todos: many(todos),
}));

export const todosRelations = relations(todos, ({ one }) => ({
  user: one(users, {
    fields: [todos.userId],
    references: [users.id],
  }),
}));

export type Todo = typeof todos.$inferSelect;
export type User = typeof users.$inferSelect;
