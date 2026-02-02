import { faker } from "@faker-js/faker";
import { createHash } from "../utils/bcrypt.js";

export const generateMockUsers = (quantity = 1) => {
  return Array.from({ length: quantity }, () => ({
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    password: createHash("coder123"),
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }));
};
