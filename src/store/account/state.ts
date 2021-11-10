
export interface manageAccount {
    idNumber: string,
    employeeName:string,
    employeeDate:string,
    employeeUser:string,
    employeePassword:string,
}

export interface AccountStateInterface {
  accounts: manageAccount[];
  activeAccount?: manageAccount;
}

function state(): AccountStateInterface {
  return {
    accounts: [
      {
        idNumber: '000',
        employeeName: 'kim ',
        employeeDate: 'soo ',
        employeeUser: 'hyun',
        employeePassword: 'Islam',
      },
      {
        idNumber: '100',
        employeeName: 'kim so hyun',
        employeeDate: 'soo ',
        employeeUser: 'hyun',
        employeePassword: 'Islam',

      },
    ]
  }
};

export default state;
