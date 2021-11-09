import { MutationTree } from 'vuex';
import { AppointmentStateInterface, manageAppointment } from './state';

const mutation: MutationTree<AppointmentStateInterface> = {
  addAppointment (state, newAppointment:manageAppointment) {
    state.appointments.push(newAppointment);
  },
  updateAppointment (state, updatedAppointment:manageAppointment) {
    const index = state.appointments.findIndex((s) => {
      return s.idNumber == updatedAppointment.idNumber;
    })
    if (index >= 0) {
      state.appointments.splice(index, 1, updatedAppointment);
    }
  },
  removeAppointment (state, targetAppointment:manageAppointment) {
    const index = state.appointments.findIndex((s) => {
      return s.idNumber == targetAppointment.idNumber;
    })
    if (index >= 0) {
      state.appointments.splice(index, 1);
    }
  }
};

export default mutation;
