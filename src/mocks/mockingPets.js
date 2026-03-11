import { faker } from '@faker-js/faker';

const species = ['dog', 'cat', 'rabbit', 'bird', 'hamster', 'turtle'];

export const generatePet = () => {
  return {
    name: faker.animal.petName ? faker.animal.petName() : faker.person.firstName(),
    specie: faker.helpers.arrayElement(species),
    birthDate: faker.date.past({ years: 10 }).toISOString().split('T')[0],
    adopted: false,
    owner: null,
    image: faker.image.urlLoremFlickr({ category: 'animals' }),
  };
};

export const generateMockPets = (qty = 100) => {
  return Array.from({ length: qty }, generatePet);
};
