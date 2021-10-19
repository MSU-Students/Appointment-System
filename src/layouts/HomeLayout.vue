<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-black">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>MSU APPOINTMENT SYSTEM</q-toolbar-title>

        <div class="q-pa-xss q-gutter-sm flex flex-center">
          <q-btn
            outline
            rounded
            color="white"
            label="Log Out"
            class="bg-transparent"
            to="signed"
          ></q-btn>
          <q-btn flat round dense icon="more_vert" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="250"
      :breakpoint="500"
      bordered
      class="bg-white"
    >
      <q-scroll-area style="height: calc(100% - 200px); margin-top: 200px; border-right: 1px solid #ddd">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="dashb">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="HomeAppointment">
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section>Appointments </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="searchAppointment">
            <q-item-section avatar>
              <q-icon name="manage_search" />
            </q-item-section>

            <q-item-section> Search Appointment </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple to="viewSchedules">
            <q-item-section avatar>
              <q-icon name="event_available" />
            </q-item-section>

            <q-item-section> Schedule </q-item-section>
          </q-item>
          
          <q-item clickable v-ripple to="feedbacks">
            <q-item-section avatar>
              <q-icon name="feedback" />
            </q-item-section>

            <q-item-section> Send Feedback </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" src="../assets/image/LogInLayout.jpeg" style="height: 200px">
          <div class="absolute-bottom bg-transparent">
            
            <div class="text-weight-bold text-black text-bold">Welcome to MSU Appointment System</div>
            <div>@msumain.edu.ph</div>
          </div>
        </q-img>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>
<style>
.bg-image {
  background-image: url(../assets/image/imagess.jpeg);
  background-position: center;
  background-size: 100%;
}
</style>
