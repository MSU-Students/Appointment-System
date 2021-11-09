import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ScheduleStateInterface, manageSchedule } from './state';

const actions: ActionTree<ScheduleStateInterface, StateInterface> = {
   newSchedule (context, newSchedule: manageSchedule) {
    // call server api
    context.commit('addSchedule', newSchedule);
  },

  editSchedule(context, updatedSchedule: manageSchedule) {
    //call server api
    context.commit('updateSchedule', updatedSchedule);
  },

  deleteSchedule(context, targetSchedule: manageSchedule) {
    //call server api
    context.commit('removeSchedule', targetSchedule);
  }
};

export default actions;
