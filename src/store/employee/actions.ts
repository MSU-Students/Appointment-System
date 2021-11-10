import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { EmployeeStateInterface, manageEmployee } from './state';

const actions: ActionTree<EmployeeStateInterface, StateInterface> = {
  newEmployee (context, newEmployee: manageEmployee) {
    //call server api
    context.commit('addEmployee', newEmployee);
  },
  editEmployee(context, updatedEmployee: manageEmployee) {
    //call server api
    context.commit('updateEmployee', updatedEmployee);
  },
  deleteEMployee(context, targetEmployee: manageEmployee) {
    context.commit('removeEmployee', targetEmployee);
  }
};

export default actions;
