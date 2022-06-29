import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import Tabs from "../../ui/core/Tabs";
import { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";

import UpcomingStatus from "../../ui/consultation/status/upcoming-status";
import CompletedStatus from "../../ui/consultation/status/completed-status";
import CancelledStatus from "../../ui/consultation/status/cancelled-status";
import AppointmentCard from "../../ui/appointments/appointment-card";

const Appointments = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const Upcoming = [
    {
      id: 1,
      name: "Thor Odinson",
      specialty: "Cardiologist",
      date: "2022-06-01",
      time: "10:00 AM",
      location: "747 52nd St. Oakland, CA 94609",
      imageUrl:
        "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
      isOnline: false,
      isCanceled: false,
      isCompleted: false,
    },
    {
      id: 2,
      name: "Jane Foster",
      specialty: "Internal Medicine",
      date: "2022-06-10",
      time: "3:00 PM",
      location: "",
      imageUrl:
        "http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg",
      isOnline: true,
      isCanceled: false,
      isCompleted: false,
    },
    {
      id: 3,
      name: "Bruce Banner",
      specialty: "Pediatrician",
      date: "2022-06-15",
      time: "10:00 AM",
      location: "",
      imageUrl:
        "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
      isOnline: true,
      isCanceled: false,
      isCompleted: false,
    },
  ];

  const Completed = [
    {
      id: 1,
      name: "Thor Odinson",
      specialty: "Cardiologist",
      date: "2022-05-10",
      time: "10:00 AM",
      location: "",
      imageUrl:
        "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
      isOnline: true,
      isCanceled: false,
      isCompleted: true,
    },
    {
      id: 2,
      name: "Jane Foster",
      specialty: "Internal Medicine",
      date: "2022-04-29",
      time: "3:00 PM",
      location: "",
      imageUrl:
        "http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg",
      isOnline: true,
      isCanceled: false,
      isCompleted: true,
    },
  ];

  const Canceled = [
    {
      id: 1,
      name: "Bruce Banner",
      specialty: "Pediatrician",
      date: "2022-05-15",
      time: "10:00 AM",
      location: "747 52nd St. Oakland, CA 94609",
      imageUrl:
        "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
      isOnline: false,
      isCanceled: true,
      isCompleted: false,
    },
  ];

  const tabToRender = () => {
    if (selectedTab === 0) {
      if (Upcoming.length === 0) {
        {
          return <UpcomingStatus status="No Upcoming Appointments" />;
        }
      } else {
        {
          return Upcoming.map((booking) => (
            <AppointmentCard key={booking.id} booking={booking} />
          ));
        }
      }
    } else if (selectedTab === 1) {
      if (Completed.length === 0) {
        {
          return <CompletedStatus status="No Completed Appointments" />;
        }
      } else {
        {
          return Completed.map((booking) => (
            <AppointmentCard key={booking.id} booking={booking} />
          ));
        }
      }
    } else {
      if (Canceled.length === 0) {
        {
          return <CancelledStatus status="No Cancelled/Missed Appointments" />;
        }
      } else {
        {
          return Canceled.map((booking) => (
            <AppointmentCard key={booking.id} booking={booking} />
          ));
        }
      }
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={"Appointments"} back={true} />
      <IonContent>
        <Container>
          <div className="flex justify-center mt-4 mb-8">
            <Tabs
              tabs={["Upcoming", "Completed", "Cancelled"]}
              handleSelectTab={(id) => setSelectedTab(id)}
              selected={selectedTab}
            />
          </div>
          {tabToRender()}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Appointments;
