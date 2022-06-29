import { Link } from "react-router-dom";
import { MediumText } from "../../ui/core/Text";
import { IonContent, IonPage } from "@ionic/react";

import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { MdOutlineAlternateEmail } from "react-icons/md";

import AccountCard from "../../ui/registration/account-card";
import AgreementCheckbox from "../../ui/registration/agreement-checkbox";

const SignUpPage = () => {
  const LoginAccounts = [
    {
      icon: <IoLogoFacebook className="w-6 h-6 text-white mr-3" />,
      name: "Facebook",
      color: "bg-faceBook",
      link: "/",
    },
    {
      icon: <FcGoogle className="w-6 h-6 text-white mr-3" />,
      name: "Google",
      color: "bg-slate-400",
      link: "/",
    },
    {
      icon: <DiApple className="w-6 h-6 text-white mr-3" />,
      name: "Apple",
      color: "bg-black",
      link: "/",
    },
    {
      icon: <MdOutlineAlternateEmail className="w-6 h-6 text-white mr-3" />,
      name: "Email",
      color: "bg-blue-400",
      link: "/email-sign-up",
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col w-full mx-auto h-screen justify-center items-center bg-gradient-to-b from-secondary-5 to-white">
          <AccountCard account={LoginAccounts} method="Sign up with" />
          <AgreementCheckbox />
          <div className="flex flex-col justify-center items-center text-center mt-[13rem]">
            <MediumText classes="text-center text-slate-500 font-general">
              Already have an account?
            </MediumText>
            <Link to="/login">
              <MediumText classes="mt-2 text-center text-blue-500 font-title">
                Log In
              </MediumText>
            </Link>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUpPage;
