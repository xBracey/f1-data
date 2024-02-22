import { text, sqliteTable, int } from "drizzle-orm/sqlite-core";
import { country } from "./country";
import { team } from "./team";

export const driver = sqliteTable("driver", {
  name: text("name").primaryKey().notNull(),
  country_name: text("country_name").references(() => country.name),
  date_of_birth: int("date_of_birth", { mode: "timestamp" }),
  team_name: text("team_name").references(() => team.name),
});

export type Driver = typeof driver.$inferSelect;
export type InsertDriver = typeof driver.$inferInsert;
