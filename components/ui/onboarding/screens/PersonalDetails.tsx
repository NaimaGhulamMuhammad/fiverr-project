import {
  useState,
  forwardRef,
  Dispatch,
  SetStateAction,
  LegacyRef,
} from "react";
import { Button } from "../../core/Buttons";
import FormInput from "../../core/FormInput";
import FormDropdown from "../../core/FormDropdown";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { SmallText } from "../../core/Text";
import { BsCalendarEvent } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";

interface PersonalDetailsProps {
  salutation: string;
  setSalutation: Dispatch<SetStateAction<string>>;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  birthDate: Date;
  setBirthDate: Dispatch<SetStateAction<Date>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const PersonalDetails = ({
  salutation,
  setSalutation,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  birthDate,
  setBirthDate,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: PersonalDetailsProps) => {
  const [showSalutationDropdown, setShowSalutationDropdown] = useState(false);

  const setProfileDetails = async () => {
    await Storage.set({
      key: "salutation",
      value: salutation,
    });
    await Storage.set({
      key: "firstName",
      value: firstName,
    });
    await Storage.set({
      key: "lastName",
      value: lastName,
    });
    await Storage.set({
      key: "dateOfBirth",
      value: birthDate.toUTCString(),
    });
    const { value: l_salutation } = await Storage.get({ key: "salutation" });
    const { value: l_firstName } = await Storage.get({ key: "firstName" });
    const { value: l_lastName } = await Storage.get({ key: "lastName" });
    const { value: l_dateOfBirth } = await Storage.get({ key: "dateOfBirth" });
    console.log("Salutation : ", l_salutation);
    console.log("Firstname : ", l_firstName);
    console.log("Lastname : ", l_lastName);
    console.log("DOB : ", new Date(l_dateOfBirth));
  };

  const isValidBirthdate = (date) => {
    if (date <= new Date()) {
      return true;
    } else return false;
  };

  const DateCustomInput = forwardRef(function DateCustomInput(
    { value, onClick }: any,
    ref: LegacyRef<HTMLDivElement>
  ) {
    return (
      <div onClick={onClick} ref={ref}>
        <div className="flex flex-col items-center justify-center shadow px-4 py-3 w-max rounded-lg border">
          <SmallText classes="flex flex-col items-center justify-center">
            <BsCalendarEvent size="20px" />
          </SmallText>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12">
          <img
            src="/onboarding/personal_screen.svg"
            alt="Welcome Image"
            className="w-full"
          />
        </div>
        <div className="p-1 font-medium">First Name</div>
        <div className="flex items-center">
          <FormDropdown
            dropdownMenuOpen={showSalutationDropdown}
            setDropdownMenuOpen={setShowSalutationDropdown}
            dropdownValue={salutation}
            setDropdownValue={setSalutation}
            options={["Mr", "Miss", "Mdm", "Mrs"]}
            containerClasses="w-1/3"
          />
          <div className="p-1 w-2/3">
            <FormInput
              inputState={firstName}
              setInputState={setFirstName}
              placeholder="First name"
            />
          </div>
        </div>
        <div className="p-1 font-medium">Last Name</div>
        <div className="p-1">
          <FormInput
            inputState={lastName}
            setInputState={setLastName}
            placeholder="Last name"
          />
        </div>
        <div className="p-1 font-medium">Date Of Birth</div>
        <div className="flex items-center">
          <div className="pr-2 grow">
            <div className="w-full shadow-inner px-4 py-2.5 rounded-lg border border-back text-light text-base outline-none">
              {`${
                birthDate.getMonth() + 1
              } / ${birthDate.getDate()} / ${birthDate.getFullYear()}`}
            </div>
          </div>
          <DatePicker
            customInput={<DateCustomInput />}
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            wrapperClassName="!w-auto"
            filterDate={isValidBirthdate}
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
              setProfileDetails();
              nextFunc();
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
            disabled={
              firstName == "" || lastName == "" || birthDate == undefined
            }
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default PersonalDetails;
