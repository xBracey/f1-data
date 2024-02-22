import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const country = sqliteTable("country", {
  name: text("name").primaryKey().notNull(),
  continent: text("continent"),
});

export type Country = typeof country.$inferSelect;
export type InsertCountry = typeof country.$inferInsert;
