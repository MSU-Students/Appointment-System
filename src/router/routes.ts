import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/SignupLayout.vue'),
    children:
    [
      { path: '', component: () => import('pages/signed.vue')},
      { path: '/signed', component: () => import('pages/signed.vue')},
      { path: '/Login', component: () => import('pages/Login.vue')}

    ],
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children:
    [
      { path: '/dashb', component: () => import('pages/dashb.vue')},
      { path: '/newappoint', component: () => import('pages/newappoint.vue')},
      { path: '/HomeAppointment', component: () => import('pages/HomeAppointment.vue')},
      { path: '/searchAppointment', component: () => import('pages/searchAppointment.vue')},
      { path: '/viewSchedules', component: () => import('pages/viewSchedules.vue')},
      { path: '/feedbacks', component: () => import('pages/feedbacks.vue')}

     
    ],
  },
  {
    path: '/',
    component: () => import('layouts/adminLayout.vue'),
    children:
    [
      { path: '/adminDash', component: () => import('pages/adminDash.vue')},
      { path: '/viewAppointments', component: () => import('pages/viewAppointments.vue')},
      { path: '/adminViewSchedule', component: () => import('pages/adminViewSchedule.vue')},
      { path: '/manageEmployee', component: () => import('pages/manageEmployee.vue')},
      { path: '/manageAccount', component: () => import('pages/manageAccount.vue')}
    ],
  },
  {
    path: '/',
    component: () => import('layouts/employeeLayouts.vue'),
    children:
    [
      { path: '/employeeDash', component: () => import('pages/employeeDash.vue')},
      { path: '/addAppointments', component: () => import('pages/addAppointments.vue')},
      { path: '/addSchedule', component: () => import('pages/addSchedule.vue')},
      { path: '/viewFeedbacks', component: () => import('pages/viewFeedbacks.vue')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
