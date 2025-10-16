import { Worker } from "bullmq";
import IORedis from "ioredis";


const redisUrl = process.env.REDIS_URL;

const make = (connection: IORedis, name: string, fn: (job: any) => Promise<void>) => {
  return new Worker(name, async (job) => fn(job), { connection });
};

if (!redisUrl || redisUrl === "mock") {
  console.info("[workers] REDIS_URL not provided; worker queue disabled. Set REDIS_URL to enable processing.");
  setInterval(() => {}, 1000 * 60 * 60);
} else {
  const connection = new IORedis(redisUrl, { maxRetriesPerRequest: null, enableOfflineQueue: false });

  make(connection, "verify-quest", async (job) => {
    console.log("verify-quest", job.name, job.id);
  });

  make(connection, "notify", async (job) => {
    console.log("notify", job.name, job.id);
  });

  console.log("Workers started");
}
