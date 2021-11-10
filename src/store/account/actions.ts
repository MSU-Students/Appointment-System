import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface, manageAccount } from './state';

const actions: ActionTree<AccountStateInterface, StateInterface> = {
  newAccount (context, newAccount: manageAccount) {
    //call server api
    context.commit('addAccount', newAccount);
  },
  editAccount(context, updatedAccount: manageAccount) {
    //call server api
    context.commit('updateAccount', updatedAccount);
  },
  deleteAccount(context, targetAccount: manageAccount) {
    context.commit('removeAccount', targetAccount);
  }
};

export default actions;
