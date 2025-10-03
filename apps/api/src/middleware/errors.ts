import { Request, Response } from "express";

export function errorHandler(err: any, _req: Request, res: Response) {
  const status = err.status || 500;
  const code = err.code || "INTERNAL_ERROR";
  const message = err.message || "Something went wrong";
  const details = err.details || undefined;
  res.status(status).json({ error: { code, message, details } });
}