import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import mocksRouter from './routes/mocks.router.js';

dotenv.config();

const app = express();
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/adoptme';

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/mocks', mocksRouter);

// Mongo connection
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default app;
