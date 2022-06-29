import { TopHeader } from "../../components/layouts/Header";
import Container from "../../components/layouts/Container";
import DoctorsList from "../../components/consultation/doctors/DoctorsList";
import { IonContent, IonPage } from "@ionic/react";

const OnlineConsultation = () => {
  return (
    <IonPage>
      <TopHeader pageName={"Instant Video Consultation"} back />
      <IonContent>
        <Container>
          <DoctorsList mode={"Online"} specialty={"General Physician"} />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default OnlineConsultation;
