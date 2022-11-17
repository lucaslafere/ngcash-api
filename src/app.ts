import cors from 'cors';
import express, { json } from 'express';
import dotenv from 'dotenv';
import "express-async-errors";
import router from './routers/indexRouter'

dotenv.config();
const app = express();
app.use(cors());
app.use(json());
app.use(router);

export default app;