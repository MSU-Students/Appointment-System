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
      <div class="q-pa-lg">
        <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="q-pa-md bg-white" style="max-width: 350px">
              <q-list>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div class="q-gutter-y-md column">
                        <q-rating
                          v-model="ratingModel"
                          size="2.5em"
                          color="grey"
                          :color-selected="ratingColors"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <q-rating
                        v-model="ratingModel"
                        size="2.5em"
                        color="grey"
                        :color-selected="ratingColors"
                      />
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div class="q-gutter-y-md column">
                        <q-rating
                          v-model="ratingModel"
                          size="2.5em"
                          color="grey"
                          :color-selected="ratingColors"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="q-pa-md bg-white" style="max-width: 350px">
              <q-list>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div class="q-gutter-y-md column">
                        <q-rating
                          v-model="ratingModel"
                          size="2.5em"
                          color="grey"
                          :color-selected="ratingColors"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div class="q-gutter-y-md column">
                        <q-rating
                          v-model="ratingModel"
                          size="2.5em"
                          color="grey"
                          :color-selected="ratingColors"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div class="q-gutter-y-md column">
                        <q-rating
                          v-model="ratingModel"
                          size="2.5em"
                          color="grey"
                          :color-selected="ratingColors"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="q-pa-md bg-white" style="max-width: 350px">
              <q-list>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div class="q-gutter-y-md column">
                        <q-rating
                          v-model="ratingModel"
                          size="2.5em"
                          color="grey"
                          :color-selected="ratingColors"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div class="q-gutter-y-md column">
                        <q-rating
                          v-model="ratingModel"
                          size="2.5em"
                          color="grey"
                          :color-selected="ratingColors"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  popup
                  default-opened
                  icon="people"
                  label="Azimah D. Ampuan"
                  caption="Consultant 2"
                >
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div class="q-gutter-y-md column">
                        <q-rating
                          v-model="ratingModel"
                          size="2.5em"
                          color="grey"
                          :color-selected="ratingColors"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
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
