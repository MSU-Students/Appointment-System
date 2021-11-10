import { MutationTree } from 'vuex';
import { ScheduleStateInterface, manageSchedule } from './state';

const mutation: MutationTree<ScheduleStateInterface> = {
  addSchedule (state, newSchedule: manageSchedule) {
    state.schedules.push(newSchedule);
    // your code
  },
  updateSchedule (state, updatedSchedule: manageSchedule) {
    const index = state.schedules.findIndex((s) => {
      return s.idNumber == updatedSchedule.idNumber;
    })
    if (index >= 0) {
      state.schedules.splice(index, 1, updatedSchedule);
    }
  },
  removeAccount (state, targetAccount: manageSchedule) {
    const index = state.schedules.findIndex((s) => {
      return s.idNumber == targetAccount.idNumber;
    })
    if (index >= 0) {
      state.schedules.splice(index, 1);
    }
  }
};

export default mutation;
