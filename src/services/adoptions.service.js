import { adoptionsRepository, usersRepository, petsRepository } from '../repository/index.js';

const getAllAdoptions = () => adoptionsRepository.getAll();

const getAdoptionById = (id) => adoptionsRepository.getById(id);

const createAdoption = async (userId, petId) => {
  const user = await usersRepository.getById(userId);
  if (!user) throw new Error('User not found');

  const pet = await petsRepository.getById(petId);
  if (!pet) throw new Error('Pet not found');

  if (pet.adopted) throw new Error('Pet is already adopted');

  await petsRepository.update(petId, { adopted: true, owner: userId });
  await usersRepository.update(userId, { $push: { pets: petId } });

  return await adoptionsRepository.create({ owner: userId, pet: petId });
};

export default {
  getAllAdoptions,
  getAdoptionById,
  createAdoption,
};
