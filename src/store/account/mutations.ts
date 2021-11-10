import { MutationTree } from 'vuex';
import { AccountStateInterface, manageAccount } from './state';

const mutation: MutationTree<AccountStateInterface> = {
  addAccount (state, newAccount:manageAccount) {
    state.accounts.push(newAccount);
  },
  updateAccount (state, updatedAccount:manageAccount) {
    const index = state.accounts.findIndex((s) => {
      return s.idNumber == updatedAccount.idNumber;
    })
    if (index >= 0) {
      state.accounts.splice(index, 1, updatedAccount);
    }
  },
  removeAccount (state, targetAccount:manageAccount) {
    const index = state.accounts.findIndex((s) => {
      return s.idNumber == targetAccount.idNumber;
    })
    if (index >= 0) {
      state.accounts.splice(index, 1);
    }
  }
};

export default mutation;
