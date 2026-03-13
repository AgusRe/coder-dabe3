import { generateMockUsers } from "../mocks/mockingUsers.js";
import { generateMockPets } from "../mocks/mockingPets.js";
import { usersService, petsService } from "../services/index.js";

// GET /api/mocks/mockingusers
export const getMockingUsers = async (req, res) => {
  try {
    const users = generateMockUsers(20);
    res.send(users);
  } catch (error) {
    res.status(500).send({ 
      status: "error",
      error: error.message 
    });
  }
};


// GET /api/mocks/mockingpets
export const getMockingPets = async (req, res) => {
  try {
    const pets = generateMockPets(20);
    res.send(pets);
  } catch (error) {
    res.status(500).send({
      status: "error",
      error: error.message
    });
  }
};

// POST /api/mocks/generateData
export const generateData = async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;
    const usersArray = generateMockUsers(users);
    const petsArray = generateMockPets(pets);

    if (usersArray.length > 0) {
      await usersService.insertMany(usersArray);
    }

    if (petsArray.length > 0) {
      await petsService.insertMany(petsArray);
    }

    res.send({
      status: "success",
      message: "Mock data generated successfully",
      insertedUsers: usersArray.length,
      insertedPets: petsArray.length
    });

  } catch (error) {
    res.status(500).send({
      status: "error",
      error: error.message
    });
  }
};

