<template>
  <q-page class="bg-image">
    <div class="absolute-center">
      
      <q-card class="bg-black text-center">
      
        <q-card-section style="width: 360px"></q-card-section>

       
        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="text"
            label="username"
            style="width: 350px" color="black" bg-color="grey-3" label-color="black" 
          />
        </div>
       
        <div class="q-pa-xs flex flex-center">
          <q-input
            filled
            v-model="password"
            label="password"
            type="password"
            style="width: 350px" color="black" bg-color="white" label-color="black" 
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
        <div class="q-pa-lg q-gutter-sm flex flex-center">
          
           <q-btn
      v-for="size in sizes" :key="`btn_size_rd_${size}`"
      
      color="white"
      :size="size"
      :label="`Log In`"
      :text-color="'black'"
    />
        </div>
      </q-card>
     
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
      sizes: ['md'],
    };
  },
};
</script>

<style></style>
