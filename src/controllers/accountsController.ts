import { Request, Response } from "express";
import * as accountsService from '../services/accountsService';
import { AccountData } from "../types/accountType";
import * as usersService from '../services/usersService';


export async function getBalance(req: Request, res: Response) {
    const { userId } = res.locals;
    const accountId = await usersService.findAccountId(userId);
    const balance = await accountsService.findById(accountId);
    return res.status(200).send(balance);
}