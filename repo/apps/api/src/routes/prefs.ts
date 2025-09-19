import { Router } from "express";
import { PrefsSchema } from "@shared/schemas";

export const prefs = Router();

prefs.post("/", (req, res, next) => {
  try {
    const body = PrefsSchema.parse(req.body);
    // persist to userProfiles
    res.json({ ok: true, preferences: body });
  } catch (e) { next(e); }
});
