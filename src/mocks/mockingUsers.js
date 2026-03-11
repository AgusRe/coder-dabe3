import { faker } from '@faker-js/faker';
import { createHash } from '../utils/bcrypt.js';

export const generateUser = () => {

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    _id: faker.database.mongodbObjectId(),

    first_name: firstName,
    last_name: lastName,

    email: faker.internet.email({
      firstName,
      lastName
    }).toLowerCase(),

    password: createHash('coder123'),

    role: faker.helpers.arrayElement(['user', 'admin']),

    pets: [],

    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  };
};

export const generateMockUsers = (qty = 50) => {
  return Array.from({ length: qty }, () => generateUser());
};
