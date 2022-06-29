import { useState, useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import BookAppointmentFloater from "../../ui/consultation/doctor-info/BookAppointmentFloater";
import DoctorDetails from "../../ui/consultation/doctor-info/DoctorDetails";
import DoctorHead from "../../ui/consultation/doctor-info/DoctorHead";
import DoctorReviews from "../../ui/consultation/doctor-info/DoctorReviews";
import DoctorServices from "../../ui/consultation/doctor-info/DoctorServices";
import Location from "../../ui/consultation/doctor-info/Location";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import useNav from "../../../lib/hooks/useNav";
import { DOCTORS } from "../../../lib/data";

const Doctor = () => {
  const path = window.location.search;
  const query = new URLSearchParams(path);

  const [doctorData, setDoctorData] = useState();

  const { hideNav, showNav } = useNav();

  useEffect(() => {
    hideNav();
    return () => {
      showNav();
    };
  }, []);

  useEffect(() => {
    const doctorData = DOCTORS.find((p) => p.id.toString() === query.get("id"));
    setDoctorData(doctorData);
  });

  return (
    <IonPage>
      <TopHeader pageName={"Consult with a doctor"} back />
      <IonContent>
        <Container>
          <DoctorHead doctorData={doctorData} />

          <DoctorServices doctorData={doctorData} />
          <DoctorDetails doctorData={doctorData} />
          <Location />
          <DoctorReviews doctorData={doctorData} />
          <BookAppointmentFloater />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Doctor;
