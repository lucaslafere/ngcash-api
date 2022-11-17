import { Accounts } from "@prisma/client";

export type AccountData = Omit <Accounts, 'id'>