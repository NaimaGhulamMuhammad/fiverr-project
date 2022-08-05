import { Button } from "../../core/Buttons";
import FormDropdown from "../../core/FormDropdown";
import { allCountries } from "country-region-data";
import { Dispatch, SetStateAction, useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import FormInput from "../../core/FormInput";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
interface NationalityScreenProps {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  idValue: string;
  setIdValue: Dispatch<SetStateAction<string>>;
  selectedIdType: string;
  setSelectedIdType: Dispatch<SetStateAction<string>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const NationalityScreen = ({
  country,
  setCountry,
  idValue,
  setIdValue,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
  selectedIdType,
  setSelectedIdType,
}: NationalityScreenProps) => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showSelectIdDropdown, setShowSelectIdDropdown] = useState(false);
  const getCountryList = () => {
    const countryList = allCountries.map((country) => country[0]);
    return countryList;
  };
  const setNationalityDetails = async () => {
    await Storage.set({
      key: "country",
      value: country,
    });
    const { value } = await Storage.get({ key: "identities" });
    if (value == null) {
      const identity = {
        id: 1,
        type: selectedIdType,
        value: idValue,
      };
      await Storage.set({
        key: "identities",
        value: JSON.stringify([identity]),
      });
    } else {
      const identity = {
        id: JSON.parse(value).length + 1,
        type: selectedIdType,
        value: idValue,
      };
      if (
        !JSON.parse(value).find(
          (identity) =>
            identity.type == selectedIdType && identity.value == idValue
        )
      )
        await Storage.set({
          key: "identities",
          value: JSON.stringify([...JSON.parse(value), identity]),
        });
    }
    const { value: l_country } = await Storage.get({ key: "country" });
    const { value: l_identities } = await Storage.get({ key: "identities" });
    console.log("Country : ", l_country);
    console.log("Identities : ", l_identities);
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12 w-full">
          <img
            src="/onboarding/nationality_screen.svg"
            alt="Nationality Image"
            className="w-full"
          />
        </div>
        <div className="text-2xl font-medium my-4">Choose Your Nationality</div>
        <div>
          <FormDropdown
            dropdownMenuOpen={showCountryDropdown}
            setDropdownMenuOpen={setShowCountryDropdown}
            dropdownValue={country}
            setDropdownValue={setCountry}
            options={getCountryList()}
            containerClasses="w-full"
          />
        </div>
        <div className="p-1 font-medium mt-4">NRIC/FIN/Passport Number</div>
        <div>
          <FormDropdown
            dropdownMenuOpen={showSelectIdDropdown}
            setDropdownMenuOpen={setShowSelectIdDropdown}
            dropdownValue={selectedIdType}
            setDropdownValue={setSelectedIdType}
            options={["NRIC", "Passport No.", "FIN"]}
            containerClasses="w-full"
          />
        </div>
        <div className="p-1 w-full">
          <FormInput
            inputState={idValue}
            setInputState={setIdValue}
            placeholder="Enter NRIC/FIN/Passport Number"
            enterFunction={() => console.log("Enter Key Pressed!")}
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
              setNationalityDetails();
              nextFunc();
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
            disabled={country == "Select country" || idValue == ""}
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default NationalityScreen;
