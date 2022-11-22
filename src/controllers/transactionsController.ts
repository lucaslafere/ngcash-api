import { Request, Response } from "express";
import * as transactionsService from "../services/transactionsService";
import * as usersService from "../services/usersService";
import { cashOutSchema } from "../schemas/cashOutSchema";

export interface iCashOut {
  amount: number;
  username: string;
}

export async function getBalance(req: Request, res: Response) {
  const { userId } = res.locals;
  const accountId = await usersService.findAccountById(userId);
  const balance = await transactionsService.findById(accountId.accountId);
  return res.status(200).send(balance);
}

export async function cashOut(req: Request, res: Response) {
  const cashOutData: iCashOut = req.body;
  const { error } = cashOutSchema.validate(cashOutData);
  if (error) throw { type: "wrong-body-format", message: error.message };
  const { userId } = res.locals;
  const senderUsername = await usersService.findAccountById(userId);
  if (cashOutData.username === senderUsername.username)
    throw { type: "generic", message: "You cant cash-out to yourself" };

  const result = await transactionsService.cashOut(
    cashOutData.username,
    cashOutData.amount,
    userId
  );
  return res.status(200).send("OK");
}

export async function getUserTransactionsAscending(req: Request, res: Response) {
    const { userId } = res.locals;
    const accountId = await usersService.findAccountById(userId);
    const result = await transactionsService.getUserTransactionsAscending(accountId.accountId)
    return res.status(200).send(result);
}
export async function getUserTransactionsDescending(req: Request, res: Response) {
  const { userId } = res.locals;
  const accountId = await usersService.findAccountById(userId);
  const result = await transactionsService.getUserTransactionsDescending(accountId.accountId)
  return res.status(200).send(result);
}
export async function getUserCashOut (req: Request, res: Response){
  const { userId } = res.locals;
  const accountId = await usersService.findAccountById(userId);
  const result = await transactionsService.getUserCashOut(accountId.accountId)
  return res.status(200).send(result);
}
export async function getUserCashOutAscending (req: Request, res: Response){
  const { userId } = res.locals;
  const accountId = await usersService.findAccountById(userId);
  const result = await transactionsService.getUserCashOutAscending(accountId.accountId)
  return res.status(200).send(result);
}
export async function getUserCashOutDescending (req: Request, res: Response){
  const { userId } = res.locals;
  const accountId = await usersService.findAccountById(userId);
  const result = await transactionsService.getUserCashOutDescending(accountId.accountId)
  return res.status(200).send(result);
}
export async function getUserCashIn (req: Request, res: Response){
  const { userId } = res.locals;
  const accountId = await usersService.findAccountById(userId);
  const result = await transactionsService.getUserCashIn(accountId.accountId)
  return res.status(200).send(result);
}
export async function getUserCashInAscending (req: Request, res: Response){
  const { userId } = res.locals;
  const accountId = await usersService.findAccountById(userId);
  const result = await transactionsService.getUserCashInAscending(accountId.accountId)
  return res.status(200).send(result);
}
export async function getUserCashInDescending (req: Request, res: Response){
  const { userId } = res.locals;
  const accountId = await usersService.findAccountById(userId);
  const result = await transactionsService.getUserCashInDescending(accountId.accountId)
  return res.status(200).send(result);
}
