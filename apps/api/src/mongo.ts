import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { config } from "./config";

let memoryServer: MongoMemoryServer | null = null;
let cleanupRegistered = false;
let connectPromise: Promise<typeof mongoose.connection> | null = null;

async function ensureMemoryServer() {
  if (!memoryServer) {
    memoryServer = await MongoMemoryServer.create();
  }
  const uri = memoryServer.getUri("glowfm");
  await mongoose.connect(uri);
  console.info(`[mongo] connected to in-memory instance at ${uri}`);
  return mongoose.connection;
}

export async function connectMongo() {
  if (config.mongoUri === "disabled") {
    console.info("[mongo] disabled via configuration; skipping connection");
    return mongoose.connection;
  }

  if (connectPromise) {
    return connectPromise;
  }

  connectPromise = (async () => {
    mongoose.set("strictQuery", true);

    const useMemory = config.mongoUri === "memory" || process.env.USE_MEMORY_DB === "true";

    if (useMemory) {
      return ensureMemoryServer();
    }

    try {
      await mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 5000 });
      console.info(`[mongo] connected to ${config.mongoUri}`);
      return mongoose.connection;
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("[mongo] failed to connect, falling back to in-memory instance", error);
        return ensureMemoryServer();
      }
      throw error;
    }
  })();

  const connection = await connectPromise;

  if (!cleanupRegistered && config.mongoUri !== "disabled") {
    const close = async () => {
      await mongoose.disconnect().catch(() => undefined);
      if (memoryServer) {
        await memoryServer.stop().catch(() => undefined);
        memoryServer = null;
      }
    };

    process.once("SIGINT", close);
    process.once("SIGTERM", close);
    cleanupRegistered = true;
  }

  return connection;
}
