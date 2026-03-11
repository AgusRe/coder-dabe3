import { petsRepository } from '../repository/index.js';
import PetDto from '../dto/Pet.dto.js';

const getAllPets = () => petsRepository.getAll();

const getPetById = (id) => petsRepository.getById(id);

const createPet = async (data) => {
  const petDto = new PetDto(data);
  return await petsRepository.create(petDto);
};

const updatePet = (id, data) => petsRepository.update(id, data);

const deletePet = (id) => petsRepository.delete(id);

export default {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
};
