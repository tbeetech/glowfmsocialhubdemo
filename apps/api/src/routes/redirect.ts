import { Router } from "express";
import { UAParser } from "ua-parser-js";

export const redirect = Router();

redirect.get("/:slug", async (req, res) => {
  const ua = new UAParser(req.headers["user-agent"] || "").getResult();
  const device = ua.device.type || "desktop";
  const ref = req.get("referer") || "direct";
  const slug = req.params.slug;
  // lookup slug -> targetUrl; log click {ts, device, ref}
  console.info(`[redirect] ${slug} clicked from ${ref} on ${device}`);
  const targetUrl = "https://glow991fm.com"; // placeholder
  res.redirect(302, targetUrl);
});
