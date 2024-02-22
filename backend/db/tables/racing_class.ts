import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const racing_class = sqliteTable("racing_class", {
  name: text("id").primaryKey().notNull(),
});

export type RacingClass = typeof racing_class.$inferSelect;
export type InsertRacingClass = typeof racing_class.$inferInsert;
