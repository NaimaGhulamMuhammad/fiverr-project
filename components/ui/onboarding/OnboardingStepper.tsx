import GenderScreen from "./screens/GenderScreen";
import PersonalDetails from "./screens/PersonalDetails";
import { useState, useEffect } from "react";
import NationalityScreen from "./screens/NationalityScreen";
import AddressScreen from "./screens/AddressScreen";
import AllergiesScreen from "./screens/AllergiesScreen";
import MedicalsScreen from "./screens/MedicalsScreen";
import KinDetailsScreen from "./screens/KinDetailsScreen";
import useLocalDetails from "../../../lib/hooks/useLocalDetails";

interface OnboardingStepperProps {
  currentScreen: number;
  startingScreen: number;
  nextFunc: () => void;
  prevFunc: () => void;
}

const OnboardingStepper = ({
  currentScreen,
  startingScreen,
  nextFunc,
  prevFunc,
}: OnboardingStepperProps) => {
  const {
    getAddresses,
    getAllergies,
    getCountry,
    getCurrentMedications,
    getDob,
    getFirstname,
    getGender,
    getIdentities,
    getLastname,
    getMedicalHistory,
    getSalutation,
    getNokDetails,
  } = useLocalDetails();
  const [salutation, setSalutation] = useState<string>("Mr");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [country, setCountry] = useState<string>("Select country");
  const [selectedIdType, setSelectedIdType] = useState("NRIC");
  const [idValue, setIdValue] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [unitNo, setUnitNo] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [drugAllergy, setDrugAllergy] = useState<string[]>([]);
  const [foodAllergy, setFoodAllergy] = useState<string[]>([]);
  const [medicalHistory, setMedicalHistory] = useState<string[]>([]);
  const [currentMedications, setCurrentMedications] = useState<string[]>([]);
  const [nameOfKin, setNameOfKin] = useState<string>("");
  const [phoneOfKin, setPhoneOfKin] = useState<string>("");
  const [relationshipOfKin, setRelationshipOfKin] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date>(new Date());

  const initialiseValues = async () => {
    getSalutation().then((value) => setSalutation(value));
    getFirstname().then((value) => setFirstName(value));
    getLastname().then((value) => setLastName(value));
    getDob().then((value) => setBirthDate(new Date(value)));
    getGender().then((value) => setGender(value));
    getCountry().then((value) => setCountry(value));
    getIdentities().then((value) => {
      setSelectedIdType(value[0].type);
      setIdValue(value[0].value);
    });
    getAddresses().then((value) => {
      setAddress(value[0].location);
      setPostalCode(value[0].postalCode);
      setUnitNo(value[0].unitNo);
    });
    getAllergies().then((value) => {
      setDrugAllergy(value.drugAllergies);
      setFoodAllergy(value.foodAllergies);
    });
    getMedicalHistory().then((value) => setMedicalHistory(value));
    getCurrentMedications().then((value) => setCurrentMedications(value));
    getNokDetails().then((value) => {
      setNameOfKin(value.name);
      setPhoneOfKin(value.phone[0].value);
      setRelationshipOfKin(value.relationship);
    });
  };

  useEffect(() => {
    initialiseValues();
  }, []);

  return (
    <div className="px-4 font-general">
      {currentScreen == 0 ? (
        <PersonalDetails
          salutation={salutation}
          setSalutation={setSalutation}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 1 ? (
        <GenderScreen
          gender={gender}
          setGender={setGender}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 2 ? (
        <NationalityScreen
          country={country}
          setCountry={setCountry}
          idValue={idValue}
          setIdValue={setIdValue}
          selectedIdType={selectedIdType}
          setSelectedIdType={setSelectedIdType}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 3 ? (
        <AddressScreen
          address={address}
          setAddress={setAddress}
          unitNo={unitNo}
          setUnitNo={setUnitNo}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 4 ? (
        <AllergiesScreen
          drugAllergy={drugAllergy}
          setDrugAllergy={setDrugAllergy}
          foodAllergy={foodAllergy}
          setFoodAllergy={setFoodAllergy}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 5 ? (
        <MedicalsScreen
          medicalHistory={medicalHistory}
          setMedicalHistory={setMedicalHistory}
          currentMedications={currentMedications}
          setCurrentMedications={setCurrentMedications}
          nextFunc={nextFunc}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
        />
      ) : currentScreen == 6 ? (
        <KinDetailsScreen
          nameOfKin={nameOfKin}
          setNameOfKin={setNameOfKin}
          phoneOfKin={phoneOfKin}
          setPhoneOfKin={setPhoneOfKin}
          relationshipOfKin={relationshipOfKin}
          setRelationshipOfKin={setRelationshipOfKin}
          prevFunc={currentScreen == startingScreen ? null : prevFunc}
          nextFunc={() => {
            console.log("Name of NOK : ", nameOfKin);
            console.log("Phone no. of NOK :", phoneOfKin);
            console.log("Relationship to Patient :", relationshipOfKin);
          }}
          customNextBtnText="Finish"
          nextHref="/home"
        />
      ) : (
        <div>Thank you </div>
      )}
    </div>
  );
};

export default OnboardingStepper;
