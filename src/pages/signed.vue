<template>
  <q-page class="bg-image">
    <div class="q-pl-lg absolute-center">
      <div class="q-pr-xl">
        <div class="q-pr-xl">
          <div class="q-pr-xl">
            <div class="q-pr-xl">
              <div class="q-pr-xl">
                <div class="q-pr-xl">
                  <div class="q-pr-xl">
                    <div class="q-pr-xl">
                      
      
                          <div class="text-h1 text-bold text-arial text-black flex flex-left"> MSU APPOINTMENT SYSTEM </div>
                        
                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute-right q-pr-xl">
      <div class="q-pr-xl">
        <div class="q-pr-xl">
      <div class="q-pt-xl"></div>
      <div class="q-pt-xl"></div>
      <div class="q-pt-xl"></div>
      <div class="q-pt-md"></div>

       <q-card class="bg-white text-center q-pb-md">
        <q-card-section style="width: 350px"></q-card-section>

       <div class="text-h5 text-bold text-arial text-black flex flex-center q-pb-md"> Log in to continue </div>
            <div class="q-pa-xs flex flex-center">
               <q-input
                filled
                v-model="text"
                label="username"
                style="width: 300px" color="black" bg-color="grey-3" label-color="black"/>
            </div>
       
            <div class="q-pa-xs flex flex-center">
              <q-input
                filled
                v-model="password"
                label="password"
                type="password"
                style="width: 300px" color="black" bg-color="grey-4" label-color="black">
                  <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"/>
                  </template>
              </q-input>
            </div>

            <div class="q-pa-md q-gutter-sm flex flex-center text-bold">
             
                <q-btn label="Log In" style="width:150px" class="text-bold bg-black text-white flex flex-center" text-outlined="white" to="Homelayout"/>
            </div>
    
      
      </q-card>
    </div>
    </div>
    </div>
  </q-page>
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

<style></style>
