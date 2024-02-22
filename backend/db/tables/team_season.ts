import { text, sqliteTable, int, unique } from "drizzle-orm/sqlite-core";
import { team } from "./team";
import { season } from "./season";

export const team_season = sqliteTable(
  "team_season",
  {
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
    team_name_racing_class_year: unique().on(
      t.team_name,
      t.season_year,
      t.season_racing_class_name
    ),
  })
);

export type TeamSeason = typeof team_season.$inferSelect;
export type InsertTeamSeason = typeof team_season.$inferInsert;
