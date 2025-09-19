import { Router } from "express";

export const feed = Router();

feed.get("/", async (req, res) => {
  // Return ranked cards from Highlights + trending signals
  res.json({
    items: [
      { id: "c1", title: "Highlight: Glow Morning Show", platform: "instagram" },
      { id: "c2", title: "Sports Minute", platform: "tiktok" }
    ],
    cursor: null
  });
});
