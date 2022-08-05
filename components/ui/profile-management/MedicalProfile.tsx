import { useState } from "react";
import FloaterButton from "./FloaterButton";

import { useRecoilState } from "recoil";
import { medInfo } from "../../../recoil/atoms";

import MedicalDetails from "./MedicalDetails";
import EditMedicalDetails from "./EditMedicalDetails";

interface MedicalProfileProps {
  isEdit: boolean;
  toggleEdit: () => void;
}

export const MedicalProfile = ({ isEdit, toggleEdit }: MedicalProfileProps) => {
  const [data, setData] = useRecoilState(medInfo);

  const [height, setHeight] = useState(data?.height);
  const [weight, setWeight] = useState(data?.weight);
  const [bloodGroup, setBloodGroup] = useState(data?.bloodGroup);
  const [allergies, setAllergies] = useState(data?.allergies);
  const [medicalHistory, setMedicalHistory] = useState(data?.medicalHistory);
  const [currentMed, setCurrentMed] = useState(data?.currentMed);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "height") {
      setHeight(value);
    } else if (name === "weight") {
      setWeight(value);
    } else if (name === "bloodGroup") {
      setBloodGroup(value);
    } else if (name === "allergies") {
      setAllergies(value);
    } else if (name === "medicalHistory") {
      setMedicalHistory(value);
    } else if (name === "currentMed") {
      setCurrentMed(value);
    }
  };

  const saveData = (e: { preventDefault: () => void }) => {
    e?.preventDefault();
    var inputData = {
      height: height,
      weight: weight,
      bloodGroup: bloodGroup,
      allergies: allergies,
      medicalHistory: medicalHistory,
      currentMed: currentMed,
    };
    setData(inputData);
    localStorage.setItem("userData", JSON.stringify(inputData));
  };

  return (
    <div>
      {!isEdit ? (
        <MedicalDetails data={data} />
      ) : (
        <EditMedicalDetails data={data} handleChange={handleChange} />
      )}
      <FloaterButton
        isEdit={isEdit}
        toggleEdit={toggleEdit}
        saveData={saveData}
      />
    </div>
  );
};

export default MedicalProfile;
