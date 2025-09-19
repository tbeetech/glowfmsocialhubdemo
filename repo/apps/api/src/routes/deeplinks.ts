import { Router } from "express";
import { CreateDeeplinkSchema } from "@shared/schemas";
import { nanoid } from "nanoid";

export const deeplinks = Router();

deeplinks.post("/", (req, res, next) => {
  try {
    const body = CreateDeeplinkSchema.parse(req.body);
    const slug = nanoid(8);
    // Persist body + slug into DB (omitted for brevity)
    res.json({ slug, url: `/r/${slug}` });
  } catch (e) { next(e); }
});
