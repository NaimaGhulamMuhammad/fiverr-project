import { Storage } from "@capacitor/storage";
const useLocalDetails = () => {
  const getSalutation = async () => {
    const { value } = await Storage.get({ key: "salutation" });
    return value == null ? "Mr" : value;
  };
  const getFirstname = async () => {
    const { value } = await Storage.get({ key: "firstName" });
    return value == null ? "" : value;
  };
  const getLastname = async () => {
    const { value } = await Storage.get({ key: "lastName" });
    return value == null ? "" : value;
  };
  const getDob = async () => {
    const { value } = await Storage.get({ key: "dateOfBirth" });
    return value == null ? new Date() : value;
  };
  const getGender = async () => {
    const { value } = await Storage.get({ key: "gender" });
    return value == null ? "" : value;
  };
  const getCountry = async () => {
    const { value } = await Storage.get({ key: "country" });
    return value == null ? "Select country" : value;
  };
  const getIdentities = async () => {
    const { value } = await Storage.get({ key: "identities" });
    return value == null
      ? [
          {
            type: "NRIC",
            value: "",
          },
        ]
      : JSON.parse(value);
  };
  const getIdentitiesFromType = async (type) => {
    const { value } = await Storage.get({ key: "identities" });
    return value == null
      ? {
          type: type,
          value: "",
        }
      : JSON.parse(value).find((id) => id.type == type)
      ? JSON.parse(value).find((id) => id.type == type)
      : {
          type: type,
          value: "",
        };
  };
  const getAddresses = async () => {
    const { value } = await Storage.get({ key: "addresses" });
    return value == null
      ? [
          {
            location: "",
            postalCode: "",
            unitNo: "",
          },
        ]
      : JSON.parse(value);
  };
  const getContacts = async () => {
    const { value } = await Storage.get({ key: "contacts" });
    return value == null
      ? [
          {
            type: "phone",
            value: "",
          },
        ]
      : JSON.parse(value);
  };
  const getAllergies = async () => {
    const { value } = await Storage.get({ key: "allergies" });
    return value == null
      ? {
          drugAllergies: [],
          foodAllergies: [],
        }
      : JSON.parse(value);
  };
  const getMedicalHistory = async () => {
    const { value } = await Storage.get({ key: "medicalHistory" });
    return value == null ? [] : JSON.parse(value);
  };
  const getCurrentMedications = async () => {
    const { value } = await Storage.get({ key: "currentMedication" });
    return value == null ? [] : JSON.parse(value);
  };
  const getNokDetails = async () => {
    const { value } = await Storage.get({ key: "nokDetails" });
    return value == null
      ? {
          name: "",
          phone: [
            {
              value: "",
            },
          ],
          relationship: "",
        }
      : JSON.parse(value);
  };

  return {
    getAddresses,
    getAllergies,
    getContacts,
    getCountry,
    getCurrentMedications,
    getDob,
    getFirstname,
    getGender,
    getIdentities,
    getIdentitiesFromType,
    getLastname,
    getMedicalHistory,
    getSalutation,
    getNokDetails,
  };
};

export default useLocalDetails;
