<template>
  <q-page class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-grey-7">
        <q-card-section class="text-black">
          <div class="text-h7 text-bold">MSU Office of the Chancellor</div>
          <div class="text-h5 text-white q-pl-lg">
            <q-icon name="feedback" color="black" />
            Client Feedbacks
          </div>
        </q-card-section>
      </q-card>

      <div class="q-px-lg q-pa-md">
         <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="q-pt-md">
        
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card style="width: 320px">
              <q-card-section
                :class="$q.dark.isActive ? 'black' : 'bg-warning'"
                class="text-black q-pr-lg"
                style="height: 190px"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6 flex flex-center">
                      Ms. Azimah D. Ampuan
                    </div>
                    <div class="text-h7 flex flex-center">
                      Chief Executive officer
                    </div>
                  </div>
                  <div class="col-2">
                    <q-icon size="65px" name="people" />
                  </div>
                 
                   <q-rating
        v-model="ratingModel"
        size="3.0em"
        color="grey"
        class="q-pl-sm"
        :color-selected="ratingColors"
      />
                  <div class="q-pt-sm q-pl-lg">
                  <q-btn
                    label="Send Feedbacks"
                    style="width: 183px"
                    class="bg-black text-white flex flex-center"
                    text-outlined="white"
                  />
                  </div>
                
                 
                </div>
              </q-card-section>
            </q-card>
          </div>
       
      </div>
       <div class="q-pt-md">
        
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card style="width: 320px">
              <q-card-section
                :class="$q.dark.isActive ? 'black' : 'bg-secondary'"
                class="text-black q-pr-lg"
                style="height: 190px"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6 flex flex-center">
                      Ms. Azimah D. Ampuan
                    </div>
                    <div class="text-h7 flex flex-center">
                      Chief Executive officer
                    </div>
                  </div>
                  <div class="col-2">
                    <q-icon size="65px" name="people" />
                  </div>
                 
                   <q-rating
        v-model="ratingModel"
        size="3.0em"
        color="grey"
        class="q-pl-sm"
        :color-selected="ratingColors"
      />
                  <div class="q-pt-sm q-pl-lg">
                  <q-btn
                    label="Send Feedbacks"
                    style="width: 183px"
                    class="bg-black text-white flex flex-center"
                    text-outlined="white"
                  />
                  </div>
                
                 
                </div>
              </q-card-section>
            </q-card>
          </div>
        
      </div>
       <div class="q-pt-md">
        
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card style="width: 320px">
              <q-card-section
                :class="$q.dark.isActive ? 'black' : 'bg-brown-5'"
                class="text-black q-pr-lg"
                style="height: 190px"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6 flex flex-center">
                      Ms. Azimah D. Ampuan
                    </div>
                    <div class="text-h7 flex flex-center">
                      Chief Executive officer
                    </div>
                  </div>
                  <div class="col-2">
                    <q-icon size="65px" name="people" />
                  </div>
                 
                   <q-rating
        v-model="ratingModel"
        size="3.0em"
        color="grey"
        class="q-pl-sm"
        :color-selected="ratingColors"
      />
                  <div class="q-pt-sm q-pl-lg">
                  <q-btn
                    label="Send Feedbacks"
                    style="width: 183px"
                    class="bg-black text-white flex flex-center"
                    text-outlined="white"
                  />
                  </div>
                
                 
                </div>
              </q-card-section>
            </q-card>
          </div>
       
      </div>
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
      
      current: ref(3),
      ratingModel: ref(4),
      ratingColors: [
        'light-green-3',
        'light-green-6',
        'green',
        'green-9',
        'green-10',
      ],
    };
  },
};
</script>
