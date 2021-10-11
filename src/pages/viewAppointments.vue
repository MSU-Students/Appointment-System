<template>
  <q-page class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-secondary">
        <q-card-section class="text-black">
          <div class="text-h7 text-bold">MSU Office of the Chancellor</div>
          <div class="text-h5 text-white">
            <q-icon name="arrow_upward" />
            ONGOING APPOINTMENTS
          </div>
        </q-card-section>
      </q-card>
   

    <div class="q-px-xl q-pb-md absolute-top-bottom">
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
              class="q-pa-xs on-right"
              standout
              v-model="filter"
              :options="options"
              :dense="dense"
              :options-dense="denseOpts"
              bg-color="teal-1"
              style="width: 480px"
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
                  class="text-bold bg-white text-black"
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
                 <q-icon size="40px" name="assignment" />
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
    name: 'appointmentDate',
    label: 'Appointment Date',
    field: 'appointmentDate',
    sortable: true,
  },
  {
    name: 'timeSlots',
    label: 'Time Slots',
    field: 'timeSlots',
  },
  
  { name: 'clientName', 
  label: 'Client Name', 
  field: 'clientName' 
  },
];

const rows = [
  {
    name: 'Azimah D. Ampuan',
    appointmentDate: 'September 21, 2021',
    timeSlots: '10:00AM-11:00AM',
    clientName: 'Sahanie D. Ampuan',
  },
  {
    name: 'Rohma S. Carim',
    appointmentDate: 'October 22, 2021',
    timeSlots: '11:00AM-12:00PM',
    clientName: 'Reshyl B. Maruhom',
  },
  {
    name: 'Inshidar P. Panganting',
    appointmentDate: 'December 23, 2021',
    timeSlots: '01:00PM-02:00PM',
    clientName: 'Norol izaah A. Abdulrahim',
  },
  {
    name: 'Reshyl B. Maruhom',
    appointmentDate: 'September 23, 2021',
    timeSlots: '11:00AM-12:00PM',
    clientName: 'Jalilah B. Macairing',
  },
  {
    name: 'Reshyl B. Maruhom',
    appointmentDate: 'September 23, 2021',
    timeSlots: '11:00AM-12:00PM',
    clientName: 'Jalilah B. Macairing',
  },
  {
    name: 'Rohma S. Carim',
    appointmentDate: 'October 22, 2021',
    timeSlots: '11:00AM-12:00PM',
    clientName: 'Reshyl B. Maruhom',
  },
   {
    name: 'Inshidar P. Panganting',
    appointmentDate: 'December 23, 2021',
    timeSlots: '01:00PM-02:00PM',
    clientName: 'Norol izaah A. Abdulrahim',
  },
  {
    name: 'Azimah D. Ampuan',
    appointmentDate: 'September 21, 2021',
    timeSlots: '10:00AM-11:00AM',
    clientName: 'Sahanie D. Ampuan',
  },
];

export default {
  data() {
    return {
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
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
