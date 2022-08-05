import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import AppointmentDetails from "../../ui/appointments/AppointmentDetails";
import AppointmentStatus from "../../ui/appointments/AppointmentStatus";
import PaymentDetails from "../../ui/appointments/payment-details";
import PatientDetails from "../../ui/appointments/PatientDetails";
import { IonContent, IonPage } from "@ionic/react";
import FloaterButton from "../../ui/appointments/FloaterButton";
import CancelAppointmentModal from "../../ui/core/modals/CancelAppointment";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  APPOINTMENTS,
  DOCTORS,
  SPECIALITIES,
  PATIENTS,
} from "../../../lib/data";
import {
  getWeekday,
  getDate,
  getMonth,
  getFullYear,
  getTime,
} from "../../../utils/date/DateFunctions";

const AppointmentPage = () => {
  const [appointment, setAppointment] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [speciality, setSpeciality] = useState(null);
  const [patient, setPatient] = useState(null);
  const params = useParams();

  useEffect(() => {
    const appointment = APPOINTMENTS.find(
      (appointment) => appointment.id === params.id
    );
    const doctor = DOCTORS.find(
      (doctor) => doctor.id === appointment?.attendees?.[0]?.id
    );
    const speciality = SPECIALITIES.filter(
      (speciality) =>
        speciality.id === doctor?.specialityIds?.[0] ||
        speciality.id === doctor?.specialityIds?.[1] ||
        speciality.id === doctor?.specialityIds?.[2]
    );
    const patient = PATIENTS.find(
      (patient) => patient.id === appointment?.attendees?.[1]?.id
    );
    setAppointment(appointment);
    setDoctor(doctor);
    setSpeciality(speciality);
    setPatient(patient);
  }, [params.id]);

  const isAppointmentInProgress = () => {
    const now = new Date();
    const startDateTimeUTC = new Date(appointment?.startDateTimeUTC);
    const endDateTimeUTC = new Date(appointment?.endDateTimeUTC);
    const diffStart = Math.abs(now - startDateTimeUTC);
    const diffEnd = Math.abs(now - endDateTimeUTC);
    const diffStartMinutes = Math.floor((diffStart % 86400000) / 60000);
    const diffEndMinutes = Math.floor((diffEnd % 86400000) / 60000);
    if (diffStartMinutes < 5 || diffEndMinutes <= 5) {
      return true;
    } else {
      return false;
    }
  };

  const getAppointmentDate = () => {
    const date = new Date(appointment?.startDateTimeUTC);
    return `${getWeekday(date)}, ${getDate(date)} ${getMonth(
      date
    )} ${getFullYear(date)}`;
  };

  const getAppointmentTime = () => {
    const date = new Date(appointment?.startDateTimeUTC);
    return `${getTime(date)}`;
  };

  const getAppointmentEndTime = () => {
    const date = new Date(appointment?.endDateTimeUTC);
    return `${getTime(date)}`;
  };

  const getAppointmentDuration = () => {
    const date = new Date(appointment?.startDateTimeUTC);
    const endDate = new Date(appointment?.endDateTimeUTC);
    const diff = endDate.getTime() - date.getTime();
    const diffMinutes = Math.round(diff / 60000);
    return `${diffMinutes} minutes`;
  };

  return (
    <IonPage>
      <TopHeader pageName={"Your Appointment"} back={true} />
      <IonContent>
        <Container mainPage>
          <AppointmentStatus status={appointment?.status} />
          <AppointmentDetails
            doctorName={doctor?.name}
            doctorSpeciality={speciality}
            imageUrl={doctor?.imageUrl}
            status={appointment?.status}
            location={appointment?.location}
            isOnline={appointment?.isVirtual}
            date={getAppointmentDate()}
            startTime={getAppointmentTime()}
            endTime={getAppointmentEndTime()}
            duration={getAppointmentDuration()}
            showButton={isAppointmentInProgress()}
          />
          <PatientDetails patient={patient} />
          <PaymentDetails />
          <FloaterButton
            appointmentId={appointment?.id}
            status={appointment?.status}
          />
        </Container>
        <CancelAppointmentModal destructive />
      </IonContent>
    </IonPage>
  );
};

export default AppointmentPage;
