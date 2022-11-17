import { prisma } from "../database";
import { TransactionData } from "../types/transactionType";

export async function insert(TransactionData: TransactionData) {
    const result = prisma.transactions.create({ data: TransactionData});
    return result;
  }