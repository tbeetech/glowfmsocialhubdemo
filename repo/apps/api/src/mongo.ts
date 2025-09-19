import mongoose from "mongoose";
import { config } from "./config";

export async function connectMongo() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(config.mongoUri);
  return mongoose.connection;
}
