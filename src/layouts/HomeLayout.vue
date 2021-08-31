<template>
 
  <q-layout view="hHh lpR fFf">
      <q-page class="bg-image">
 
    <q-header elevated>
        <q-toolbar class="bg-black">
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
                <q-toolbar-title>MSU APPOINTMENT SYSTEM</q-toolbar-title>

                <div class="q-pa-xss q-gutter-sm flex flex-center">
                    <q-btn outline rounded color="white" label="Log Out" class="bg-transparent" to="signed"></q-btn>
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
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <q-page>
        </q-page>
      </q-page-container>

</q-page>

  </q-layout>
 
</template>
<script>
import { ref } from 'vue'

const menuList = [
  {
    icon: 'inbox',
    label: 'Dashboard',
    separator: true
  },
  {
    icon: 'send',
    label: 'New Appointment',
    separator: false
  },
  {
    icon: 'help',
    label: 'Search Appointment',
    separator: false
  },
  {
    icon: 'error',
    label: 'Schedule',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Administrator',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  }
  
]

export default {
  setup () {
    return {
      drawer: ref(false),
      menuList
    }
  }
}
</script>
<style>
.bg-image
{
  background-image: url(../assets/image/imagess.jpeg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}

</style>

