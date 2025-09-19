import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  id: String, text: String, votes: { type: Number, default: 0 }
});

const schema = new mongoose.Schema({
  question: String,
  options: [optionSchema],
  expiresAt: Date,
  createdBy: String
}, { timestamps: true });

export const Poll = mongoose.model("polls", schema);
