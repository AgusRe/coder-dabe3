import { faker } from '@faker-js/faker';

export const generatePet = () => {
  return {
    _id: faker.database.mongodbObjectId(),
    name: faker.animal.petName(),
    specie: faker.helpers.arrayElement([
      'dog',
      'cat',
      'rabbit',
      'hamster'
    ]),
    birthDate: faker.date.past(),
    adopted: false,
    owner: null,
    image: faker.image.url(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  };
};

export const generateMockPets = (qty = 20) => {
  return Array.from({ length: qty }, () => generatePet());
};
