import { text, sqliteTable, int, unique } from "drizzle-orm/sqlite-core";
import { racing_class } from "./racing_class";

export const season = sqliteTable(
  "season",
  {
    year: text("year"),
    start: int("start", { mode: "timestamp" }),
    end: int("end", { mode: "timestamp" }),
    racing_class_name: text("racing_class_name")
      .references(() => racing_class.name)
      .notNull(),
  },
  (t) => ({
    racing_class_year: unique().on(t.year, t.racing_class_name),
  })
);

export type Season = typeof season.$inferSelect;
export type InsertSeason = typeof season.$inferInsert;
