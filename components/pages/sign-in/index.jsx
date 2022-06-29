import { Button } from "../../ui/core/Buttons";
import { IonContent, IonPage } from "@ionic/react";

const SignInPage = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-b from-secondary-5 to-white">
          <img
            className="text-primary-50 mb-48"
            src="/assets/images/logo/logo_primary.png"
            alt="logo"
          />
          <Button
            classes="w-[12rem] text-md font-title shadow-md"
            primary={true}
            href="/sign-up"
          >
            Sign Up
          </Button>
          <Button
            classes="w-[12rem] text-md font-title shadow-md"
            href="/login"
          >
            Log In
          </Button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignInPage;
