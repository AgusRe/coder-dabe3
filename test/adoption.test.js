import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");

let userId;
let petId;
let adoptionId;

describe("Adoptions Router Functional Tests", () => {

    it("GET /api/adoptions debe devolver todas las adopciones", async () => {
        const res = await requester.get("/api/adoptions");
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property("status");
    });

    it("Crear usuario para el test", async () => {
        const user = {
            first_name: "Test",
            last_name: "User",
            email: `test${Date.now()}@mail.com`,
            password: "123456"
        };

        const res = await requester.post("/api/sessions/register").send(user);

        expect(res.status).to.equal(200);
        expect(res.body.payload).to.exist;

        userId = res.body.payload._id || res.body.payload;
    });

    it("Crear mascota para el test", async () => {
        const pet = {
            name: "Firulais",
            specie: "dog",
            birthDate: "2020-01-01"
        };

        const res = await requester.post("/api/pets").send(pet);
        expect(res.status).to.equal(201);

        petId = res.body.payload._id;
    });

    it("POST /api/adoptions/:uid/:pid debe crear una adopción", async () => {
        expect(userId).to.not.be.undefined;
        expect(petId).to.not.be.undefined;

        const res = await requester.post(`/api/adoptions/${userId}/${petId}`);

        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal("success");

        adoptionId = res.body.payload._id;
    });

    it("GET /api/adoptions/:aid debe obtener una adopción por id", async () => {
        expect(adoptionId).to.not.be.undefined;

        const res = await requester.get(`/api/adoptions/${adoptionId}`);
        expect(res.status).to.equal(200);
        expect(res.body.payload).to.exist;
    });

});