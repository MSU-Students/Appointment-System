<template>
  <q-page class="bg-image">
    <div class="q-pa-lg">
      <q-card class="bg-secondary">
        <q-card-section class="text-black">
          <div class="text-h7 text-bold">MSU Office of the Chancellor</div>
          <div class="text-h5 text-white">
            <q-icon name="arrow_upward" />
            EMPLOYEE PROFILE
          </div>
        </q-card-section>
      </q-card>
      <div class="q-pl-lg q-pt-sm q-pa-md">
        <q-btn
          color="black"
          text-color="white"
          label="Add Employee"
          icon-right="add"
          @click="prompt = true"
        />
      </div>
    
    <div>
      <q-dialog v-model="prompt" persistent>
        <q-card style="width: 450px">
          <q-toolbar>
            <q-avatar>
              <q-icon name="book_online" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Add</span>
              Employee</q-toolbar-title
            >

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>
          <q-card-section class="q-gutter-sm flex flex-center">
            <q-input
              bg-color="grey-3"
              color="black"
              outlined
              label="Full Name"
              v-model="participant.name"
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
              v-model="participant.position"
              label="Position"
              style="width: 400px"
            />
            <q-select
              standout
              v-model="participant.gender"
              :options="options"
              :dense="dense"
              :options-dense="denseOpts"
              color="black"
              bg-color="grey-3"
              label="Gender"
              style="width: 400px"
              transition-show="scale"
              transition-hide="scale"
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
                    size="md"
                    flat
                    round
                    @click="editAppointment()"
                  />
                  <q-btn
                    color="red-10"
                    icon="delete"
                    size="md"
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
    label: 'Full Name',
    field: 'name',
    sortable: true,
  },
  {
    name: 'emailAdd',
    label: 'Email',
    field: 'emailAdd',
  },
  {
    name: 'position',
    label: 'Position',
    field: 'position',
  },
  { name: 'gender', 
  label: 'Gender', 
  field: 'gender' },
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
    emailAdd: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    position: 'Sahanie D. Ampuan',
    gender: '09615133065',
    address: 'ampuann98@gmail.com',
    
  },
  {
    name: 'Azimah D. Ampuan',
    emailAdd: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    position: 'Sahanie D. Ampuan',
    gender: '09615133065',
    address: 'ampuann98@gmail.com',
    
  },
  {
    name: 'Azimah D. Ampuan',
    emailAdd: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    position: 'Sahanie D. Ampuan',
    gender: '09615133065',
    address: 'ampuann98@gmail.com',
    
  },
  {
    name: 'Azimah D. Ampuan',
    emailAdd: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    position: 'Sahanie D. Ampuan',
    gender: '09615133065',
    address: 'ampuann98@gmail.com',
    
  },
  {
    name: 'Azimah D. Ampuan',
    emailAdd: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    position: 'Sahanie D. Ampuan',
    gender: '09615133065',
    address: 'ampuann98@gmail.com',
    
  },
  {
    name: 'Azimah D. Ampuan',
    emailAdd: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    position: 'Sahanie D. Ampuan',
    gender: '09615133065',
    address: 'ampuann98@gmail.com',
    
  },
];

export default {
  data() {
    return {
      options: ['Male', 'Female'],
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
       emailAdd: '',
        position: '',
        gender: '',
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
