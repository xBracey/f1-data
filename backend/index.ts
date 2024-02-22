import fastify from "fastify";
import cors from "@fastify/cors";
import { registerRoutes } from "./routes";

const start = async () => {
  const server = fastify();

  try {
    await server.register(cors);

    registerRoutes(server);

    server.listen(
      {
        host: "0.0.0.0",
        port: 8080,
      },
      (err, address) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log(`Started server at ${address}`);
      }
    );
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
