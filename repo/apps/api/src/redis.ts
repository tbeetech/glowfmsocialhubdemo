import { Queue, QueueScheduler } from "bullmq";
import IORedis from "ioredis";
import { config } from "./config";

export const connection = new IORedis(config.redisUrl);

export const queues = {
  verifyQuest: new Queue("verify-quest", { connection }),
  notify: new Queue("notify", { connection })
};

new QueueScheduler("verify-quest", { connection });
new QueueScheduler("notify", { connection });
