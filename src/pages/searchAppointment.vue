<template>
  <q-page class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-blue-grey">
        <q-card-section class="text-black">
          <div class="text-h7 text-bold">MSU Office of the Chancellor</div>
          <div class="text-h5 text-white">
            <q-icon name="arrow_upward" />
            SEARCH APPOINTMENTS
          </div>
        </q-card-section>
      </q-card>

      <div class="q-px-xl q-pb-md absolute-top-bottom q-pt-lg">
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="name"
          :rows-per-page-options="[6]"
          :filter="filter"
        >
          <template v-slot:top-left>
            <q-select
              class="q-pt-md on-right"
              standout
              v-model="filter"
              :options="options"
              :dense="dense"
              :options-dense="denseOpts"
              bg-color="blue-grey-3"
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
                  class="text-bold bg-white text-black"
                  text-outlined="white"
                />
              </template>

            </q-select>
          </template>

          <template v-slot:top-right>
            <q-input
            class="q-pr-md q-pt-md"
              standout
              debounce="300"
              v-model="filter"
              bg-color="blue-grey-2"
              :dense="dense"
              type="date"
              style="width: 400px"
              placeholder="Appointment Date"
            >
              <template v-slot:before>
                <div class="text-body2">Appointment Date</div>
              </template>
            </q-input>
          </template>
        </q-table>

      </div>
    </div>
  </q-page>
</template>
<script>
import { ref, computed } from 'vue';

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
    align: 'center',
    label: 'Appointment Date',
    field: 'appointmentDate',
    sortable: true,
  },
  {
    name: 'timeSlots',
    align: 'center',
    label: 'Time Slots',
    field: 'timeSlots',
  },
  {
    name: 'purpose',
    align: 'center',
    label: 'Purpose',
    field: 'purpose',
  },
  {
    name: 'clientName',
    align: 'center',
    label: 'Client Name',
    field: 'clientName',
  },
  {
    name: 'phoneNumber',
    align: 'center',
    label: 'Phone No.',
    field: 'phoneNumber',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'emailAdd',
    align: 'center',
    label: 'Email',
    field: 'emailAdd',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'address',
    align: 'center',
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
   {
    name: 'Norol izzah A. Abdulrahim',
    appointmentDate: 'August 23, 2021',
    timeSlots: '10:00AM-12:00PM',
    purpose: 'Personal issues',
    clientName: 'Jawharah Saripada',
    phoneNumber: '09345433212',
    emailAdd: 'jawe58@gmail.com',
    address: 'Iligan City',
  },
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
    name: 'Norol izzah A. Abdulrahim',
    appointmentDate: 'August 23, 2021',
    timeSlots: '10:00AM-12:00PM',
    purpose: 'Personal issues',
    clientName: 'Jawharah Saripada',
    phoneNumber: '09345433212',
    emailAdd: 'jawe58@gmail.com',
    address: 'Iligan City',
  },
];

export default {
  setup() {
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 5,
      rowsPerPage: 6,
      // rowsNumber: xx if getting data from a server
    });

    return {
      filter: ref(''),
      dense: ref(false),
      options: [
        'Azimah D. Ampuan',
        'Rohma S. Carim',
        'Inshidar P. Panganting',
        'Reshyl B. Maruhom',
        'Norol Izzah A. Abdulrahim',
              ],
      denseOpts: false,
      pagination,
      columns,
      rows,

      pagesNumber: computed(() =>
        Math.ceil(rows.length / pagination.value.rowsPerPage)
      ),
    };
  },
};
</script>
