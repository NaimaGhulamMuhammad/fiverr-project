import { useEffect } from "react";
import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";

import AppointmentDetails from "../../ui/appointments/appointment-details";
import AppointmentStatus from "../../ui/appointments/appointment-status";
import PaymentDetails from "../../ui/appointments/payment-details";
import PatientDetails from "../../ui/appointments/patient-details";
import { IonContent, IonPage } from "@ionic/react";
import { AlertModal } from "../../ui/core/Modals";

import useModal from "../../../lib/hooks/useModal";
import useNav from "../../../lib/hooks/useNav";
import FloaterButton from "../../ui/appointments/FloaterButton";

const AppointmentPage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { hideNav, showNav } = useNav();

  useEffect(() => {
    hideNav();
    return () => {
      showNav();
    };
  }, []);

  const SampleData = [
    {
      id: 1,
      patientName: "Venkatesh Chakrabarty",
      patientEmail: "venkatesh@gmail.com",
      doctorName: "Thor Odinson",
      doctorSpecialty: "Cardiologist",
      date: "Wednesday, June 15, 2022",
      time: "10:00 AM",
      location: "747 52nd St. Oakland, CA 94609",
      imageUrl:
        "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
      isOnline: false,
      isCanceled: false,
      isCompleted: false,
    },
  ];

  return (
    <IonPage>
      <TopHeader pageName={"Your Appointment"} back={true} />
      <IonContent>
        <Container>
          <AppointmentStatus
            isCanceled={SampleData[0].isCanceled}
            isCompleted={SampleData[0].isCompleted}
          />
          <AppointmentDetails
            doctorName={SampleData[0].doctorName}
            doctorSpecialty={SampleData[0].doctorSpecialty}
            date={SampleData[0].date}
            time={SampleData[0].time}
            location={SampleData[0].location}
            imageUrl={SampleData[0].imageUrl}
            isOnline={SampleData[0].isOnline}
            isCanceled={SampleData[0].isCanceled}
            isCompleted={SampleData[0].isCompleted}
          />
          <PatientDetails
            patientName={SampleData[0].patientName}
            patientEmail={SampleData[0].patientEmail}
          />
          <PaymentDetails />
          <FloaterButton
            appointmentId={SampleData[0].id}
            isCancelled={SampleData[0].isCanceled}
            isCompleted={SampleData[0].isCompleted}
            openModal={openModal}
          />
        </Container>
        <AlertModal
          isOpen={isOpen}
          closeModal={closeModal}
          title="Cancel Confirmation"
          message="Are you sure want to cancel this appointment?"
          destructive
        />
      </IonContent>
    </IonPage>
  );
};

export default AppointmentPage;
