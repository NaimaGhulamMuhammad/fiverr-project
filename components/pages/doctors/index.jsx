import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import Filter from "../../ui/core/Filter";

import DoctorsList from "../../ui/consultation/doctors/DoctorsList";
import { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";

const Doctors = () => {
  const [mode, setMode] = useState("All");
  const [specialty, setSpecialty] = useState("All");

  return (
    <IonPage>
      <TopHeader pageName={"Consult with a doctor"} back />
      <IonContent>
        <Container>
          <div className="flex my-2">
            <Filter
              filters={[
                "All",
                "Cardiologist",
                "Internal Medicine",
                "General Physician",
                "Pediatrician",
              ]}
              handleFilterClick={(filter) => setSpecialty(filter)}
              selected={specialty}
            />
            <Filter
              filters={["All", "Online", "Offline"]}
              handleFilterClick={(filter) => setMode(filter)}
              selected={mode}
            />
          </div>
          <DoctorsList mode={mode} specialty={specialty} />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Doctors;
