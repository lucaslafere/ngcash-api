import { Transactions } from '@prisma/client';

export type TransactionData = Omit <Transactions, 'id'>