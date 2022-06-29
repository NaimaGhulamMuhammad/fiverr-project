import { Button } from "../../ui/core/Buttons";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import InputField from "../../ui/registration/input-field";
import { IonContent, IonPage } from "@ionic/react";
import AgreementCheckbox from "../../ui/registration/agreement-checkbox";
import { MediumText } from "../../ui/core/Text";
import { Link } from "react-router-dom";

import { useState } from "react";

const EmailSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <IonPage>
      <div className="flex flex-col w-full h-screen bg-gradient-to-b from-secondary-5 to-white">
        <TopHeader pageName={"Sign Up"} back={true} />
        <IonContent>
          <Container>
            <form
              className="flex flex-col w-full mt-10 px-8 justify-center items-center"
              action="/"
              method="POST"
            >
              <InputField
                id={firstName}
                placeholder="First Name"
                type="text"
                onChange={handleFirstName}
              />
              <InputField
                id={lastName}
                placeholder="Last Name"
                type="text"
                onChange={handleLastName}
              />
              <InputField
                id={phoneNumber}
                placeholder="Phone"
                type="phone"
                onChange={handlePhoneNumber}
              />
              <InputField
                id={email}
                placeholder="Email"
                type="email"
                onChange={handleEmailChange}
              />
              <InputField
                id={password}
                placeholder="Password"
                type="password"
                onChange={handlePasswordChange}
              />
              <div className="flex flex-row items-center">
                <Button
                  classes="w-[18rem] text-md mt-12 font-title bg-blue-500 shadow-md"
                  href="/home"
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>
            </form>
            <div className="flex flex-row w-full justify-center items-center mt-4">
              <AgreementCheckbox />
            </div>
            <div className="flex flex-col justify-center items-center mt-12 px-10">
              <MediumText classes="text-left text-slate-500 font-general italic">
                Already have an account?
              </MediumText>
              <Link to="/login">
                <MediumText classes="mt-1 text-left text-blue-500 font-title">
                  Sign In
                </MediumText>
              </Link>
            </div>
          </Container>
        </IonContent>
      </div>
    </IonPage>
  );
};

export default EmailSignUp;
