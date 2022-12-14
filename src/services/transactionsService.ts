import * as accountsRepository from '../repositories/accountsRepository';
import * as usersService from './usersService';
import * as transactionsRepository from '../repositories/transactionsRepository'
import { Prisma } from '@prisma/client';

export async function findById(id: number){
    const result = await accountsRepository.findById(id);
    if (!result) throw {type: 'not-found', message: 'No account found with this ID'}
    return result.balance;
}

export async function cashOut(username: string, amount: number, userId: number) {
    const findAccount = await usersService.findAccountById(userId);
    if (!findAccount) throw {type: 'not-found', message: 'this account doesnt exist'};
    const checkBalance = await findById(findAccount.accountId);
    if (+checkBalance < amount) throw {type: 'unprocessable', message: "you dont have enough balance to conclude this operation"};
    const findReceiverUser = await usersService.findUserByUsername(username);
    if (!findReceiverUser) throw {type: 'not-found', message: 'this username doesnt exist'};
    const findReceiverAccount = await accountsRepository.findById(findReceiverUser.accountId);
    if (!findReceiverAccount) throw {type: 'not-found', message: 'this account doesnt exist'};

    const newSenderBalance = (+checkBalance - amount);
    const newBalance = await accountsRepository.updateBalance(findAccount.accountId, newSenderBalance);

    const receiverBalance = await findById(findReceiverAccount.id);
    const newReceiverBalance = (+receiverBalance + amount);
    await accountsRepository.updateBalance(findReceiverAccount.id, newReceiverBalance)
    await transactionsRepository.insert({debitedAccountId: findAccount.accountId, creditedAccountId: findReceiverAccount.id, value: new Prisma.Decimal(amount)})
    return newBalance
    
}

export async function getUserTransactionsAscending(accountId: number){
    const result = await transactionsRepository.getUserTransactionsAscending(accountId);
    return result;
}
export async function getUserTransactionsDescending(accountId: number){
    const result = await transactionsRepository.getUserTransactionsDescending(accountId);
    return result;
}
export async function getUserCashOut(accountId:number) {
    const result = await transactionsRepository.getUserCashOut(accountId);
    return result;
}
export async function getUserCashOutAscending(accountId:number) {
    const result = await transactionsRepository.getUserCashOutAscending(accountId);
    return result;
}
export async function getUserCashOutDescending(accountId:number) {
    const result = await transactionsRepository.getUserCashOutDescending(accountId);
    return result;
}
export async function getUserCashInAscending(accountId:number) {
    const result = await transactionsRepository.getUserCashInAscending(accountId);
    return result;
}
export async function getUserCashInDescending(accountId:number) {
    const result = await transactionsRepository.getUserCashInDescending(accountId);
    return result;
}
export async function getUserCashIn(accountId:number) {
    const result = await transactionsRepository.getUserCashIn(accountId);
    return result;
}