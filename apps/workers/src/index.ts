import { Worker } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL || "redis://localhost:6379");

function make(name: string, fn: (job:any)=>Promise<void>) {
  return new Worker(name, async (job) => fn(job), { connection });
}

make("verify-quest", async (job) => {
  // Evaluate evidence; mark verified/rejected
  console.log("verify-quest", job.name, job.id);
});

make("notify", async (job) => {
  // Send webpush/whatsapp notifications
  console.log("notify", job.name, job.id);
});

console.log("Workers started");
