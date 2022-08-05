import { Button } from "../../core/Buttons";
import { FaNotesMedical } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import TagsInput from "../../core/TagsInput";
import { Dispatch, SetStateAction, useState } from "react";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
interface MedicalsScreenProps {
  medicalHistory: string[];
  setMedicalHistory: Dispatch<SetStateAction<string[]>>;
  currentMedications: string[];
  setCurrentMedications: Dispatch<SetStateAction<string[]>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const MedicalsScreen = ({
  medicalHistory,
  setMedicalHistory,
  currentMedications,
  setCurrentMedications,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: MedicalsScreenProps) => {
  const [medHistoryTag, setMedHistoryTag] = useState<string>("");
  const [currentMedTag, setCurrentMedTag] = useState<string>("");
  const setMedicalDetails = async () => {
    const { value } = await Storage.get({ key: "medicalHistory" });
    if (value == null) {
      await Storage.set({
        key: "medicalHistory",
        value: JSON.stringify([...medicalHistory]),
      });
    } else {
      const medHistSet = new Set([...JSON.parse(value), ...medicalHistory]);
      await Storage.set({
        key: "medicalHistory",
        value: JSON.stringify(Array.from(medHistSet)),
      });
    }
    const { value: l_medicalHistory } = await Storage.get({
      key: "medicalHistory",
    });
    console.log("Medical History : ", JSON.parse(l_medicalHistory));
  };
  const setCurrMedicationDetails = async () => {
    const { value } = await Storage.get({ key: "currentMedication" });
    if (value == null) {
      await Storage.set({
        key: "currentMedication",
        value: JSON.stringify([...currentMedications]),
      });
    } else {
      const currMedSet = new Set([...JSON.parse(value), ...currentMedications]);
      await Storage.set({
        key: "currentMedication",
        value: JSON.stringify(Array.from(currMedSet)),
      });
    }
    const { value: l_currentMedication } = await Storage.get({
      key: "currentMedication",
    });
    console.log("Current Medication : ", JSON.parse(l_currentMedication));
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general pb-20">
      <div className="flex flex-col">
        <div className="mt-12 mb-8 w-full">
          <img
            src="/onboarding/medical_screen.svg"
            alt="Medical Image"
            className="w-full"
          />
        </div>
        <div className="flex items-center p-1 font-medium">
          <FaNotesMedical size="24px" className="mr-2 text-red-500" />
          Medical history (If Any)
        </div>
        <div className="p-1 w-full mb-2">
          <TagsInput
            tagText={medHistoryTag}
            setTagText={setMedHistoryTag}
            placeholder="Enter Medical Condition"
            tagsList={medicalHistory}
            setTagsList={setMedicalHistory}
          />
        </div>
        <div className="flex items-center p-1 font-medium">
          <GiMedicinePills size="24px" className="mr-2 text-sky-500" />
          Current medication (If Any)
        </div>
        <div className="p-1 w-full">
          <TagsInput
            tagText={currentMedTag}
            setTagText={setCurrentMedTag}
            placeholder="Enter Current Medication"
            tagsList={currentMedications}
            setTagsList={setCurrentMedications}
          />
        </div>
      </div>
      <Floater classes="!bg-transparent !border-none">
        {prevFunc && (
          <Button
            href={prevHref}
            handleClick={() => prevFunc()}
            classes="py-3 rounded-lg mr-3 !bg-blue-400 flex items-center justify-center"
            full
          >
            <HiArrowNarrowLeft size="20px" className="text-white mr-2" />
            {customPrevBtnText ? customPrevBtnText : "Prev"}
          </Button>
        )}
        {nextFunc && (
          <Button
            href={nextHref}
            handleClick={() => {
              setMedicalDetails();
              setCurrMedicationDetails();
              nextFunc();
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default MedicalsScreen;
