import { Router } from "express";
import * as accountsController from '../controllers//accountsController';
import { validateToken } from "../middlewares/validateTokenMiddleware";

const accountsRouter = Router();

accountsRouter.get('/account', validateToken, accountsController.getBalance);

export default accountsRouter