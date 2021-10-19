<template>
  <q-page class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-teal-7">
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
        :rows-per-page-options="[3]"
        selection="multiple"
        v-model:selected="selected"
        :filter="filter"
        grid
        hide-header
      >
       <template v-slot:top-left>
            <q-input
            class="q-pr-md q-pt-md q-pa-md"
              standout
              debounce="300"
              v-model="filter"
              label="Appointment Date"
              color="black"
              bg-color="white"
              :dense="dense"
              type="date"
              style="width: 450px"
              placeholder="Appointment Date"
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
            </q-input>
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
                <q-btn outline dense label="CONFIRM" class="bg-black text-white" v-close-popup />
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
  {
    name: 'purpose',
    label: 'Purpose',
    field: 'purpose',
  },
  { name: 'name', label: 'Client Name', field: 'name' },
  {
    name: 'phoneNumber',
    label: 'Phone No.',
    field: 'phoneNumber',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'emailAdd',
    label: 'Email',
    field: 'emailAdd',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'address',
    label: 'Address',
    field: 'address',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'positionDesignation',
    label: 'Position/Designation',
    field: 'positionDesignation',
  },
  {
    name: 'agencyOffice',
    label: 'Agency/Office',
    field: 'agencyOffice',
  },
];

const rows = [
  {
    appointmentDate: 'September 21, 2021',
    timeSlots: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    name: 'Sahanie D. Ampuan',
    phoneNumber: '09615133065',
    emailAdd: 'ampuann98@gmail.com',
    address: 'Marawi City',
    positionDesignation:'Employee',
    agencyOffice:'Marawi City Hall'
  },
  {
    appointmentDate: 'October 22, 2021',
    timeSlots: '11:00AM-12:00PM',
    purpose: 'Personal Issues',
    name: 'Reshyl B. Maruhom',
    phoneNumber: '09300546789',
    emailAdd: 'reshyl123@gmail.com',
    address: 'MSU Marawi City',
    positionDesignation:'Baloi LDS',
    agencyOffice:'None'
  },
  {
    appointmentDate: 'December 23, 2021',
    timeSlots: '01:00PM-02:00PM',
    purpose: 'Academic Issues',
    name: 'Norol izaah A. Abdulrahim',
    phoneNumber: '09543244455',
    emailAdd: 'norol876@gmail.com',
    address: 'Bacolod Chico',
    positionDesignation:'Employee',
    agencyOffice:'New Capitol Marawi City'
  },
  {
    appointmentDate: 'September 23, 2021',
    timeSlots: '11:00AM-12:00PM',
    purpose: 'Academic concerns',
    name: 'Jalilah B. Macairing',
    phoneNumber: '09456543445',
    emailAdd: 'macairing8@gmail.com',
    address: 'Marantao Lanao Del Sur',
    positionDesignation:'Employee',
    agencyOffice:'MSU Marawi City'
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
