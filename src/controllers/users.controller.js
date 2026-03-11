import usersService from '../services/users.service.js';
import UserDto from '../dto/User.dto.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    res.status(200).json({ status: 'success', payload: users });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await usersService.getUserById(uid);
    if (!user) return res.status(404).json({ status: 'error', error: 'User not found' });
    res.status(200).json({ status: 'success', payload: new UserDto(user) });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await usersService.createUser(req.body);
    res.status(201).json({ status: 'success', payload: user });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const updated = await usersService.updateUser(uid, req.body);
    res.status(200).json({ status: 'success', payload: updated });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { uid } = req.params;
    await usersService.deleteUser(uid);
    res.status(200).json({ status: 'success', message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser };
