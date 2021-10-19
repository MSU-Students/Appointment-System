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
      <div class="q-pl-lg q-pa-md">
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
        <q-card style="width: 480px">
          <q-toolbar>
            <q-avatar>
              <q-icon name="assignment" size="md" />
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
                 <q-input
                  bg-color="grey-3"
                  color="black"
                  outlined
                  v-model="participant.designation"
                  label="Position/Designation"
                  style="width: 400px"
                />
                 <q-input
                  bg-color="grey-3"
                  color="black"
                  outlined
                  v-model="participant.agency"
                  label="Agency/Office"
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
                <q-btn outline label="APPROVED" color="Black" v-close-popup />
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
        designation: '',
        agency:'',
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
