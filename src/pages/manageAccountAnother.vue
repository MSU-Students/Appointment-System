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
<div class="q-px-xl q-pt-md absolute-top-bottom">
      <q-table
        title="Account List"
        :rows="accounts"
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
              <q-btn @click="onNewAccount()" icon="add" color="black" text-color="white">Add Account</q-btn>
          </div>
        </template>

        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <div class="q-gutter-sm">

              <q-btn
                round
                color="green-4"
                icon="edit"
                size="sm"
                flat
                dense
                @click="onEditAccount(props.row)"
              />

              <q-btn
                color="red-10"
                icon="delete"
                size="sm"
                class="q-ml-sm"
                flat
                round
                dense
                @click="onDeleteAccount(props.row)"
              />
              <q-dialog v-model="activeUser" persistent>
                <q-card style="width: 450px">
                    <q-toolbar>
                      <q-avatar>
                        <q-icon name="settings" size="md" />
                      </q-avatar>

                      <q-toolbar-title>
                        <span class="text-weight-bold" v-if="editRow"
                          >Edit</span
                        >
                        <span class="text-weight-bold" v-else>Add</span>
                        Accounts</q-toolbar-title
                      >

                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-toolbar>
                    <q-card-section class="q-gutter-sm">
                       <q-input
              bg-color="grey-3"
              color="black"
              outlined
              label="id Number"
              v-model="presentAccount.idNumber"
              style="width: 400px"
            />
                      <q-select
                        standout
                        v-model="presentAccount.employeeName"
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
              v-model="presentAccount.employeeDate"
              debounce="300"
              bg-color="grey-3"
              color="black"
              :dense="dense"
              type="date"
              style="width: 400px"
              label="Date Created"
            />
                      <q-input
              bg-color="grey-3"
              color="black"
              outlined
              label="Username"
              v-model="presentAccount.employeeUser"
              style="width: 400px"
            />
                      <q-input
                        outlined
                        v-model="presentAccount.employeePassword"
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
                    </q-card-section>
                  <q-card-actions align="right" class="q-pr-lg q-pb-lg flex flex-center">
                    <q-btn label="Cancel" color="black" text-color="white" size= "md" v-close-popup />
                    <q-btn
                      label="Save"
                      color="white"
                      text-color="black"
                      size="md"
                      @click="onSaveAccount"
                      v-close-popup
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-dialog v-model="confirmDelete" persistent>
                <q-card style="width: 300px">
                  <q-card-section class="row items-center">
                    <q-avatar
                      size="sm"
                      icon="warning"
                      color="red-10"
                      text-color="white"
                    />
                    <span class="q-ml-sm"
                      >Confirm Delete {{ presentAccount.employeeName }}?</span
                    >
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
                      @click="onCofirmDelete"
                      color="primary"
                      v-close-popup
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-td>
        </template>
      </q-table>
</div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { manageAccount } from 'src/store/account/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('account', ['accounts', 'activeAccount']),
  },
  methods: {
    ...mapActions('account', ['newAccount', 'editaccount', 'deleteAccount']),
  },
})
export default class ManageAccount extends Vue {
  //vuex properties
  accounts!: manageAccount[];
  newAccount!: (account: manageAccount) => Promise<void>;
  editAccount!: (account: manageAccount) => Promise<void>;
  deleteAccount!: (account: manageAccount) => Promise<void>;
  //local
  columns = [
    {
      name: 'employeeName',
      required: true,
      label: 'Employee Name',
      align: 'left',
      field: (row: manageAccount) => row.employeeName,
      format: (val: string) => `${val}`,
    },
    {
      name: 'employeeDate',
      align: 'center',
      label: 'Date Created',
      field: 'employeeDate',
    },
    {
      name: 'employeeUser',
      align: 'center',
      label: 'Username',
      field: 'employeeUser',
    },
    {
      name: 'employeePassword',
      align: 'center',
      label: 'Password',
      field: 'employeePassword',
    },



    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  dense = false;
  denseOpts = false;
  isPwd = true;
  defaultAccount: manageAccount = {
    idNumber: '',
    employeeName: '',
    employeeDate: ' ',
    employeeUser: '',
    employeePassword: '',

  };
  presentAccount = { ...this.defaultAccount };
  filter = '';
  options = ['Azimah', 'Sahanie'];

  onNewAccount() {
    this.presentAccount = { ...this.defaultAccount };
    this.editRow = false;
    this.activeUser = true;
  }

  onEditAccount(account: manageAccount) {
    this.presentAccount = { ...account };
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteAccount(account: manageAccount) {
    this.presentAccount = { ...account };
    this.confirmDelete = true;
  }

  async onSaveAccount() {
    if (!this.editRow) {
      await this.newAccount(this.presentAccount);
    } else {
      await this.editAccount(this.presentAccount);
    }
  }
  async onCofirmDelete() {
    await this.deleteAccount(this.presentAccount);
    this.confirmDelete = false;
  }
}
</script>
