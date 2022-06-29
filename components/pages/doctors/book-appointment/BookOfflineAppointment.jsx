import { useState, useEffect } from "react";
import { TopHeader } from "../../../ui/layouts/Headers";
import { IonContent, IonPage } from "@ionic/react";
import DoctorDetails from "../../../ui/book-appointment/DoctorDetails";
import DoctorSlots from "../../../ui/book-appointment/DoctorSlots";
import { DOCTORS } from "../../../../lib/data/doctors/doctors.data";
import { useParams } from "react-router-dom";
import Container from "../../../ui/layouts/Container";
import useNav from "../../../../lib/hooks/useNav";

const BookOfflineAppointment = () => {
  const params = useParams();
  const [doctor, setDoctor] = useState();
  const { hideNav, showNav } = useNav();

  useEffect(() => {
    hideNav();
    return () => {
      showNav();
    };
  }, []);

  useEffect(() => {
    const docId = params.id;
    const doc = DOCTORS.find((d) => d.id == docId);
    setDoctor(doc);
  });

  return (
    <IonPage>
      <TopHeader pageName="Book an appointment" back classes="font-general" />
      <IonContent>
        <Container>
          <DoctorDetails doctor={doctor} />
          <DoctorSlots doctor={doctor} btnText="Book Appointment" />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default BookOfflineAppointment;
