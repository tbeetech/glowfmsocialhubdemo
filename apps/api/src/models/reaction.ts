import mongoose from "mongoose";

const schema = new mongoose.Schema({
  contentId: { type: String, index: true },
  type: { type: String, enum: ["heart","fire","laugh"] },
  count: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now }
});

schema.index({ contentId: 1, type: 1 }, { unique: true });

export const Reaction = mongoose.model("reactions", schema);
