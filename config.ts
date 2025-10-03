export const config = {
  port: Number(process.env.PORT || 4000),
  mongoUri: process.env.MONGO_URI || "memory",
  redisUrl: process.env.REDIS_URL || "mock",
  jwtSecret: process.env.JWT_SECRET || "replace-me",
  baseUrl: process.env.BASE_URL || "http://localhost:4000",
  corsOrigins: (process.env.CORS_ORIGINS || "http://localhost:3000").split(","),
};