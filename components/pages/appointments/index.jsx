import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import Tabs from "../../ui/core/Tabs";
import { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";

import UpcomingStatus from "../../ui/consultation/status/upcoming-status";
import CompletedStatus from "../../ui/consultation/status/completed-status";
import CancelledStatus from "../../ui/consultation/status/cancelled-status";
import AppointmentCard from "../../ui/appointments/AppointmentCard";
import { APPOINTMENTS } from "../../../lib/data";

const Appointments = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(APPOINTMENTS);
  });

  const tabToRender = () => {
    if (selectedTab === 0) {
      if (appointments.length === 0) {
        {
          return <UpcomingStatus status="No Upcoming Appointments" />;
        }
      } else {
        {
          return appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ));
        }
      }
    } else if (selectedTab === 1) {
      if (appointments.length === 0) {
        {
          return <CompletedStatus status="No Completed Appointments" />;
        }
      } else {
        {
          return appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ));
        }
      }
    } else {
      if (appointments.length === 0) {
        {
          return <CancelledStatus status="No Cancelled/Missed Appointments" />;
        }
      } else {
        {
          return appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
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
