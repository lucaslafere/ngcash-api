import * as accountsRepository from '../repositories/accountsRepository';
import { AccountData } from '../types/accountType';

export async function findById(id: number){
    const result = await accountsRepository.findById(id);
    if (!result) throw {type: 'not-found', message: 'No account found with this ID'}
    return result.balance;
}