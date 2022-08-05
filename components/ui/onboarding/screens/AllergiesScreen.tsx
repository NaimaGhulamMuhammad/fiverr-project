import { Button } from "../../core/Buttons";
import { GiMedicines } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import TagsInput from "../../core/TagsInput";
import { Dispatch, SetStateAction, useState } from "react";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";

interface AllergiesScreenProps {
  drugAllergy: string[];
  setDrugAllergy: Dispatch<SetStateAction<string[]>>;
  foodAllergy: string[];
  setFoodAllergy: Dispatch<SetStateAction<string[]>>;
  nextFunc?: () => void;
  prevFunc?: void | (() => void);
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const AllergiesScreen = ({
  drugAllergy,
  setDrugAllergy,
  foodAllergy,
  setFoodAllergy,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: AllergiesScreenProps) => {
  const [drugAllergyTag, setDrugAllergyTag] = useState("");
  const [foodAllergyTag, setFoodAllergyTag] = useState("");
  const setAllergyDetails = async () => {
    const { value } = await Storage.get({ key: "allergies" });
    if (value == null) {
      const allergyObject = {
        drugAllergies: [...drugAllergy],
        foodAllergies: [...foodAllergy],
      };
      await Storage.set({
        key: "allergies",
        value: JSON.stringify(allergyObject),
      });
    } else {
      const d_allergySet = new Set([
        ...JSON.parse(value).drugAllergies,
        ...drugAllergy,
      ]);
      const f_allergySet = new Set([
        ...JSON.parse(value).foodAllergies,
        ...foodAllergy,
      ]);
      const allergyObject = {
        drugAllergies: Array.from(d_allergySet),
        foodAllergies: Array.from(f_allergySet),
      };
      await Storage.set({
        key: "allergies",
        value: JSON.stringify(allergyObject),
      });
    }
    const { value: l_allergies } = await Storage.get({ key: "allergies" });
    console.log("Allergies : ", JSON.parse(l_allergies));
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general pb-20">
      <div className="flex flex-col">
        <div className="mt-12 mb-4 w-5/6 self-center">
          <img
            src="/onboarding/allergy_screen.svg"
            alt="Allergy Image"
            className="w-full"
          />
        </div>
        <div className="flex items-center p-1 font-medium">
          <GiMedicines size="24px" className="mr-2 text-blue-600" />
          Drug Allergies (If Any)
        </div>
        <div className="p-1 w-full mb-2">
          <TagsInput
            tagText={drugAllergyTag}
            setTagText={setDrugAllergyTag}
            placeholder="Enter Drug Allergy"
            tagsList={drugAllergy}
            setTagsList={setDrugAllergy}
          />
        </div>
        <div className="flex items-center p-1 font-medium">
          <IoFastFoodOutline size="24px" className="mr-2 text-red-600" />
          Food Allergies (If Any)
        </div>
        <div className="p-1 w-full">
          <TagsInput
            tagText={foodAllergyTag}
            setTagText={setFoodAllergyTag}
            placeholder="Enter Food Allergy"
            tagsList={foodAllergy}
            setTagsList={setFoodAllergy}
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
              setAllergyDetails();
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

export default AllergiesScreen;
