import { Button } from "../../core/Buttons";
import FormInput from "../../core/FormInput";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
interface AddressScreenProps {
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  unitNo: string;
  setUnitNo: Dispatch<SetStateAction<string>>;
  postalCode: string;
  setPostalCode: Dispatch<SetStateAction<string>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const AddressScreen = ({
  address,
  setAddress,
  unitNo,
  setUnitNo,
  postalCode,
  setPostalCode,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: AddressScreenProps) => {
  const setAddressDetails = async () => {
    const { value } = await Storage.get({ key: "addresses" });
    if (value == null) {
      const addressObject = {
        id: 1,
        location: address,
        postalCode: postalCode,
        unitNo: unitNo,
      };
      await Storage.set({
        key: "addresses",
        value: JSON.stringify([addressObject]),
      });
    } else {
      const addressObject = {
        id: JSON.parse(value).length + 1,
        location: address,
        postalCode: postalCode,
        unitNo: unitNo,
      };
      if (
        !JSON.parse(value).find(
          (adrs) =>
            adrs.location == address &&
            adrs.postalCode == postalCode &&
            adrs.unitNo == unitNo
        )
      )
        await Storage.set({
          key: "addresses",
          value: JSON.stringify([...JSON.parse(value), addressObject]),
        });
    }
    const { value: l_addresses } = await Storage.get({ key: "addresses" });
    console.log("Addresses : ", JSON.parse(l_addresses));
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-2 w-full">
          <img
            src="/onboarding/address_screen.svg"
            alt="Nationality Image"
            className="w-full"
          />
        </div>
        <div className="p-1 font-medium">Address</div>
        <div className="p-1 w-full">
          <FormInput
            inputState={address}
            setInputState={setAddress}
            placeholder="Address..."
            rows={4}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <div className="p-1 font-medium">Unit Number</div>
            <div className="p-1 w-full">
              <FormInput
                inputState={unitNo}
                setInputState={setUnitNo}
                placeholder="Unit no."
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-1 font-medium">Postal Code</div>
            <div className="p-1 w-full">
              <FormInput
                inputState={postalCode}
                setInputState={setPostalCode}
                placeholder="Postal code"
              />
            </div>
          </div>
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
              setAddressDetails();
              nextFunc();
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
            disabled={address == "" || unitNo == "" || postalCode == ""}
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default AddressScreen;
