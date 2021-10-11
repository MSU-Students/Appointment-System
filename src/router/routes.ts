import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/SignupLayout.vue'),
    children:
    [
      { path: '/signed', component: () => import('pages/signed.vue')},
      { path: '/Login', component: () => import('pages/Login.vue')}

    ],
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children:
    [
      { path: '/HomeLayout', component: () => import('layouts/HomeLayout.vue')}

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
