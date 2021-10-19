<template>
  <q-page class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-blue-grey">
        <q-card-section class="text-black">
          <div class="text-h7 text-bold">MSU Office of the Chancellor</div>
          <div class="text-h5 text-white">
            <q-icon name="arrow_upward" />
            SCHEDULES
          </div>
        </q-card-section>
      </q-card>
      <div class="q-pl-lg q-pa-md">
        <q-btn
          color="black"
          text-color="white"
          label="Add Schedules"
          icon-right="add"
          @click="prompt = true"
        />
      </div>
    

    <div>
      <q-dialog v-model="prompt" persistent>
        <q-card style="width: 480px">
          <q-toolbar>
            <q-avatar>
              <q-icon name="event_available" size="md" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Add</span>
              Schedules</q-toolbar-title
            >

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section class="q-gutter-md flex flex-center">


              <q-select
                standout
                v-model="participant.name"
                :options="options"
                :dense="dense"
                :options-dense="denseOpts"
                 color="black"
                 bg-color="grey-3"
                label="Employee Name"
                style="width: 400px"
                transition-show="scale"
                transition-hide="scale"
              />
                <q-input
              standout
              debounce="300"
              bg-color="grey-3"
              color="black"
              :dense="dense"
              type="date"
              style="width: 400px"
              label="Available Day"
            />
            <q-input
            outlined 
            v-model="time" 
            text-color="black"
            bg-color="grey-3" 
            type="time" 
            style="width:400px"
            label="Available time from"
            color="black"
            />
            <q-input
            outlined 
            v-model="time" 
            text-color="black"
            bg-color="grey-3" 
            type="time" 
            style="width:400px"
            label="Available time to"
            color="black"
            />
                <q-select
                  standout
                  v-model="participant.timeSlots"
                  :options="options"
                  :dense="dense"
                  :options-dense="denseOpts"
                  label="Per Client Time"
                  color="black"
                  bg-color="grey-3"
                  transition-show="scale"
                  transition-hide="scale"
                  style="width: 400px"
                />
                
          </q-card-section>


          <q-card-actions align="center" class="q-pr-lg q-pb-md">
            <q-btn
              color="white"
              text-color="black"
              size="md"
              label="Add"
              @click="addAppointment()"
            />
            <q-btn
              color="black"
              text-color="white"
              size="md"
              label="Cancel"
              @click="prompt = false"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

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
    availableDay: 'September 21, 2021',
    availableTime: '10:00AM-11:00AM',
    perClientTime: '1 Hour',
  },
  {
    name: 'Rohma S. Carim',
    availableDay: 'October 22, 2021',
    availableTime: '11:00AM-12:00PM',
    perClientTime: '30 Minutes',
  },
  {
    name: 'Inshidar P. Panganting',
    availableDay: 'December 23, 2021',
    availableTime: '01:00PM-02:00PM',
    perClientTime: '1 Hour and 30 minutes',
  },
  {
    name: 'Reshyl B. Maruhom',
    availableDay: 'September 23, 2021',
    availableTime: '11:00AM-12:00PM',
    perClientTime: '1 Hour',
  },
  {
    name: 'Azimah D. Ampuan',
    availableDay: 'September 21, 2021',
    availableTime: '10:00AM-11:00AM',
    perClientTime: '1 Hour',
  },
  {
    name: 'Rohma S. Carim',
    availableDay: 'October 22, 2021',
    availableTime: '11:00AM-12:00PM',
    perClientTime: '30 Minutes',
  },
  {
    name: 'Inshidar P. Panganting',
    availableDay: 'December 23, 2021',
    availableTime: '01:00PM-02:00PM',
    perClientTime: '1 Hour and 30 minutes',
  },
  {
    name: 'Reshyl B. Maruhom',
    availableDay: 'September 23, 2021',
    availableTime: '11:00AM-12:00PM',
    perClientTimee: '1 Hour',
  },
  {
    name: 'Azimah D. Ampuan',
    availableDay: 'September 21, 2021',
    availableTime: '10:00AM-11:00AM',
    perClientTime: '15 minutes',
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
      time: '',
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

  methods: {
    addAppointment() {
      this.rows.push(this.participant);
      this.prompt = false;
    },

    editAppointment() {},

    deleteAppointment() {
      this.$q
        .dialog({
          title: 'Delete',
          message: 'Are you sure you want to delete?',
          color: 'red',
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          // console.log('>>>> OK')
        });
    },
  },
};
</script>
