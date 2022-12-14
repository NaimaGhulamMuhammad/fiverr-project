const APPOINTMENTS = [
  {
    id: "a1",
    branchId: "1",
    isVirtual: true,
    title: "Appointment with Dr. New",
    notes: "Tummy and Elbows",
    notifications: [
      {
        id: "1",
        key: "sms",
        timeAmountBefore: 3,
        timeUnitBefore: "days",
        data: {
          sms: "Please remember to bring your records",
          smsTipTap: "Please remember to bring your records",
        },
      },
    ],
    startDateTimeUTC: "2022-06-07T08:00:00Z",
    endDateTimeUTC: "2022-06-07T09:00:00Z",
    organizerId: "asd",
    attendees: [
      {
        id: "1",
        entityId: "d1",
        key: "doctor",
        confirmed: true,
      },
      {
        id: "pt1",
        entityId: "asd",
        key: "patient",
        confirmed: true,
      },
      {
        id: "3",
        entityId: "r1",
        key: "room",
        confirmed: true,
      },
      {
        id: "4",
        entityId: "d2",
        key: "doctor",
        confirmed: true,
      },
    ],
    status: "cancelled",
    // status: PatientVisitStatus.WAITING_ARRIVAL,
    location: "747 52nd St. Oakland, CA 94609",
  },
  {
    id: "a2",
    branchId: "1",
    isVirtual: true,
    title: "Appointment with Dr. Good",
    notes: "Tummy",
    notifications: [],
    startDateTimeUTC: "2022-06-06T03:00:00Z",
    endDateTimeUTC: "2022-06-06T04:00:00Z",
    organizerId: "asd",
    attendees: [
      {
        id: "2",
        entityId: "d1",
        key: "doctor",
        confirmed: true,
      },
      {
        id: "pt1",
        entityId: "asd",
        key: "patient",
        confirmed: true,
      },
      {
        id: "3",
        entityId: "r1",
        key: "room",
        confirmed: true,
      },
    ],
    status: "completed",
    // status: PatientVisitStatus.WAITING_ARRIVAL,
    location: "",
  },
  {
    id: "a3",
    branchId: "1",
    isVirtual: false,
    title: "Appointment with Dr. Good",
    notes: "Tummy",
    notifications: [],
    startDateTimeUTC: "2022-06-09T01:00:00Z",
    endDateTimeUTC: "2022-06-09T02:00:00Z",
    organizerId: "asd",
    attendees: [
      {
        id: "1",
        entityId: "d2",
        key: "doctor",
        confirmed: true,
      },
      {
        id: "pt1",
        entityId: "asd",
        key: "patient",
        confirmed: true,
      },
    ],
    status: "cancelled",
    // status: PatientVisitStatus.WAITING_ARRIVAL,
    location: "747 52nd St. Oakland, CA 94609",
  },
  {
    id: "a4",
    branchId: "1",
    isVirtual: false,
    title: "Appointment with Dr. Good",
    notes: "Tummy",
    notifications: [],
    startDateTimeUTC: "2022-07-07T02:00:00Z",
    endDateTimeUTC: "2022-07-07T02:30:00Z",
    organizerId: "asd",
    attendees: [
      {
        id: "2",
        entityId: "d3",
        key: "doctor",
        confirmed: true,
      },
      {
        id: "pt1",
        entityId: "asd",
        key: "patient",
        confirmed: true,
      },
    ],
    status: "completed",
    // status: PatientVisitStatus.WAITING_ARRIVAL,
    location: "747 52nd St. Oakland, CA 94609",
  },
  {
    id: "a5",
    branchId: "1",
    isVirtual: true,
    title: "Appointment with Dr. Good",
    notes: "Headache",
    notifications: [],
    startDateTimeUTC: "2022-07-13T01:30:00Z",
    endDateTimeUTC: "2022-07-13T01:50:00Z",
    organizerId: "asd",
    attendees: [
      {
        id: "1",
        entityId: "d4",
        key: "doctor",
        confirmed: true,
      },
      {
        id: "pt1",
        entityId: "asd",
        key: "patient",
        confirmed: true,
      },
    ],
    status: "confirmed",
    // status: PatientVisitStatus.WAITING_ARRIVAL,
    location: "",
  },
  {
    id: "a6",
    branchId: "1",
    isVirtual: false,
    title: "Appointment with Dr. Good",
    notes: "Headache",
    notifications: [],
    startDateTimeUTC: "2022-07-18T03:00:00Z",
    endDateTimeUTC: "2022-07-18T04:00:00Z",
    organizerId: "asd",
    attendees: [
      {
        id: "2",
        entityId: "d5",
        key: "doctor",
        confirmed: true,
      },
      {
        id: "pt1",
        entityId: "asd",
        key: "patient",
        confirmed: true,
      },
    ],
    status: "confirmed",
    // status: PatientVisitStatus.WAITING_ARRIVAL,
    location: "747 52nd St. Oakland, CA 94609",
  },
  {
    id: "a7",
    branchId: "1",
    isVirtual: false,
    title: "Appointment with Dr. Good",
    notes: "Headache",
    notifications: [],
    startDateTimeUTC: "2022-07-22T03:00:00Z",
    endDateTimeUTC: "2022-07-22T04:00:00Z",
    organizerId: "asd",
    attendees: [
      {
        id: "1",
        entityId: "d5",
        key: "doctor",
        confirmed: true,
      },
      {
        id: "pt1",
        entityId: "asd",
        key: "patient",
        confirmed: true,
      },
    ],
    status: "confirmed",
    // status: PatientVisitStatus.WAITING_ARRIVAL,
    location: "747 52nd St. Oakland, CA 94609",
  },
  {
    id: "a8",
    branchId: "1",
    isVirtual: true,
    title: "Appointment with Dr. Good",
    notes: "Headache",
    notifications: [],
    startDateTimeUTC: "2022-07-25T02:00:00Z",
    endDateTimeUTC: "2022-07-25T02:30:00Z",
    organizerId: "asd",
    attendees: [
      {
        id: "1",
        entityId: "d4",
        key: "doctor",
        confirmed: true,
      },
      {
        id: "pt1",
        entityId: "asd",
        key: "patient",
        confirmed: true,
      },
    ],
    status: "confirmed",
    // status: PatientVisitStatus.WAITING_ARRIVAL,
    location: "",
  },
];

export default APPOINTMENTS;
