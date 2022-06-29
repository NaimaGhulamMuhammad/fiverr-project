export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Thor Odinson",
    speciality: "Cardiologist",
    location: "747 52nd St. Oakland, CA 94609",
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: [
      {
        id: "1",
        branchid: "1",
        name: "Branch One",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "06:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2022-06-22",
            isOpen: false,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2022-06-17",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Branch Two",
        branchid: "2",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "09:00", close: "11:00" },
              { open: "14:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "05:00", close: "09:00" },
              { open: "13:00", close: "15:00" },
            ],
            isOpen: true,
            is24: true,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2022-06-19",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
    ],
    mode: ["Online", "Offline"],
    services: ["Cardioversion", "Non-invasive cardiology"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
    reviews: [
      {
        id: "1",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "2",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Jane Foster",
    speciality: "Internal Medicine",
    location: "747 52nd St. Oakland, CA 94609",
    fees: "S$100",
    imageUrl:
      "http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg",
    workSchedule: [
      {
        id: "1",
        branchid: "1",
        name: "Branch One",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "06:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2021-12-15",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Branch Two",
        branchid: "2",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "09:00", close: "11:00" },
              { open: "14:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "05:00", close: "09:00" },
              { open: "13:00", close: "15:00" },
            ],
            isOpen: true,
            is24: true,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2022-06-19",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
    ],
    mode: ["Online"],
    services: ["Heart Conditions", "Cardiac Catheterisation"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
    reviews: [
      {
        id: "1",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "2",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Bruce Banner",
    speciality: "Pediatrician",
    location: "747 52nd St. Oakland, CA 94609",
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: [
      {
        id: "1",
        branchid: "1",
        name: "Branch One",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "06:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2021-12-15",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Branch Two",
        branchid: "2",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "09:00", close: "11:00" },
              { open: "14:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "05:00", close: "09:00" },
              { open: "13:00", close: "15:00" },
            ],
            isOpen: true,
            is24: true,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2022-06-19",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
    ],
    mode: ["Offline"],
    services: ["Cardioversion", "Heart Conditions"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
    reviews: [
      {
        id: "1",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "2",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: 4,
    name: "Dr. Bruce Banner",
    speciality: "General Physician",
    location: "747 52nd St. Oakland, CA 94609",
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: [
      {
        id: "1",
        branchid: "1",
        name: "Branch One",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "06:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2021-12-15",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Branch Two",
        branchid: "2",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "09:00", close: "11:00" },
              { open: "14:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "05:00", close: "09:00" },
              { open: "13:00", close: "15:00" },
            ],
            isOpen: true,
            is24: true,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2022-06-19",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
    ],
    mode: ["Offline"],
    services: ["Cardioversion", "Cardiac Catheterisation"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
    reviews: [
      {
        id: "1",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "2",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: 5,
    name: "Dr. Bruce Banner",
    speciality: "General Physician",
    location: "747 52nd St. Oakland, CA 94609",
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: [
      {
        id: "1",
        branchid: "1",
        name: "Branch One",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "06:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2021-12-15",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Branch Two",
        branchid: "2",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "09:00", close: "11:00" },
              { open: "14:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "05:00", close: "09:00" },
              { open: "13:00", close: "15:00" },
            ],
            isOpen: true,
            is24: true,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2022-06-19",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
    ],
    mode: ["Online", "Offline"],
    services: ["Cardioversion", "Heart Conditions"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
    reviews: [
      {
        id: "1",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "2",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: 6,
    name: "Dr. Thor Odinson",
    speciality: "General Physician",
    location: "747 52nd St. Oakland, CA 94609",
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: [
      {
        id: "1",
        branchid: "1",
        name: "Branch One",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "06:00", close: "09:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "06:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2021-12-15",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Branch Two",
        branchid: "2",
        regularHours: [
          {
            day: "Sunday",
            hours: [
              { open: "09:00", close: "11:00" },
              { open: "14:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
          {
            day: "Monday",
            hours: [
              { open: "05:00", close: "09:00" },
              { open: "13:00", close: "15:00" },
            ],
            isOpen: true,
            is24: true,
          },
          {
            day: "Tuesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Wednesday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Thursday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],

            isOpen: true,
            is24: false,
          },
          {
            day: "Friday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: true,
            is24: false,
          },
          {
            day: "Saturday",
            hours: [
              { open: "08:00", close: "12:00" },
              { open: "13:00", close: "17:00" },
            ],
            isOpen: false,
            is24: false,
          },
        ],
        specialHours: [
          {
            day: "2022-06-19",
            isOpen: true,
            is24: false,
            hours: [
              {
                open: "06:00",
                close: "12:00",
              },
              {
                open: "13:00",
                close: "20:00",
              },
            ],
          },
          {
            day: "2021-12-25",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
          {
            day: "2021-12-26",
            isOpen: false,
            is24: true,
            hours: [
              {
                open: "",
                close: "",
              },
            ],
          },
        ],
      },
    ],
    mode: ["Online", "Offline"],
    services: ["Cardioversion", "Non-invasive cardiology"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
    reviews: [
      {
        id: "1",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "2",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3",
        reviewer: "Amanda Jones",
        imageUrl:
          "https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png",
        duration: "6 months ago",
        title: "Satisfied with visit",
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
];

export default DOCTORS;
