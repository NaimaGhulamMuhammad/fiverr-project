import { SmallText, RegularText } from "../core/Text";
import { ViewInformationField } from "./ViewInformationField";

interface PersonalDetailsProps {
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
}

const PersonalDetails = ({ data }: PersonalDetailsProps) => {
  return (
    <div className="flex flex-col mt-6 mb-12">
      <div className="flex flex-row items-center px-2">
        <div className="flex w-full items-center justify-between border-b border-slate-300">
          <div className="flex flex-col items-start justify-center">
            <SmallText classes="font-general">Name</SmallText>
            <RegularText classes="font-general">
              {data?.firstName} {data?.lastName}
            </RegularText>
          </div>
          <div className="flex justify-end">
            <img
              src="/assets/images/profile/profile.png"
              alt="profile"
              className="w-16 h-16 object-cover rounded-half"
            />
          </div>
        </div>
      </div>
      <ViewInformationField label="Gender" value={data?.gender} />
      <ViewInformationField
        label="Marital Status"
        value={data?.maritalStatus}
      />
      <ViewInformationField label="Nationality" value={data?.nationality} />
      <ViewInformationField label="Date of Birth" value={data?.dob} />
      <ViewInformationField label="Contact Number" value={data?.phone} />
      <ViewInformationField label="Email" value={data?.email} />
      <ViewInformationField label="Address" value={data?.location} />
      <ViewInformationField label="Postal" value={data?.postal} />
      <ViewInformationField
        label="NRIC / FIN / Passport"
        value={data?.passport}
      />
    </div>
  );
};

export default PersonalDetails;
