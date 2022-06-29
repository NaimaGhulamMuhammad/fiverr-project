import { Link } from "react-router-dom";
import { SmallText, MediumText } from "../../ui/core/Text";
import { IonContent, IonPage } from "@ionic/react";

import AccountCard from "../../ui/registration/account-card";
import EmailLogin from "../../ui/registration/email-login";
import Container from "../../ui/layouts/Container";

const LoginPage = () => {
  const LoginAccounts = [
    {
      icon: "/icons/facebook-icon.png",
      name: "Facebook",
      color: "bg-faceBook",
      link: "/home",
    },
    {
      icon: "/icons/google-icon.png",
      name: "Google",
      color: "bg-slate-400",
      link: "/home",
    },
    {
      icon: "/icons/singpass-icon.png",
      name: "SingPass",
      color: "bg-red-500",
      link: "/home",
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col w-full h-screen justify-center items-center bg-white">
          <Container>
            <div className="flex w-full justify-center mt-8 mb-6">
              <img
                className="object-center w-3/5"
                src="/assets/images/logo/logo_primary.svg"
                alt="logo"
              />
            </div>
            <EmailLogin />
            <div className="flex flex-row w-full justify-center my-6 items-center">
              <div className="inline-flex w-32 border-b"></div>
              <SmallText classes="text-center text-slate-500 mx-3 font-general">
                or
              </SmallText>
              <div className="inline-flex w-32 border-b"></div>
            </div>
            <AccountCard account={LoginAccounts} method={"Continue with"} />
            <div className="flex flex-col justify-center items-center mt-8 px-10">
              <MediumText classes="text-left text-slate-500 font-general italic">
                New to My Healthcare Collective?
              </MediumText>
              <Link to="/email-sign-up">
                <MediumText classes="mt-1 text-left text-blue-500 font-title">
                  Sign Up
                </MediumText>
              </Link>
            </div>
          </Container>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
