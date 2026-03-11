import { usersRepository } from '../repository/index.js';

const getAllUsers = () => usersRepository.getAll();

const getUserById = (id) => usersRepository.getById(id);

const getUserByEmail = (email) => usersRepository.getBy({ email });

const createUser = (data) => usersRepository.create(data);

const updateUser = (id, data) => usersRepository.update(id, data);

const deleteUser = (id) => usersRepository.delete(id);

export default {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
