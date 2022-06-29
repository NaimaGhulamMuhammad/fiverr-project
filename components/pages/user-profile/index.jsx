import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import PersonalProfile from "../../ui/profile-management/personal-profile";
import MedicalProfile from "../../ui/profile-management/medical-profile";
import LifestyleProfile from "../../ui/profile-management/lifestyle-profile";
import Tabs from "../../ui/core/Tabs";

import { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabToRender = () => {
    if (selectedTab === 0) {
      {
        return <PersonalProfile />;
      }
    } else if (selectedTab === 1) {
      {
        return <MedicalProfile />;
      }
    } else {
      {
        return <LifestyleProfile />;
      }
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={"Venkatesh Chakrabarty"} back={true} />
      <IonContent>
        <Container>
          <div className="flex justify-center mt-6">
            <Tabs
              tabs={["Personal", "Medical", "Lifestyle"]}
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

export default UserProfile;
