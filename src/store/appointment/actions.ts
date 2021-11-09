import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AppointmentStateInterface, manageAppointment } from './state';

const actions: ActionTree<AppointmentStateInterface, StateInterface> = {
  newAppointment (context, newAppointment: manageAppointment) {
    //call server api
    context.commit('addAppointment', newAppointment);
  },
  editAppointment(context, updatedAppointment: manageAppointment) {
    //call server api
    context.commit('updateAppointment', updatedAppointment);
  },
  deleteAppointment(context, targetAppointment: manageAppointment) {
    context.commit('removeAppointment', targetAppointment);
  }
};

export default actions;
