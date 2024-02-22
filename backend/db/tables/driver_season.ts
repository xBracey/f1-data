import { text, sqliteTable, int, unique } from "drizzle-orm/sqlite-core";
import { driver } from "./driver";
import { team } from "./team";
import { season } from "./season";

export const driver_season = sqliteTable(
  "driver_season",
  {
    driver_name: text("driver_name")
      .references(() => driver.name)
      .notNull(),
    team_name: text("team_name")
      .references(() => team.name)
      .notNull(),
    season_year: text("season_year")
      .references(() => season.year)
      .notNull(),
    season_racing_class_name: text("season_racing_class_name").references(
      () => season.racing_class_name
    ),
    points: int("points"),
    position: int("position"),
  },
  (t) => ({
    driver_name_team_name_season_year: unique().on(
      t.driver_name,
      t.team_name,
      t.season_year
    ),
  })
);

export type DriverSeason = typeof driver_season.$inferSelect;
export type InsertDriverSeason = typeof driver_season.$inferInsert;
