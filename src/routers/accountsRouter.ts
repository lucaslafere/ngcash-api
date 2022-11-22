import { Router } from "express";
import * as accountsController from '../controllers/transactionsController';
import { validateToken } from "../middlewares/validateTokenMiddleware";

const accountsRouter = Router();

accountsRouter.get('/account', validateToken, accountsController.getBalance);

export default accountsRouter
