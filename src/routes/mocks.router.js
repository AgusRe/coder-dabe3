import { Router } from "express";
import { generateMockUsers } from "../mocks/mockingUsers.js";
import { generateMockPets } from "../mocks/mockingPets.js";
import { UserModel } from "../models/user.model.js";
import { PetModel } from "../models/pet.model.js";

const router = Router();

/* ===============================
   GET /api/mocks/mockingpets
   =============================== */
router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets(100);
  res.status(200).json({ status: "success", payload: pets });
});

/* ===============================
   GET /api/mocks/mockingusers
   =============================== */
router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers(50);
  res.status(200).json({ status: "success", payload: users });
});

/* ===============================
   POST /api/mocks/generateData
   =============================== */
router.post("/generateData", async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const mockUsers = generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    if (users > 0) await UserModel.insertMany(mockUsers);
    if (pets > 0) await PetModel.insertMany(mockPets);

    res.status(201).json({
      status: "success",
      message: "Datos generados e insertados correctamente",
      inserted: {
        users: users,
        pets: pets
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error.message
    });
  }
});

export default router;
