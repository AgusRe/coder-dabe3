import { Router } from 'express';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

// GET /api/mocks/mockingpets?qty=50
router.get('/mockingpets', mocksController.getMockingPets);

// GET /api/mocks/mockingusers?qty=50
router.get('/mockingusers', mocksController.getMockingUsers);

// POST /api/mocks/generateData  body: { users: 10, pets: 20 }
router.post('/generateData', mocksController.generateData);

export default router;
