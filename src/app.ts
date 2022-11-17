import cors from 'cors';
import express, { json } from 'express';
import dotenv from 'dotenv';
import "express-async-errors";

dotenv.config();
const app = express();
app.use(cors());

export default app;