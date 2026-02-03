import { Router } from "express";
import { PetModel } from "../models/pet.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const pets = await PetModel.find();
    res.status(200).json({ status: "success", payload: pets });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

export default router;
