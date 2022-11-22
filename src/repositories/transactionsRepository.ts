import { prisma } from "../database";
import { TransactionData } from "../types/transactionType";

export async function insert(TransactionData: TransactionData) {
    const result = prisma.transactions.create({ data: TransactionData});
    return result;
  }

export async function getUserTransactionsAscending (accountId: number) {
    const result = prisma.transactions.findMany({
        where: { OR: [
            {debitedAccountId: accountId},
            {creditedAccountId: accountId}
        ]},
        orderBy: {createdAt: 'asc'}
    })
    return result;
}
export async function getUserTransactionsDescending (accountId: number) {
    const result = prisma.transactions.findMany({
        where: { OR: [
            {debitedAccountId: accountId},
            {creditedAccountId: accountId}
        ]},
        orderBy: {createdAt: 'desc'}
    })
    return result;
}
export async function getUserCashOut (accountId: number) {
    const result = prisma.transactions.findMany({
        where: {debitedAccountId: accountId}});
        return result;
}
export async function getUserCashIn (accountId: number) {
    const result = prisma.transactions.findMany({
        where: {creditedAccountId: accountId}});
        return result;
}
export async function getUserCashOutAscending (accountId: number) {
    const result = prisma.transactions.findMany({
        where: {debitedAccountId: accountId},
        orderBy: {createdAt: 'asc'}});
        return result;
}
export async function getUserCashOutDescending (accountId: number) {
    const result = prisma.transactions.findMany({
        where: {debitedAccountId: accountId},
        orderBy: {createdAt: 'desc'}});
        return result;
}
export async function getUserCashInAscending (accountId: number) {
    const result = prisma.transactions.findMany({
        where: {creditedAccountId: accountId},
        orderBy: {createdAt: 'asc'}});
        return result;
}
export async function getUserCashInDescending (accountId: number) {
    const result = prisma.transactions.findMany({
        where: {creditedAccountId: accountId},
        orderBy: {createdAt: 'desc'}});
        return result;
}