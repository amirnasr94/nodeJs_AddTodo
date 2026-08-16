import mongoose from "mongoose";

const MONGODB_UD = process.env.MONGODB_URI;

export async function connectDB() {
  console.log("askdas");

  if (!MONGODB_UD) {
    throw new Error("Connecting to DB failed!");
  }

  try {
    await mongoose.connect(MONGODB_UD, {
      bufferCommands: false,
    });
  } catch (error) {
    console.log("error");
  }
}
