import { Router } from "express";
import { CreateDeeplinkSchema } from "@shared/schemas";
import { nanoid } from "nanoid";

export const deeplinks = Router();

deeplinks.post("/", (req, res, next) => {
  try {
    const payload = CreateDeeplinkSchema.parse(req.body);
    const slug = nanoid(8);
    // Persist payload + slug into DB (omitted for brevity)
    res.json({ slug, url: `/r/${slug}`, deeplink: payload });
  } catch (e) {
    next(e);
  }
});