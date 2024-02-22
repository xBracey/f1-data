import { FastifyInstance } from "fastify";
import { getRacingClasses } from "../db/services";

export const registerRacingClassRoutes = (server: FastifyInstance) => {
  server.get("/racingClass", async (req, res) => {
    const racingClasses = getRacingClasses();
    res.send({ racingClasses });
  });
};
