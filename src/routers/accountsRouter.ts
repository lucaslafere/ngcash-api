import { Router } from "express";
import * as transactionsController from '../controllers/transactionsController';
import { validateToken } from "../middlewares/validateTokenMiddleware";

const accountsRouter = Router();

accountsRouter.get('/account', validateToken, transactionsController.getBalance);

export default accountsRouter
