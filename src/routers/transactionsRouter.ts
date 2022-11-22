import { Router } from "express";
import * as accountsController from '../controllers/transactionsController';
import { validateToken } from "../middlewares/validateTokenMiddleware";

const transactionsRouter = Router();

transactionsRouter.put('/transactions/cash-out', validateToken, accountsController.cashOut)
transactionsRouter.get('/transactions/old', validateToken, accountsController.getUserTransactionsAscending)
transactionsRouter.get('/transactions/new', validateToken, accountsController.getUserTransactionsDescending)
transactionsRouter.get('/transactions/cash-out', validateToken, accountsController.getUserCashOut)
transactionsRouter.get('/transactions/cash-out/old', validateToken, accountsController.getUserCashOutAscending)
transactionsRouter.get('/transactions/cash-out/new', validateToken, accountsController.getUserCashOutDescending)
transactionsRouter.get('/transactions/cash-in', validateToken, accountsController.getUserCashIn)
transactionsRouter.get('/transactions/cash-in/old', validateToken, accountsController.getUserCashInAscending)
transactionsRouter.get('/transactions/cash-in/new', validateToken, accountsController.getUserCashInDescending)

export default transactionsRouter