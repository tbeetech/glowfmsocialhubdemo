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

  const startServer = (port: number, attempt = 0) => {
    const server = createServer(app);
    attachSockets(app, server);

    server.listen(port, () => {
      console.log(`API listening on :${port}`);
    });

    server.on("error", (error: NodeJS.ErrnoException) => {
      if (error.code === "EADDRINUSE" && attempt < 3) {
        const nextPort = port + 1;
        console.warn(`[api] port ${port} is in use, retrying on ${nextPort}`);
        setTimeout(() => startServer(nextPort, attempt + 1), 200);
      } else {
        console.error("[api] failed to start server", error);
        process.exit(1);
      }
    });
  };

  startServer(config.port);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
