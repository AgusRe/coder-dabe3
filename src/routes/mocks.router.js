import { Router } from "express";
import {
  getMockingUsers,
  getMockingPets,
  generateData
} from "../controllers/mocks.controller.js";

const router = Router();

router.get("/mockingusers", getMockingUsers);
router.get("/mockingpets", getMockingPets);
router.post("/generateData", generateData);

export default router;
