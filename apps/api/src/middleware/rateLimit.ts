import { Request, Response, NextFunction } from "express";
import { createHash } from "crypto";
import IORedis from "ioredis";
import { config } from "../config";

const useMock = config.redisUrl === "mock" || process.env.USE_MEMORY_REDIS === "true";
const redis = useMock ? null : new IORedis(config.redisUrl);

interface MemoryBucket {
  counter: number;
  expiresAt: number;
}

const memoryBuckets = new Map<string, MemoryBucket>();

function getBucketKey(ip: string | undefined, path: string, windowSec: number): string {
  const key = createHash("sha1").update(`${ip ?? "ip"}:${path}`).digest("hex");
  const windowBucket = Math.floor(Date.now() / (windowSec * 1000));
  return `ratelimit:${key}:${windowBucket}`;
}

export function rateLimit({ limit = 20, windowSec = 10 }: { limit?: number; windowSec?: number }) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const bucketKey = getBucketKey(req.ip, req.path, windowSec);

    if (useMock || !redis) {
      const now = Date.now();
      const bucket = memoryBuckets.get(bucketKey);

      if (!bucket || bucket.expiresAt <= now) {
        memoryBuckets.set(bucketKey, { counter: 1, expiresAt: now + windowSec * 1000 });
        return next();
      }

      bucket.counter += 1;
      if (bucket.counter > limit) {
        return res.status(429).json({ error: { code: "RATE_LIMIT", message: "Too many requests" } });
      }

      return next();
    }

    const count = await redis.incr(bucketKey);
    if (count === 1) {
      await redis.expire(bucketKey, windowSec);
    }
    if (count > limit) {
      return res.status(429).json({ error: { code: "RATE_LIMIT", message: "Too many requests" } });
    }
    next();
  };
}
