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
          @click="activeUser=true"
        />
      </div>


    <div>
      <q-dialog v-model="activeUser" persistent>
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
<q-input
              bg-color="grey-3"
              color="black"
              outlined
              label="Id Number"
              v-model="presentSchedule.idNumber"
              style="width: 400px"
            />
              <q-select
                standout
                v-model="presentSchedule.scheduleSetter"
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
              v-model="presentSchedule.availableDay"
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
            v-model="presentSchedule.availableTimeFrom"
            text-color="black"
            bg-color="grey-3"
            type="time"
            style="width:400px"
            label="Available time from"
            color="black"
            />
            <q-input
            outlined
            v-model="presentSchedule.availableTimeTo"
            text-color="black"
            bg-color="grey-3"
            type="time"
            style="width:400px"
            label="Available time to"
            color="black"
            />
                <q-select
                  standout
                  v-model="presentSchedule.perClientTime"
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


          <q-card-actions align="center" class="q-pr-lg q-pb-lg">
            <q-btn
              color="white"
              text-color="black"
              size="md"
              label="Add"
              @click="onNewSchedule()"
            />
            <q-btn
              color="black"
              text-color="white"
              size="md"
              label="Cancel"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

   <div class="q-px-xl q-pb-md absolute-top-bottom">
      <q-table
        :rows="schedules"
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
                  {{ props.row.scheduleSetter }}
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

<script lang="ts">
import { manageSchedule } from 'src/store/schedule/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

//interface IRow {
//name: string;
//}
@Options({
  computed: {
    ...mapState('schedule', ['schedules', 'activeSchedule']),
  },
  methods: {
    ...mapActions('scheduel', ['newSchedule', 'editSchedule', 'deleteSchedule'])
  }
})

//@Options({})
export default class ManageAccount extends Vue {

  schedules!: manageSchedule[];
  newSchedule!: (schedule: manageSchedule) => Promise<void>;
  editAccount!: (schedule: manageSchedule) => Promise<void>;
  deleteAccount!: (schedule: manageSchedule) => Promise<void>;

  columns = [
    {
      name: 'scheduleSetter',
      required: true,
      label: 'Employee Name',
      align: 'left',
      field: (row: manageSchedule) => row.scheduleSetter,
      format: (val: string) => `${val}`,
    },
    {
      name: 'availableDay',
      align: 'center',
      label: 'available Day',
      field: 'availableDay',
    },
    { name: 'availableTimeFrom', align: 'center', label: 'Available Time From', field: 'availableTimeFrom' },
    { name: 'availableTimeTo', align: 'center', label: 'Available Time To', field: 'availableTimeTo' },
    { name: 'perClientTime', align: 'center', label: 'perClientTime', field: 'perClientTime' },

  ];
  confirmDelete = false;
  cancelEnabled = true;
  dialog = false;
  addUser = false;
  activeUser = false;
  editRow = false;
  selected= [];
  //name = '';
  //username = '';
  //password = '';
  //password2 = '';
  //filter = '';
  //text = '';
  isPwd = true;
  options = [
    'Azimah D. Ampuan',
    'Norol Izzah A. Abdulrahim',
    'Reshyl B. Maruhom',
  ];

  dense = false;
  denseOpts = false;
  prompt = false;

  defaultSchedule: manageSchedule = {
    idNumber: '',
    scheduleSetter: '',
    availableDay: '',
    availableTimeFrom: '',
    availableTimeTo: '',
    perClientTime: '',

  }
  presentSchedule = { ...this.defaultSchedule };
  filter = '';
  onNewSchedule() {
    this.presentSchedule = { ...this.defaultSchedule };
    //this.editRow = false;
    this.activeUser = false;
  }

  onEditSchedule(schedule: manageSchedule) {
    this.presentSchedule = { ...schedule };
    this.editRow = false;
    this.activeUser = true;
  }
  onDeleteSchedule(schedule: manageSchedule) {
    this.presentSchedule = { ...schedule };
    this.confirmDelete = true;
  }

  async onSaveSchedule() {
    await this.newSchedule(this.presentSchedule);
    //this.editRow = true;
    this.activeUser=false;



    }// else {
     // await this.editSchedule(this.presentSchedule);
    }

 //// async onConfirmDelete() {
   // await this.deleteSchedule(this.presentSchedule);
  //  this.confirmDelete = false;
 // }
//}
</script>
