import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    password: String,
    role: String,
    pets: { type: Array, default: [] }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("users", userSchema);
