import { prisma } from "../database";
import { AccountData } from "../types/accountType";

export async function insert(AccountData: AccountData) {
  const result = prisma.accounts.create({ data: AccountData });
  return result;
}

export async function deleteById(id: number) {
  const result = prisma.accounts.delete({
    where: {
      id,
    },
  });
  return result;
}

export async function findById(id: number) {
  const result = prisma.accounts.findUnique({
    where: {id}
  });
  return result;
}
