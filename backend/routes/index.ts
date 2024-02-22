import { FastifyInstance } from "fastify";
import { registerRacingClassRoutes } from "./racingClass";

export const registerRoutes = (server: FastifyInstance) => {
  registerRacingClassRoutes(server);
};
