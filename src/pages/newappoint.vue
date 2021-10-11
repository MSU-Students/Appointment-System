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
      <div class="q-pl-lg q-pt-sm">
        <q-btn
          color="black"
          text-color="white"
          label="Add Appointment"
          icon-right="add"
          @click="prompt = true"
        />
      </div>
    

    <div>
      <q-dialog v-model="prompt" persistent>
        <q-card style="width: 600px">
          <q-toolbar>
            <q-avatar>
              <q-icon name="book_online" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Add</span>
              Appointment</q-toolbar-title
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
                  bg-color="grey-3"
                  color="black"
                  outlined
                  v-model="participant.appointmentDate"
                  label="Appointment Date"
                  type="date"
                  style="width: 400px"
                />
                <q-select
                  standout
                  v-model="participant.timeSlots"
                  :options="options"
                  :dense="dense"
                  :options-dense="denseOpts"
                  label="Time Slots"
                  color="black"
                  bg-color="grey-3"
                  transition-show="scale"
                  transition-hide="scale"
                  style="width: 400px"
                />
                <q-input
                  bg-color="grey-3"
                  color="black"
                  outlined
                  v-model="participant.purpose"
                  label="Purpose"
                  type="textarea"
                  style="width: 400px"
                />
                <q-input
                  bg-color="grey-3"
                  color="black"
                  outlined
                  v-model="participant.clientName"
                  label="Client Name"
                  style="width: 400px"
                />
                <q-input
                  bg-color="grey-3"
                  color="black"
                  outlined
                  v-model="participant.phoneNumber"
                  label="Phone No."
                  style="width: 400px"
                />
                <q-input
                  bg-color="grey-3"
                  color="black"
                  outlined
                  label="Email"
                  v-model="participant.emailAdd"
                  style="width: 400px"
                />
                <q-input
                  bg-color="grey-3"
                  color="black"
                  outlined
                  v-model="participant.address"
                  label="Address"
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
        :rows-per-page-options="[3]"
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
                  <q-btn
                    color="blue"
                    icon="edit"
                    flat
                    round
                    @click="editAppointment()"
                  />
                  <q-btn
                    color="red-10"
                    icon="delete"
                    dense
                    flat
                    @click="deleteAppointment()"
                  />
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
  {
    name: 'purpose',
    label: 'Purpose',
    field: 'purpose',
  },
  { name: 'clientName', label: 'Client Name', field: 'clientName' },
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
];

const rows = [
  {
    name: 'Azimah D. Ampuan',
    appointmentDate: 'September 21, 2021',
    timeSlots: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    clientName: 'Sahanie D. Ampuan',
    phoneNumber: '09615133065',
    emailAdd: 'ampuann98@gmail.com',
    address: 'Marawi City',
  },
  {
    name: 'Rohma S. Carim',
    appointmentDate: 'October 22, 2021',
    timeSlots: '11:00AM-12:00PM',
    purpose: 'Personal Issues',
    clientName: 'Reshyl B. Maruhom',
    phoneNumber: '09300546789',
    emailAdd: 'reshyl123@gmail.com',
    address: 'MSU Marawi City',
  },
  {
    name: 'Inshidar P. Panganting',
    appointmentDate: 'December 23, 2021',
    timeSlots: '01:00PM-02:00PM',
    purpose: 'Academic Issues',
    clientName: 'Norol izaah A. Abdulrahim',
    phoneNumber: '09543244455',
    emailAdd: 'norol876@gmail.com',
    address: 'Bacolod Chico',
  },
  {
    name: 'Reshyl B. Maruhom',
    appointmentDate: 'September 23, 2021',
    timeSlots: '11:00AM-12:00PM',
    purpose: 'Academic concerns',
    clientName: 'Jalilah B. Macairing',
    phoneNumber: '09456543445',
    emailAdd: 'macairing8@gmail.com',
    address: 'Marantao Lanao Del Sur',
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
