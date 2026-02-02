import { faker } from "@faker-js/faker";

export const generateMockPets = (quantity = 1) => {
  return Array.from({ length: quantity }, () => ({
    name: faker.animal.petName(),
    specie: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),
    adopted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }));
};
