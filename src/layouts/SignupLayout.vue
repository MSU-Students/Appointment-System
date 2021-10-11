<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated>
        <q-toolbar class="bg-black">
      <q-toolbar-title>
        MSU APPOINTMENT SYSTEM
      </q-toolbar-title>

    <div class="q-pa-xss q-gutter-sm flex flex-center">
       <q-btn outline rounded color="white" label="Sign Up" class="bg-transparent" to="Login" >
      </q-btn>
    </div>
    <q-btn-dropdown stretch flat label="Admin" icon="admin_panel_settings">
        
           <q-card class="bg-black text-center q-pb-md">
        <q-card-section style="width: 250px"></q-card-section>

      
            <div class="q-pa-xs flex flex-center">
               <q-input
                filled
                v-model="text"
                label="username"
                style="width: 200px" color="black" bg-color="grey-3" label-color="black"/>
            </div>
       
            <div class="q-pa-xs flex flex-center">
              <q-input
                filled
                v-model="password"
                label="password"
                type="password"
                style="width: 200px" color="black" bg-color="grey-4" label-color="black">
                  <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"/>
                  </template>
              </q-input>
            </div>

            <div class="q-pa-md q-gutter-sm flex flex-center text-bold">
             
                <q-btn label="Log In" style="width:100px" class="text-bold bg-warning text-black flex flex-center" text-outlined="white" to="adminDash"/>
            </div>
    
      
      </q-card>
      </q-btn-dropdown>
    
 
    </q-toolbar>



    </q-header>
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
      text: ref(''),
       password: ref(''),
      isPwd: ref(true),
    
    };
  },
};
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

