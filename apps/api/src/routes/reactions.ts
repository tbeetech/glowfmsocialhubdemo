import { Router } from "express";
import { ReactionSchema } from "@glow/shared";
import { Reaction } from "../models/reaction";
import { rateLimit } from "../middleware/rateLimit";

export const reactions = Router();

reactions.post("/", rateLimit({ limit: 10, windowSec: 5 }), async (req, res, next) => {
  try {
    const { contentId, type } = ReactionSchema.parse(req.body);
    const doc = await Reaction.findOneAndUpdate({ contentId, type }, { $inc: { count: 1 }, $set: { updatedAt: new Date() } }, { upsert: true, new: true });
    res.json({ ok: true, counts: { contentId, type, count: doc.count } });
  } catch (e) { next(e); }
});
