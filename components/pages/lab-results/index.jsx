import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import LabResultCardItem from "../../ui/lab-results/LabResultCardItem";
import { IonPage, IonContent } from "@ionic/react";

const LabResults = () => {
  const labResults = [
    {
      packageName: "Stroke Screening Package",
      date: "Monday, December 29",
      time: "11:00 AM",
      location:
        "Farrer Park Medical Centre Connexion Unit 12-11, 1 Farrer Park Station Road",
    },
    {
      packageName: "Medical Check-Up",
      date: "Saturday, April 4th",
      time: "9:00 AM",
      location:
        "Farrer Park Medical Centre Connexion Unit 12-11, 1 Farrer Park Station Road",
    },
    {
      packageName: "Cholesterol Check Package",
      date: "Friday, February 17th",
      time: "1:00 PM",
      location:
        "Farrer Park Medical Centre Connexion Unit 12-11, 1 Farrer Park Station Road",
    },
  ];

  return (
    <IonPage>
      <TopHeader pageName={"Lab Results"} back />
      <IonContent>
        <Container>
          <LabResultCardItem labResults={labResults} />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default LabResults;
