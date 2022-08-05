import { Button } from "../../core/Buttons";
import {
  BsGenderFemale,
  BsGenderMale,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
interface GenderScreenProps {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const GenderScreen = ({
  gender,
  setGender,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: GenderScreenProps) => {
  const setGenderDetails = async () => {
    await Storage.set({
      key: "gender",
      value: gender,
    });
    const { value: l_gender } = await Storage.get({ key: "gender" });
    console.log("Gender : ", l_gender);
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12 w-full">
          <img
            src="/onboarding/gender_screen.svg"
            alt="Gender Image"
            className="w-full"
          />
        </div>
        <div className="text-2xl font-medium my-4">Choose Your Gender</div>
        <Button
          handleClick={() => setGender("male")}
          classes={
            "relative py-3 rounded-lg !text-black drop-shadow flex items-center justify-center !bg-indigo-100"
          }
          full
        >
          <BsGenderMale size="24px" className="text-indigo-700" />
          <span className="ml-2">Male</span>
          <BsFillCheckCircleFill
            size="20px"
            className={`absolute -top-1 -right-1 text-indigo-700 ${
              gender != "male" && "hidden"
            }`}
          />
        </Button>
        <Button
          handleClick={() => setGender("female")}
          classes={
            "relative py-3 rounded-lg !text-black drop-shadow flex items-center justify-center !bg-pink-100"
          }
          full
        >
          <BsGenderFemale size="24px" className="text-pink-600" />
          <span className="ml-2">Female</span>
          <BsFillCheckCircleFill
            size="20px"
            className={`absolute -top-1 -right-1 text-pink-600 ${
              gender != "female" && "hidden"
            }`}
          />
        </Button>
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
              setGenderDetails();
              nextFunc();
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
            disabled={gender == ""}
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default GenderScreen;
