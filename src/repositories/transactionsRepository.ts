import { prisma } from "../database";
import { TransactionData } from "../types/transactionType";

export async function insert(TransactionData: TransactionData) {
    const result = prisma.transactions.create({ data: TransactionData});
    return result;
  }

export async function getUserTransactions (accountId: number) {
    const result = prisma.transactions.findMany({
        where: { OR: [
            {debitedAccountId: accountId},
            {creditedAccountId: accountId}
        ]},
    })
    return result;
}