
export interface manageEmployee {
    idNumber: string,
    employeeName:string,
    employeeEmailAddress:string,
    employeePosition:string,
    employeeGender:string,
    employeeAddress:string,

}

export interface EmployeeStateInterface {
  employees: manageEmployee[];
  activeEmployee?: manageEmployee;
}

function state(): EmployeeStateInterface {
  return {
    employees: [
      {
        idNumber:'121',
        employeeName: 'Azimah D. Ampuan',
        employeeEmailAddress: '10:00AM-11:00AM',
        employeePosition: 'Academic concerns',
        employeeGender: 'Sahanie D. Ampuan',
        employeeAddress: '09615133065',
      },
    ]
  }
};

export default state;
