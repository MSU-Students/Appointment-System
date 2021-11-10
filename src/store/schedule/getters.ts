import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import {ScheduleStateInterface } from './state';

const getters: GetterTree<ScheduleStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
