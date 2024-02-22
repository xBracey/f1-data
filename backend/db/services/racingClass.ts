import { eq } from "drizzle-orm";
import { db } from "..";
import { InsertRacingClass, racingClass } from "../tables/racingClass";

export const getRacingClasses = () => db.select().from(racingClass).all();

export const getRacingClass = (id: string) => {
  return db.select().from(racingClass).where(eq(racingClass.name, id)).all();
};

export const insertRacingClass = (user: InsertRacingClass) => {
  return db.insert(racingClass).values(user).run();
};
