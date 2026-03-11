import { faker } from '@faker-js/faker';
import { createHash } from '../utils/bcrypt.js';

export const generateUser = () => {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: createHash('coder123'),
    role: faker.helpers.arrayElement(['user', 'admin']),
    pets: [],
  };
};

export const generateMockUsers = (qty = 50) => {
  return Array.from({ length: qty }, generateUser);
};
