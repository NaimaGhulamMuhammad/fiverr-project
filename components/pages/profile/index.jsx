import ProfileBox from "../../ui/profile-management/profile-box";
import ProfileMenus from "../../ui/profile-management/profile-menus";
import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";

const Profile = () => {
  const subMenuItems1 = [
    {
      name: "Appointments",
      link: "appointments",
      image: "appointment.png",
    },
    {
      name: "Prescriptions",
      link: "prescriptions",
      image: "drug.png",
    },
    {
      name: "Consultations",
      link: "consultations",
      image: "consultation.png",
    },
    {
      name: "Lab Results",
      link: "lab-results",
      image: "lab.png",
    },
    {
      name: "Medical Records",
      link: "medical-records",
      image: "record.png",
    },
    {
      name: "My Practitioners",
      link: "my-practitioners",
      image: "doctor.png",
    },
  ];

  const subMenuItems2 = [
    {
      name: "Help Center",
      link: "help-center",
      image: "help.png",
    },
    {
      name: "Settings",
      link: "settings",
      image: "security.png",
    },
    {
      name: "Logout",
      link: "logout",
      image: "logout.png",
    },
  ];

  return (
    <IonPage>
      <TopHeader pageName={"Profile"} />
      <IonContent>
        <Container>
          <div className="flex flex-col mx-auto">
            <ProfileBox />
            <ProfileMenus subMenuItems={subMenuItems1} />
            <ProfileMenus subMenuItems={subMenuItems2} />
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
