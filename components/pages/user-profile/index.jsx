import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { PersonalProfile } from "../../ui/profile-management/PersonalProfile";
import { MedicalProfile } from "../../ui/profile-management/MedicalProfile";
import { NOKProfile } from "../../ui/profile-management/NOKProfile";
import Tabs from "../../ui/core/Tabs";

import { useRecoilState } from "recoil";
import { profileInfo } from "../../../recoil/atoms";

import { useState, useCallback, useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";

const UserProfile = () => {
  const [data, setData] = useRecoilState(profileInfo);
  const fullName = `${data?.firstName} ${data?.lastName}`;

  const [selectedTab, setSelectedTab] = useState(0);

  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  const tabToRender = () => {
    if (selectedTab === 0) {
      {
        return <PersonalProfile isEdit={isEdit} toggleEdit={toggleEdit} />;
      }
    } else if (selectedTab === 1) {
      {
        return <MedicalProfile isEdit={isEdit} toggleEdit={toggleEdit} />;
      }
    } else {
      {
        return <NOKProfile isEdit={isEdit} toggleEdit={toggleEdit} />;
      }
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={fullName} back={true} />
      <IonContent>
        <Container>
          <div className="flex justify-center mt-6">
            <Tabs
              tabs={["Personal", "Medical", "Next of Kin"]}
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
