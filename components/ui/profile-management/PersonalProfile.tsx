import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EditPersonalDetails from "./EditPersonalDetails";
import FloaterButton from "./FloaterButton";

import { useRecoilState } from "recoil";
import { profileInfo } from "../../../recoil/atoms";

interface PersonalProfileProps {
  isEdit: boolean;
  toggleEdit: () => void;
}

export const PersonalProfile = ({
  isEdit,
  toggleEdit,
}: PersonalProfileProps) => {
  const [data, setData] = useRecoilState(profileInfo);

  const [firstName, setFirstName] = useState(data?.firstName);
  const [lastName, setLastName] = useState(data?.lastName);
  const [gender, setGender] = useState(data?.gender);
  const [maritalStatus, setMaritalStatus] = useState(data?.maritalStatus);
  const [nationality, setNationality] = useState(data?.nationality);
  const [dob, setDob] = useState(data?.dob);
  const [phone, setPhone] = useState(data?.phone);
  const [email, setEmail] = useState(data?.email);
  const [location, setLocation] = useState(data?.location);
  const [postal, setPostal] = useState(data?.postal);
  const [passport, setPassport] = useState(data?.passport);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "maritalStatus") {
      setMaritalStatus(value);
    } else if (name === "nationality") {
      setNationality(value);
    } else if (name === "dob") {
      setDob(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "postal") {
      setPostal(value);
    } else if (name === "passport") {
      setPassport(value);
    }
  };

  const saveData = (e: { preventDefault: () => void }) => {
    e?.preventDefault();
    var inputData = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      maritalStatus: maritalStatus,
      nationality: nationality,
      dob: dob,
      phone: phone,
      email: email,
      location: location,
      postal: postal,
      passport: passport,
    };
    setData(inputData);
    localStorage.setItem("userData", JSON.stringify(inputData));
  };

  return (
    <div>
      {!isEdit ? (
        <PersonalDetails data={data} />
      ) : (
        <EditPersonalDetails data={data} handleChange={handleChange} />
      )}
      <FloaterButton
        isEdit={isEdit}
        toggleEdit={toggleEdit}
        saveData={saveData}
      />
    </div>
  );
};
