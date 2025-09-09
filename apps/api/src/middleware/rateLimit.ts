import { Request, Response, NextFunction } from "express";
import { createHash } from "crypto";
import IORedis from "ioredis";
import { config } from "../config";

const redis = new IORedis(config.redisUrl);

export function rateLimit({ limit = 20, windowSec = 10 }: { limit?: number; windowSec?: number }) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const key = createHash("sha1").update((req.ip || "ip")+":"+(req.path)).digest("hex");
    const now = Date.now();
    const ttlKey = `ratelimit:${key}:${Math.floor(now / (windowSec*1000))}`;
    const count = await redis.incr(ttlKey);
    if (count === 1) await redis.expire(ttlKey, windowSec);
    if (count > limit) return res.status(429).json({ error: { code: "RATE_LIMIT", message: "Too many requests" } });
    next();
  };
}
