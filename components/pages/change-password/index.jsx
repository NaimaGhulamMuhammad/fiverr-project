import { Button } from "../../ui/core/Buttons";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import { MediumText } from "../../ui/core/Text";
import InputField from "../../ui/registration/input-field";
import { IonContent, IonPage } from "@ionic/react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <IonPage>
      <div className="flex flex-col w-full h-screen bg-gradient-to-b from-secondary-5 to-white">
        <TopHeader pageName={"Change your password"} back={true} />
        <IonContent>
          <Container>
            <form className="flex flex-col mt-28 justify-center items-center">
              <InputField
                id="password"
                placeholder="Old password"
                type="password"
              />
              <InputField
                id="newPassword"
                placeholder="New password"
                type="password"
              />
              <InputField
                id="confirmPassword"
                placeholder="Confirm new password"
                type="password"
              />
              <div className="flex flex-row w-full justify-center items-center">
                <Button
                  classes="w-[18rem] text-md mt-12 font-title bg-blue-500 shadow-md"
                  href="/home"
                >
                  Change Password
                </Button>
              </div>
            </form>
            <Link to="/forgot-password">
              <MediumText classes="mt-4 text-center text-blue-500 font-title">
                Forgot your password?
              </MediumText>
            </Link>
          </Container>
        </IonContent>
      </div>
    </IonPage>
  );
};

export default ChangePassword;
