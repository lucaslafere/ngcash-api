import { prisma } from "../database";

export async function insert(balance: number) {
  const result = prisma.accounts.create({ data: {balance} });
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
  return result
}

export async function updateBalance(id: number, balance: number) {
  const result = prisma.accounts.update({
    where: {id},
    data: {balance}
  });
  return result;
}