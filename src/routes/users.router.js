import { Router } from "express";
import { UserModel } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ status: "success", payload: users });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

export default router;
