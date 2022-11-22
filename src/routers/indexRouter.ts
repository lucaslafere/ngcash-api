import { Router } from "express";
import usersRouter from './usersRouter';
import accountsRouter from './accountsRouter';
import transactionsRouter from './transactionsRouter';

const router = Router();
router.use(usersRouter);
router.use(accountsRouter);

export default router;