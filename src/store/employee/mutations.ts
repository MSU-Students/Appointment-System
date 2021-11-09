import { MutationTree } from 'vuex';
import { EmployeeStateInterface, manageEmployee } from './state';

const mutation: MutationTree<EmployeeStateInterface> = {
  addEmployee (state, newEmployee:manageEmployee) {
    state.employees.push(newEmployee);
  },
  updateEmployee (state, updatedEmployee:manageEmployee) {
    const index = state.employees.findIndex((s) => {
      return s.idNumber == updatedEmployee.idNumber;
    })
    if (index >= 0) {
      state.employees.splice(index, 1, updatedEmployee);
    }
  },
  removeAppointment (state, targetEmployee:manageEmployee) {
    const index = state.employees.findIndex((s) => {
      return s.idNumber == targetEmployee.idNumber;
    })
    if (index >= 0) {
      state.employees.splice(index, 1);
    }
  }
};

export default mutation;
