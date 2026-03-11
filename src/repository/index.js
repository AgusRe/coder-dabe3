import GenericRepository from './GenericRepository.js';
import usersDao from '../dao/mongo/users.dao.js';
import petsDao from '../dao/mongo/pets.dao.js';
import adoptionsDao from '../dao/mongo/adoptions.dao.js';

export const usersRepository = new GenericRepository(usersDao);
export const petsRepository = new GenericRepository(petsDao);
export const adoptionsRepository = new GenericRepository(adoptionsDao);
