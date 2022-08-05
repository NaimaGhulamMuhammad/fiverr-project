import { Button } from "../../core/Buttons";
import FormInput from "../../core/FormInput";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
interface KinDetailsScreenProps {
  nameOfKin: string;
  setNameOfKin: Dispatch<SetStateAction<string>>;
  relationshipOfKin: string;
  setRelationshipOfKin: Dispatch<SetStateAction<string>>;
  phoneOfKin: string;
  setPhoneOfKin: Dispatch<SetStateAction<string>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const KinDetailsScreen = ({
  nameOfKin,
  setNameOfKin,
  phoneOfKin,
  setPhoneOfKin,
  relationshipOfKin,
  setRelationshipOfKin,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: KinDetailsScreenProps) => {
  const setKinDetails = async () => {
    const obj = {
      name: nameOfKin,
      phone: [
        {
          id: 1,
          value: phoneOfKin,
        },
      ],
      relationship: relationshipOfKin,
    };
    await Storage.set({
      key: "nokDetails",
      value: JSON.stringify(obj),
    });
    const { value: l_nok } = await Storage.get({ key: "nokDetails" });
    console.log("NOK details : ", JSON.parse(l_nok));
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12 mb-8 w-full">
          <img
            src="/onboarding/nok_screen.svg"
            alt="NOK Image"
            className="w-full"
          />
        </div>
        <div className="text-xl font-medium mt-6 mb-2">Next Of Kin Details</div>
        <div className="p-1 font-medium">Name</div>
        <div className="p-1">
          <FormInput
            inputState={nameOfKin}
            setInputState={setNameOfKin}
            placeholder="Name of NOK"
          />
        </div>
        <div className="p-1 font-medium">Phone Number</div>
        <div className="p-1">
          <FormInput
            inputType="tel"
            inputState={phoneOfKin}
            setInputState={setPhoneOfKin}
            placeholder="Phone no. of NOK"
          />
        </div>
        <div className="p-1 font-medium">Relationship With User</div>
        <div className="p-1">
          <FormInput
            inputState={relationshipOfKin}
            setInputState={setRelationshipOfKin}
            placeholder="Relationship to Patient"
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
          <div
            onClick={() => {
              setKinDetails();
              nextFunc();
            }}
            className="w-full"
          >
            <Button
              href={nextHref}
              handleClick={() => {
                console.log("next pressed!");
              }}
              classes="py-3 rounded-lg flex items-center justify-center"
              full
              primary
            >
              {customNextBtnText ? customNextBtnText : "Next"}
              <HiArrowNarrowRight size="20px" className="text-white ml-2" />
            </Button>
          </div>
        )}
      </Floater>
    </div>
  );
};

export default KinDetailsScreen;
