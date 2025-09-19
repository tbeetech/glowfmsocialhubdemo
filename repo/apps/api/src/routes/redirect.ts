import { Router } from "express";
import { UAParser } from "ua-parser-js";

export const redirect = Router();

redirect.get("/:slug", async (req, res) => {
  const ua = new UAParser(req.headers["user-agent"] || "").getResult();
  const device = ua.device.type || "desktop";
  const ref = req.get("referer") || "direct";
  // lookup slug -> targetUrl; log click {ts, device, ref}
  const targetUrl = "https://glow991fm.com"; // placeholder
  res.redirect(302, targetUrl);
});
