import mongoose from "mongoose";
import type { Role } from "@shared/types";

const schema = new mongoose.Schema({
  authProviderId: { type: String, index: true },
  roles: [{ type: String, enum: ["user","host","moderator","admin"], default: "user" }],
  country: String,
  platformPrefs: [{ type: String, enum: ["instagram","tiktok","youtube","facebook","x"] }],
  streak: { type: Number, default: 0 },
  lastSeenAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const UserProfile = mongoose.model("user_profiles", schema);
export type IUserProfile = mongoose.InferSchemaType<typeof schema>;
