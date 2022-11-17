import { prisma } from "../database";
import { UserData } from "../types/userType";

export async function insert(UserData: UserData) {
  const result = prisma.users.create({ data: UserData });
  return result;
}

export async function findByUsername(username: string) {
  const result = await prisma.users.findUnique({ where: { username } });
  return result;
}
