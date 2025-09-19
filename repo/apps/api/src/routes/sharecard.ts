import { Router } from "express";

export const sharecard = Router();

sharecard.post("/", async (req, res) => {
  // Render OG/Twitter card — stub returns a placeholder URL
  res.json({ ok: true, imageUrl: "https://via.placeholder.com/1200x630.png?text=Glow+99.1+FM" });
});
