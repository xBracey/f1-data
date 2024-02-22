import { text, sqliteTable, int } from "drizzle-orm/sqlite-core";
import { country } from "./country";
import { racing_class } from "./racing_class";

export const team = sqliteTable("team", {
  name: text("name").primaryKey().notNull(),
  base: text("base"),
  country_name: text("country_name").references(() => country.name),
  racing_class_name: text("racing_class_name")
    .references(() => racing_class.name)
    .notNull(),
});

export type Team = typeof team.$inferSelect;
export type InsertTeam = typeof team.$inferInsert;
