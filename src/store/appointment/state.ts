
export interface manageAppointment {
    idNumber: string,
    employeeName:string,
    appointmentDate:string,
    appointmentTimeSlots:string,
    appointmentPurpose:string,
    appointmentClientName:string,
    appointmentPhoneNumber:string,
    appointmentEmailAddress:string,
    appointmentAddress:string,


}

export interface AppointmentStateInterface {
  appointments: manageAppointment[];
  activeAppointment?: manageAppointment;
}

function state(): AppointmentStateInterface {
  return {
    appointments: [
      {
        idNumber:'109',
        employeeName: 'Azimah D. Ampuan',
        appointmentDate: 'September 21, 2021',
        appointmentTimeSlots: '10:00AM-11:00AM',
        appointmentPurpose: 'Academic concerns',
        appointmentClientName: 'Sahanie D. Ampuan',
        appointmentPhoneNumber: '09615133065',
        appointmentEmailAddress: 'ampuann98@gmail.com',
        appointmentAddress: 'Marawi City',
      },
    ]
  }
};

export default state;
