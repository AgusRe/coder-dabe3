import { generateMockUsers } from '../mocks/mockingUsers.js';
import { generateMockPets } from '../mocks/mockingPets.js';
import { usersRepository, petsRepository } from '../repository/index.js';

const getMockingPets = (req, res) => {
  try {
    const qty = parseInt(req.query.qty) || 100;
    const pets = generateMockPets(qty);
    res.status(200).json({ status: 'success', payload: pets });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const getMockingUsers = (req, res) => {
  try {
    const qty = parseInt(req.query.qty) || 50;
    const users = generateMockUsers(qty);
    res.status(200).json({ status: 'success', payload: users });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

const generateData = async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    if (isNaN(users) || isNaN(pets) || users < 0 || pets < 0) {
      return res.status(400).json({ status: 'error', error: 'users and pets must be non-negative numbers' });
    }

    const mockUsers = generateMockUsers(Number(users));
    const mockPets = generateMockPets(Number(pets));

    const insertedUsers = await Promise.all(mockUsers.map((u) => usersRepository.create(u)));
    const insertedPets = await Promise.all(mockPets.map((p) => petsRepository.create(p)));

    res.status(201).json({
      status: 'success',
      message: `${insertedUsers.length} users and ${insertedPets.length} pets inserted`,
      payload: { users: insertedUsers, pets: insertedPets },
    });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};

export default { getMockingPets, getMockingUsers, generateData };
