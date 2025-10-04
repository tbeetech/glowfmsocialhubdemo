import { Router } from "express";
import { PollVoteSchema } from "@glow/shared";
import { Poll } from "../models/poll";

export const polls = Router();

polls.get("/:id", async (req, res, next) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Poll not found" } });
    res.json({ poll });
  } catch (e) { next(e); }
});

polls.post("/:id/vote", async (req, res, next) => {
  try {
    const { optionId } = PollVoteSchema.parse(req.body);
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Poll not found" } });
    const option = poll.options.find((o: any) => o.id === optionId);
    if (!option) return res.status(400).json({ error: { code: "BAD_OPTION", message: "Invalid option" } });
    option.votes += 1;
    await poll.save();
    res.json({ ok: true, poll });
  } catch (e) { next(e); }
});
