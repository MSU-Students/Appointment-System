<template>
  <q-page class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-teal-7">
        <q-card-section class="text-black">
          <div class="text-h7 text-bold">MSU Office of the Chancellor</div>
          <div class="text-h5 text-white">
            <q-icon name="arrow_upward" />
            ONGOING SCHEDULES
          </div>
        </q-card-section>
      </q-card>
 <div class="q-px-xl absolute-top-bottom">
       <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[6]"
        selection="multiple"
        v-model:selected="selected"
        :filter="filter"
        grid
        hide-header
      >
      <template v-slot:top-left>
        <q-select
              class="q-pa-sm on-right"
              standout
              v-model="filter"
              :options="options"
              :dense="dense"
              :options-dense="denseOpts"
              bg-color="teal-1"
              style="width: 450px"
              label="Employee Name" 
              color="black"
              transition-show="scale"
              transition-hide="scale"
            >
          <template v-slot:before>
            <q-btn
                  label="Search"
                  style="width: 80px"
                  size="md"
                  class="text-bold bg-black text-white"
                  text-outlined="white"
                />
          </template>
        </q-select>
      </template>
      
        <div class="q-pb-lg"></div>
        <template v-slot:item="props">
          <div
            class="
              q-pa-xs
              col-xs-12 col-sm-4 col-md-4 col-lg-4
              grid-style-transition
            "
            :style="props.selected ? 'transform: scale(0.95);' : ''"
          >
            <q-card :class="props.selected ? 'bg-grey-2' : ''">
              <q-card-actions align="between">
                <div>
                  {{ props.row.name }}
                </div>
                <div class="q-gutter-x-xs">
                 <q-icon size="40px" name="event_available" />
                </div>
              </q-card-actions>

              <q-separator />
              <q-list dense>
                <q-item
                  v-for="col in props.cols.filter((col) => col.name !== 'desc')"
                  :key="col.name"
                >
                  <q-item-section>
                    <q-item-label>{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ col.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
        </template>
      </q-table>
 </div>
      </div>
      </q-page>
      </template>
      <script>
const columns = [
  {
    name: 'name',
    align: 'center',
    label: 'Employee Name',
    field: 'name',
    sortable: true,
  },
  {
    name: 'availableDay',
    label: 'Available Day',
    field: 'availableDay',
    sortable: true,
  },
  {
    name: 'availableTime',
    label: 'Available Time',
    field: 'availableTime',
  },
  { name: 'perClientTime', 
  label: 'Per Client Time', 
  field: 'perClientTime' 
  },
];

const rows = [
  {
    name: 'Azimah D. Ampuan',
    availableDay: 'Monday',
    availableTime: '10:00AM-01:00PM',
    perClientTime: '1 Hour',
  },
  {
    name: 'Rohma S. Carim',
    availableDay: 'Tuesday',
    availableTime: '08:00AM-01:00PM',
    perClientTime: '1 Hour',
  },
  {
    name: 'Inshidar P. Panganting',
    availableDay: 'Wednesday',
    availableTime: '01:00Pm-05:00PM',
    perClientTime: '30 Minutes',
  },
  {
    name: 'Reshyl B. Maruhom',
    availableDay: 'Thursday',
    availableTime: '10:00AM-01:00PM',
    perClientTime: '1 Hour',
  },
  {
    name: 'Norol Izzah A. Abdulrahim',
    availableDay: 'Friday',
    availableTime: '08:00AM-01:00PM',
    perClientTime: '1 Hour',
  },
];

export default {
  data() {
    return {
      options: ['Azimah D. Ampuan', 'Rohma S. Carim', 'Inshidar P. Panganting', 'Reshyl B. Maruhom', 'Norol izzah A. Abdulrahim'],
      dense: false,
      denseOpts: false,
      prompt: false,
      address: '',
      filter: '',
      selected: [],
      columns,
      rows,
      participant: {
        name: '',
        appointmentDate: '',
        timeSlots: '',
        purpose: '',
        clientName: '',
        phoneNumber: '',
        emailAdd: '',
        address: '',
      },
    };
  },

  
};
</script>
