import { Queue, JobsOptions, Job } from "bullmq";
import IORedis from "ioredis";
import { config } from "./config";

interface QueueLike {
  add(name: string, data: Record<string, unknown>, opts?: JobsOptions): Promise<Job | void>;
}

const useMock = config.redisUrl === "mock" || process.env.USE_MEMORY_REDIS === "true";

let connection: IORedis | null = null;

function createNoopQueue(name: string): QueueLike {
  return {
    async add(jobName, data) {
      console.info(`[queue:${name}] skipped job "${jobName}" (redis mocked)`, data);
    },
  };
}

let queues: { verifyQuest: QueueLike; notify: QueueLike };

if (useMock) {
  queues = {
    verifyQuest: createNoopQueue("verify-quest"),
    notify: createNoopQueue("notify"),
  };
  console.info("[redis] using in-memory mock queues");
} else {
  connection = new IORedis(config.redisUrl, {
    maxRetriesPerRequest: 1,
    enableOfflineQueue: false,
  });

  connection.on("error", (error) => {
    console.error("[redis] connection error", error);
  });

  queues = {
    verifyQuest: new Queue("verify-quest", { connection }),
    notify: new Queue("notify", { connection }),
  };

}

export { connection, queues };


