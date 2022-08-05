import { useState } from "react";
import FloaterButton from "./FloaterButton";

import { useRecoilState } from "recoil";
import { NOKInfo } from "../../../recoil/atoms";

import NOKDetails from "./NOKDetails";
import EditNOKDetails from "./EditNOKDetails";

interface NOKProfileProps {
  isEdit: boolean;
  toggleEdit: () => void;
}

export const NOKProfile = ({ isEdit, toggleEdit }: NOKProfileProps) => {
  const [data, setData] = useRecoilState(NOKInfo);

  const [emergencyContact, setEmergencyContact] = useState(
    data?.emergencyContact
  );
  const [nameOfNOK, setNameOfNOK] = useState(data?.nameOfNOK);
  const [relationship, setRelationship] = useState(data?.relationship);
  const [phone, setPhone] = useState(data?.phone);
  const [allergies, setAllergies] = useState(data?.allergies);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "emergencyContact") {
      setEmergencyContact(value);
    } else if (name === "nameOfNOK") {
      setNameOfNOK(value);
    } else if (name === "relationship") {
      setRelationship(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "allergies") {
      setAllergies(value);
    }
  };

  const saveData = (e: { preventDefault: () => void }) => {
    e?.preventDefault();
    var inputData = {
      emergencyContact: emergencyContact,
      nameOfNOK: nameOfNOK,
      relationship: relationship,
      phone: phone,
      allergies: allergies,
    };
    setData(inputData);
    localStorage.setItem("userData", JSON.stringify(inputData));
  };

  return (
    <div>
      {!isEdit ? (
        <NOKDetails data={data} />
      ) : (
        <EditNOKDetails data={data} handleChange={handleChange} />
      )}
      <FloaterButton
        isEdit={isEdit}
        toggleEdit={toggleEdit}
        saveData={saveData}
      />
    </div>
  );
};
