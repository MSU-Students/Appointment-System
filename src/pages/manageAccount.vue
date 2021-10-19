<template>
  <q-page class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-grey-7">
        <q-card-section class="text-black">
          <div class="text-h7 text-bold">MSU Office of the Chancellor</div>
          <div class="text-h5 text-white">
            <q-icon name="arrow_upward" />
            EMPLOYEE ACCOUNTS
          </div>
        </q-card-section>
      </q-card>

      <br />
      <div class="q-px-xl q-pb-md absolute-top-bottom">
        <q-table
          title="Account List"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :rows-per-page-options="[6]"
          :filter="filter"
        >
          <template v-slot:top-right>
            <div class="q-pa-md q-gutter-sm row">
              <q-input
                outlined
                dense
                debounce="300"
                style="width: 300px"
                v-model="filter"
                placeholder="Search"
                color="black"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn
                color="black"
                text-color="white"
                label="Add Account"
                icon="add"
                @click="addUser = true"
              />
              <q-dialog v-model="addUser" persistent>
                <q-card style="width: 450px">
                  <q-toolbar>
                    <q-avatar>
                      <q-icon name="settings" size="md" />
                    </q-avatar>

                    <q-toolbar-title
                      ><span class="text-weight-bold">Add</span>
                      Accounts</q-toolbar-title
                    >

                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-toolbar>
                  <q-card-section class="q-gutter-sm flex flex-center">
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
                    outlined
                    v-model="participant.password"
                    label="password"
                    type="password"
                    style="width: 400px"
                    color="black"
                    bg-color="grey-4"
                    label-color="black"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                   </q-input>
                 <q-input
                    outlined
                    v-model="participant.confirmPassword"
                    label="Confirm password"
                    type="password"
                    style="width: 400px"
                    color="black"
                    bg-color="grey-4"
                    label-color="black"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
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
                      @click="addUser = false"
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </template>
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th auto-width />
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <div>
                <q-td>
                  <q-btn
                   
                    color="blue"
                    icon="edit"
                    size="sm"
                    flat
                    dense
                    @click="editRow = true"
                  />
                  <q-dialog v-model="editRow">
                <q-card style="width: 450px">
                  <q-toolbar>
                    <q-avatar>
                      <q-icon name="settings" />
                    </q-avatar>

                    <q-toolbar-title
                      ><span class="text-weight-bold">Add</span>
                      Accounts</q-toolbar-title
                    >

                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-toolbar>
                  <q-card-section class="q-gutter-sm flex flex-center">
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
                    outlined
                    v-model="participant.password"
                    label="password"
                    type="password"
                    style="width: 400px"
                    color="black"
                    bg-color="grey-4"
                    label-color="black"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                   </q-input>
                 <q-input
                    outlined
                    v-model="participant.confirmPassword"
                    label="Confirm password"
                    type="password"
                    style="width: 400px"
                    color="black"
                    bg-color="grey-4"
                    label-color="black"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                  </q-card-section>

                  <q-card-actions align="center" class="q-pr-lg q-pb-md">
                    <q-btn
                      color="white"
                      text-color="black"
                      size="md"
                      label="Edit"
                      
                    />
                    <q-btn
                      color="black"
                      text-color="white"
                      size="md"
                      label="Cancel"
                      @click="editRow = false"
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
                  <q-btn
                    color="red-10"
                    icon="delete"
                    size="sm"
                    class="q-ml-sm"
                    flat
                    round
                    dense
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </q-td>
              </div>

              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

interface IRow {
  name: string;
}

@Options({})
export default class ManageAccount extends Vue {
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Employee Name',
      align: 'left',
      field: (row: IRow) => row.name,
      format: (val: string) => `${val}`,
    },
    {
      name: 'dateCreated',
      align: 'center',
      label: 'Date Created',
      field: 'dateCreated',
    },
    { name: 'username', align: 'center', label: 'Username', field: 'username' },
    { name: 'password', align: 'center', label: 'Password', field: 'password' },
  ];
  rows = [
    {
      name: 'Azimah D. Ampuan',
      dateCreated: 'August 05,2019',
      username: 'azeeea12',
      password: 'ampuan',
    },
    {
      name: 'Azimah D. Ampuan',
      dateCreated: 'August 05,2019',
      username: 'azeeea12',
      password: 'ampuan',
    },
    {
      name: 'Azimah D. Ampuan',
      dateCreated: 'August 05,2019',
      username: 'azeeea12',
      password: 'ampuan',
    },
    {
      name: 'Azimah D. Ampuan',
      dateCreated: 'August 05,2019',
      username: 'azeeea12',
      password: 'ampuan',
    },
    {
      name: 'Azimah D. Ampuan',
      dateCreated: 'August 05,2019',
      username: 'azeeea12',
      password: 'ampuan',
    },
    {
      name: 'Azimah D. Ampuan',
      dateCreated: 'August 05,2019',
      username: 'azeeea12',
      password: 'ampuan',
    },
    {
      name: 'Azimah D. Ampuan',
      dateCreated: 'August 05,2019',
      username: 'azeeea12',
      password: 'ampuan',
    },
    {
      name: 'Azimah D. Ampuan',
      dateCreated: 'August 05,2019',
      username: 'azeeea12',
      password: 'ampuan',
    },
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  name = '';
  username = '';
  password = '';
  password2='';
  filter = '';
  text = '';
  isPwd = true;
  options = ['Azimah D. Ampuan', 'Norol Izzah A. Abdulrahim', 'Reshyl B. Maruhom'];

  dense = false;
  denseOpts = false;
  prompt = false;

  participant = {
    name: '',
    password: '',
    confirmPassword: ''
  };
   
  
}
</script>
