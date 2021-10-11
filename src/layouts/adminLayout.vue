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
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="adminDash">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="viewAppointments">
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section>Appointments </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="adminViewSchedule">
            <q-item-section avatar>
              <q-icon name="event_available" />
            </q-item-section>

            <q-item-section> Schedule </q-item-section>
          </q-item>
          <q-separator />
           <q-item clickable v-ripple to="manageEmployee">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>
 
            <q-item-section> Manage Employee </q-item-section>
          </q-item>

           <q-item clickable v-ripple to="manageAccount">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section> Manage Account </q-item-section>
          </q-item>
          <q-separator />
          
          <q-item clickable v-ripple to="feedbacks">
            <q-item-section avatar>
              <q-icon name="feedback" />
            </q-item-section>

            <q-item-section>Feedback </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
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
