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
    <div class="float-right q-pr-lg">
      
      <q-card class="bg-black] text-center">
        <q-card-section style="width: 300px" >
        </q-card-section>
        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="Firstname"
            label="Enter First name"
            style= "width: 250px" color="black" bg-color="grey-3" label-color="black" 
          />
        </div>
        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="Lastname"
            label="Enter Last name"
            style="width: 250px" color="black" bg-color="grey-3" label-color="black" 
          />
        </div>
        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="Username"
            label="Enter username"
            style="width: 250px" color="black" bg-color="grey-3" label-color="black" 
          />
        </div>
        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="Email"
            label="Enter email"
            style="width: 250px" color="black" bg-color="grey-3" label-color="black" 
          />
        </div>
        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="Mobile"
            label="Enter mobile"
            style="width: 250px" color="black" bg-color="grey-3" label-color="black" 
          />
        </div>
       
        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="password"
            label="Enter password"
            type="password"
            style="width: 250px" color="black" bg-color="grey-4" label-color="black" 
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>

        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="confirmpassword"
            label="Confirm password"
            type="password"
            style="width: 250px" color="black" bg-color="grey-4" label-color="black" 
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="q-pa-md q-gutter-sm flex flex-center">
          
        <q-btn label="Register" style="width:150px" class="text-bold bg-black text-white flex flex-center" to="signed"/>
        
        </div>
      
      </q-card>
     
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      Firstname: '',
      Lastname: '',
      Username: '',
      Email: '',
      Mobile: '',
       password: '',
       confirmpassword: '',
      isPwd: ref(true),
      sizes: ['md'],
    };
  },
};
</script>

<style></style>
