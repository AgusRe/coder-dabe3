import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: String,
    specie: String,
    age: Number,
    adopted: Boolean
  },
  { timestamps: true }
);

export const PetModel = mongoose.model("pets", petSchema);
