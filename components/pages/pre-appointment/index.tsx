import { IonContent, IonPage } from "@ionic/react";
import { useState, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Container from "../../ui/layouts/Container";
import Symptoms from "../../ui/pre-appointment/Symptoms";
import PersonalDetails from "../../ui/onboarding/screens/PersonalDetails";
import GenderScreen from "../../ui/onboarding/screens/GenderScreen";
import AddressScreen from "../../ui/onboarding/screens/AddressScreen";
import AllergiesScreen from "../../ui/onboarding/screens/AllergiesScreen";
import MedicalsScreen from "../../ui/onboarding/screens/MedicalsScreen";
import KinDetailsScreen from "../../ui/onboarding/screens/KinDetailsScreen";
import NationalityScreen from "../../ui/onboarding/screens/NationalityScreen";
import { useRouter } from "next/router";
import Records from "../../ui/pre-appointment/Records";
import Summary from "../../ui/pre-appointment/Summary";
import useLocalDetails from "../../../lib/hooks/useLocalDetails";
import { BlankHeader } from "../../ui/layouts/Headers";

const PreAppointmentPage = () => {
  const router = useRouter();
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
    getIdentitiesFromType,
  } = useLocalDetails();
  const [currentState, setCurrentState] = useState(0);
  const [salutation, setSalutation] = useState<string>("Mr");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [country, setCountry] = useState<string>("Select country");
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
  const [selectedIdType, setSelectedIdType] = useState("NRIC");
  const [startingDetailsScreen, setStartingDetailsScreen] = useState<number>(0);

  const getStartingDetailsScreen = () => {
    getFirstname().then((value) => {
      if (value == "") {
        setStartingDetailsScreen(0);
      } else {
        getGender().then((value) => {
          if (value == "") {
            setStartingDetailsScreen(1);
          } else {
            getCountry().then((value) => {
              if (value == "Select country") {
                setStartingDetailsScreen(2);
              } else {
                getAddresses().then((value) => {
                  if (value[0].location == "") {
                    setStartingDetailsScreen(3);
                  } else {
                    setStartingDetailsScreen(4);
                  }
                });
              }
            });
          }
        });
      }
    });
  };
  useEffect(() => {
    getStartingDetailsScreen();
  }, []);
  const initialiseValues = async () => {
    getSalutation().then((value) => setSalutation(value));
    getFirstname().then((value) => setFirstName(value));
    getLastname().then((value) => setLastName(value));
    getDob().then((value) => setBirthDate(new Date(value)));
    getGender().then((value) => setGender(value));
    getCountry().then((value) => setCountry(value));
    getIdentities().then((value) => {
      setSelectedIdType(value[0].type);
    });
    getAddresses().then((value) => {
      console.log(value);
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
  useEffect(() => {
    getIdentitiesFromType(selectedIdType).then((identity) =>
      setIdValue(identity.value)
    );
  }, [selectedIdType]);

  const nextFunc = () => {
    setCurrentState((prev) => {
      if (prev == 0) return prev + 1 + startingDetailsScreen;
      else return prev + 1;
    });
  };
  const prevFunc = () => {
    setCurrentState((prev) => {
      if (prev == startingDetailsScreen + 1) return 0;
      else return prev - 1;
    });
  };

  const stateMap = new Map();
  stateMap.set(0, <Symptoms nextFunc={nextFunc} />);
  stateMap.set(
    1,
    <PersonalDetails
      salutation={salutation}
      setSalutation={setSalutation}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      birthDate={birthDate}
      setBirthDate={setBirthDate}
      prevFunc={prevFunc}
      nextFunc={nextFunc}
    />
  );
  stateMap.set(
    2,
    <GenderScreen
      gender={gender}
      setGender={setGender}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
    />
  );
  stateMap.set(
    3,
    <NationalityScreen
      country={country}
      setCountry={setCountry}
      idValue={idValue}
      setIdValue={setIdValue}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
      selectedIdType={selectedIdType}
      setSelectedIdType={setSelectedIdType}
    />
  );
  stateMap.set(
    4,
    <AddressScreen
      address={address}
      setAddress={setAddress}
      unitNo={unitNo}
      setUnitNo={setUnitNo}
      postalCode={postalCode}
      setPostalCode={setPostalCode}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
    />
  );
  stateMap.set(
    5,
    <AllergiesScreen
      drugAllergy={drugAllergy}
      setDrugAllergy={setDrugAllergy}
      foodAllergy={foodAllergy}
      setFoodAllergy={setFoodAllergy}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
    />
  );
  stateMap.set(
    6,
    <MedicalsScreen
      medicalHistory={medicalHistory}
      setMedicalHistory={setMedicalHistory}
      currentMedications={currentMedications}
      setCurrentMedications={setCurrentMedications}
      nextFunc={nextFunc}
      prevFunc={prevFunc}
    />
  );
  stateMap.set(
    7,
    <KinDetailsScreen
      nameOfKin={nameOfKin}
      setNameOfKin={setNameOfKin}
      phoneOfKin={phoneOfKin}
      setPhoneOfKin={setPhoneOfKin}
      relationshipOfKin={relationshipOfKin}
      setRelationshipOfKin={setRelationshipOfKin}
      prevFunc={prevFunc}
      nextFunc={nextFunc}
    />
  );
  stateMap.set(8, <Records prevFunc={prevFunc} nextFunc={nextFunc} />);

  stateMap.set(9, <Summary />);

  const renderState = () => {
    return stateMap.get(currentState);
  };

  return (
    <IonPage>
      <BlankHeader />
      <IonContent>
        <Container>{renderState()}</Container>
      </IonContent>
    </IonPage>
  );
};

export default PreAppointmentPage;
