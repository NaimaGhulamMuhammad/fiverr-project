import { SmallText } from "../core/Text";
import { EditInformationField } from "./EditInformationField";
import { EditSelectInfoField } from "./EditSelectInfoField";

interface EditPersonalDetailsProps {
  data: {
    firstName: string;
    lastName: string;
    gender: string;
    maritalStatus: string;
    nationality: string;
    dob: string;
    phone: string;
    email: string;
    location: string;
    postal: string;
    passport: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditPersonalDetails = ({
  data,
  handleChange,
}: EditPersonalDetailsProps) => {
  return (
    <div className="flex flex-col mt-6">
      <form>
        <div className="flex flex-col items-center px-1">
          <div className="flex justify-end">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/images/profile/profile.png"
                alt="profile"
                className="w-16 h-16 object-cover rounded-half"
              />
              <SmallText classes="font-general font-bold text-primary-100 mb-2">
                Upload Photo
              </SmallText>
            </div>
          </div>
        </div>
        <EditInformationField
          label="First Name"
          type="text"
          name="firstName"
          value={data.firstName}
          method={handleChange}
        />
        <EditInformationField
          label="Last Name"
          type="text"
          name="lastName"
          value={data.lastName}
          method={handleChange}
        />
        <EditSelectInfoField
          label="Gender"
          name="gender"
          method={handleChange}
          options={["Male", "Female", "Others"]}
        />
        <EditSelectInfoField
          label="Marital Status"
          name="maritalStatus"
          method={handleChange}
          options={["Single", "Married"]}
        />
        <EditInformationField
          label="Nationality"
          type="text"
          name="nationality"
          value={data.nationality}
          method={handleChange}
        />
        <EditInformationField
          label="Date of Birth"
          type="date"
          name="dob"
          value={data.dob}
          method={handleChange}
        />
        <EditInformationField
          label="Phone No."
          type="number"
          name="phone"
          value={data.phone}
          method={handleChange}
        />
        <EditInformationField
          label="Email"
          type="email"
          name="email"
          value={data.email}
          method={handleChange}
        />
        <EditInformationField
          label="Location"
          type="text"
          name="location"
          value={data.location}
          method={handleChange}
        />
        <EditInformationField
          label="Postal"
          type="number"
          name="postal"
          value={data.postal}
          method={handleChange}
        />
        <EditInformationField
          label="NRIC / FIN / Passport"
          type="text"
          name="passport"
          value={data.passport}
          method={handleChange}
        />
      </form>
    </div>
  );
};

export default EditPersonalDetails;
