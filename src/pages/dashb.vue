/* eslint-disable @typescript-eslint/no-unsafe-member-access */
<template>
  <q-page class="bg-image">
    <div class="col q-col-gutter-md q-mr-sm absolute-center"></div>
    <div class="q-pa-xl">
      <div class="q-pt-xl">
        <div class="q-pl-lg">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card style="width: 400px">
              <q-card-section
                :class="$q.dark.isActive ? 'brown' : 'bg-brown-5'"
                class="text-white"
                style="height: 150px"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="text-h5">Appointments</div>
                    <div class="text-h4 text-bold">32</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="65px" name="assignment" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
     
    

    <div class="q-pt-md">
      <div class="q-pl-lg">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <q-card style="width: 400px">
            <q-card-section
              :class="$q.dark.isActive ? 'black' : 'bg-warning'"
              class="text-black"
              style="height: 150px"
            >
              <div class="row">
                <div class="col-10">
                  <div class="text-h5">Employee</div>
                  <div class="text-h4 text-bold">18</div>
                </div>
                <div class="col-2">
                  <q-icon size="65px" name="people" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="q-pt-md">
      <div class="q-pl-lg">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <q-card style="width: 400px">
            <q-card-section
              :class="$q.dark.isActive ? 'warning' : 'bg-secondary'"
              class="text-white"
              style="height: 150px"
            >
              <div class="row">
                <div class="col-10">
                  <div class="text-h5">Schedules</div>
                  <div class="text-h4 text-bold">24</div>
                </div>
                <div class="col-2">
                  <q-icon size="65px" name="event_available" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="absolute-right q-pr-xl">
      <div class="q-pr-xl">
      <div class="q-pa-md">
         <div class="q-pt-xl q-pt-md">
        <q-table
          class="my-sticky-header-column-table"
          title="Ongoing Appointments:"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :rows-per-page-options="[8]"
          :filter="filter"
        />
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  </q-page>
</template>

<script lang="ts">

interface IRow {
  name: string;
}
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Appointments',
    align: 'left',
    field: (row: IRow) => row.name,
    format: (val: string) => `${val}`,
    sortable: true,
  },
  {
    name: 'Employee',
    align: 'center',
    label: 'Employee',
    field: 'Employee',
    sortable: true,
  },
  {
    name: 'Schedule',
    align: 'center',
    label: 'Scehdule',
    field: 'Schedule',
    sortable: true,
  },
  {
    name: 'Time',
    align: 'center',
    label: 'Time',
    field: 'Time',
    sortable: true,
  },
  { name: 'Day', align: 'center', label: 'Day', field: 'Day', sortable: true },
];

const rows = [
  {
    name: 'Inquiry',
    Employee: 'Ms. Azimah Ampuan',
    Schedule: 'Sept. 02, 2021',
    Time: '10:00 A.M.',
    Day: 'Monday',
  },
  {
    name: 'Personal Matter',
    Employee: 'Ms. Rohma Carim',
    Schedule: 'August. 18, 2021',
    Time: '02:00 P.M.',
    Day: 'Thursday',
  },
  {
    name: 'Concerns',
    Employee: 'Ms. Reshyl Maruhom',
    Schedule: 'October. 21, 2021',
    Time: '11:00 A.M.',
    Day: 'Tuesday',
  },
  {
    name: 'Others',
    Employee: 'Ms. Norol izzah Abdulrahim',
    Schedule: 'Nov. 30, 2021',
    Time: '08:00 A.M.',
    Day: 'Wednesday',
  },
  {
    name: 'Personal Issues',
    Employee: 'Ms. Jalilah Macairing',
    Schedule: 'March. 24, 2021',
    Time: '01:00 P.M.',
    Day: 'Thursday',
  },
  {
    name: 'Academic Concerns',
    Employee: 'Ms. jawharah Saripada',
    Schedule: 'Jan. 16, 2021',
    Time: '04:00 P.M.',
    Day: 'Monday',
  },
  {
    name: 'Academic Issues',
    Employee: 'Ms. Sahanie Ampuan',
    Schedule: 'feb. 26, 2021',
    Time: '09:00 A.M.',
    Day: 'Tuesday',
  },
  {
    name: 'Concerns',
    Employee: 'Mr. Arham Ampuan',
    Schedule: 'July 22, 2021',
    Time: '03:00 P.M.',
    Day: 'Friday',
  },
  {
    name: 'Academic Concerns',
    Employee: 'Ms. jawharah Saripada',
    Schedule: 'Jan. 16, 2021',
    Time: '04:00 P.M.',
    Day: 'Monday',
  },
  {
    name: 'Academic Issues',
    Employee: 'Ms. Sahanie Ampuan',
    Schedule: 'feb. 26, 2021',
    Time: '09:00 A.M.',
    Day: 'Tuesday',
  },
];

export default {
  setup() {
    return {
      filter: '',
      columns,
      rows,
    };
  },
};
</script>
<style lang="sass">
.my-sticky-header-column-table
  /* height or max-height is important */
  height: 550px

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  width: 670px

  td:first-child
    /* bg color is important for td; just specify one */
    background-color: #21ba45 !important

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #fff

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>
