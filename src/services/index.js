import usersDao from '../dao/mongo/users.dao.js';
import petsDao from '../dao/mongo/pets.dao.js';
import adoptionsDao from '../dao/mongo/adoptions.dao.js';

import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import AdoptionRepository from "../repository/AdoptionRepository.js";

export const usersService = new UserRepository(usersDao);
export const petsService = new PetRepository(petsDao);
export const adoptionsService = new AdoptionRepository(adoptionsDao);