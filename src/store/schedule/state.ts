export interface manageSchedule {
  idNumber: string,
  scheduleSetter:  string,
  availableDay: string,
  availableTimeFrom: string,
  availableTimeTo:string,
  perClientTime: string,
}

export interface ScheduleStateInterface {
  schedules: manageSchedule[];
  activeSchedules?: manageSchedule;
}

function state(): ScheduleStateInterface {
  return {
    schedules: [
      {
        idNumber:'121',
        scheduleSetter: 'Azimah D. Ampuan',
        availableDay: 'September 21, 2021',
        availableTimeFrom: '10:00AM',
        availableTimeTo: '11:00AM',
        perClientTime: '1 Hour',
      },
      {
        idNumber:'122',
        scheduleSetter: 'Rohma S. Carim',
        availableDay: 'October 22, 2021',
        availableTimeFrom: '11:00AM',
        availableTimeTo: '12:00AM',
        perClientTime: '30 Minutes',
      },
      {
        idNumber:'123',
        scheduleSetter: 'Inshidar P. Panganting',
        availableDay: 'December 23, 2021',
        availableTimeFrom: '01:00PM',
        availableTimeTo: '02:00PM',
        perClientTime: '1 Hour and 30 minutes',
      },
    ]
}
};

export default state;
