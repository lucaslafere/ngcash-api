import * as manipulateToken from "../utils/manipulateToken";
import * as usersRepository from "../repositories/usersRepository";
import * as passwordEncrypter from "../utils/passwordEncrypter";
import { UserData } from "../types/userType";
import * as accountsRepository from "../repositories/accountsRepository";

export async function createUser(UserData: UserData) {
  const findExistingUser = await usersRepository.findByUsername(
    UserData.username
  );
  if (findExistingUser)
    throw { type: "conflict", message: "This username is in use" };
  const defaultBalance = "100";
  const createAccount = await accountsRepository.insert({
    balance: defaultBalance,
  });
  const result = await usersRepository.insert({
    username: UserData.username,
    password: UserData.password,
    accountId: createAccount.id,
  });
  if (!result) {
    await accountsRepository.deleteById(createAccount.id);
    throw { type: "generic", message: "could not create account" };
  }
  return result;
}
export async function signIn(UserData: UserData) {
    const findExistingUser = await usersRepository.findByUsername(UserData.username);
    if (
      !findExistingUser ||
      !passwordEncrypter.comparePassword(
        UserData.password,
        findExistingUser.password
      )
    )
      throw { type: "unauthorized", message: "Unauthorized" };
    const token = manipulateToken.generateToken(findExistingUser);
    return token;
  }