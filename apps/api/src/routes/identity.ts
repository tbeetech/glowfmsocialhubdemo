import { Router } from "express";
import { LinkIdentitySchema } from "@shared/schemas";

export const identity = Router();

// Mock auth user
function getUserId() {
  return "user_demo";
}

identity.post("/link", async (req, res, next) => {
  try {
    const body = LinkIdentitySchema.parse(req.body);
    // Persist to socialLinks (omitted: create model)
    res.json({ ok: true, linked: { userId: getUserId(), ...body } });
  } catch (e) {
    next(e);
  }
});

identity.get("/me", async (_req, res) => {
  res.json({
    profile: { id: "user_demo", roles: ["user"] },
    socialLinks: [],
    preferences: { platformPrefs: ["instagram", "tiktok"] }
  });
});