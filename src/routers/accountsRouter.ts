import { Router } from "express";
import * as accountsController from '../controllers//accountsController';
import { validateToken } from "../middlewares/validateTokenMiddleware";

const accountsRouter = Router();

accountsRouter.get('/account', validateToken, accountsController.getBalance);
accountsRouter.put('/transactions/cash-out', validateToken, accountsController.cashOut)
accountsRouter.get('/transactions/old', validateToken, accountsController.getUserTransactionsAscending)
accountsRouter.get('/transactions/new', validateToken, accountsController.getUserTransactionsDescending)
accountsRouter.get('/transactions/cash-out', validateToken, accountsController.getUserCashOut)
accountsRouter.get('/transactions/cash-in', validateToken, accountsController.getUserCashIn)

export default accountsRouter
