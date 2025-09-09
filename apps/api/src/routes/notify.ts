import { Router } from "express";

export const notify = Router();

notify.post("/webpush/subscribe", (req, res) => {
  // Save push subscription (endpoint + keys) for user
  res.json({ ok: true });
});

notify.post("/whatsapp/optin", (req, res) => {
  // Save consent + phone
  res.json({ ok: true });
});
