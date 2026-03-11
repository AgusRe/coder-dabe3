import { Router } from "express";

import {
  getMockingUsers,
  getMockingPets,
  generateData
} from "../controllers/mocks.controller.js";

const router = Router();

// Generar 50 usuarios mock
router.get("/mockingusers", getMockingUsers);

// Generar mascotas mock
router.get("/mockingpets", getMockingPets);

// Generar e insertar datos en Mongo
router.post("/generateData", generateData);

export default router;
