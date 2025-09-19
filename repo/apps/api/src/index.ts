import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import pinoHttp from "pino-http";
import { createServer } from "http";

import { config } from "./config";
import { connectMongo } from "./mongo";
import { errorHandler } from "./middleware/errors";
import { api, redirectRouter } from "./routes";
import { attachSockets } from "./realtime";

async function main() {
  await connectMongo();
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: config.corsOrigins, credentials: true }));
  app.use(express.json({ limit: "1mb" }));
  app.use(cookieParser());
  app.use(pinoHttp({ autoLogging: true }));

  app.use("/api", api);
  app.use("/r", redirectRouter);

  app.use(errorHandler);

  const server = createServer(app);
  attachSockets(app, server);

  server.listen(config.port, () => {
    console.log(`API listening on :${config.port}`);
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
