import { RegularText, SmallText } from "../core/Text";
import ViewInformationField from "./view-information-field";

const PersonalProfile = () => {
  return (
    <div className="flex flex-col mt-6 mb-12">
      <div className="flex flex-row items-center px-2">
        <div className="flex w-full items-center justify-between border-b border-slate-300">
          <div className="flex flex-col items-start justify-center">
            <SmallText classes="font-general">Name</SmallText>
            <RegularText classes="font-general">
              Venkatesh Chakrabarty
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
      <ViewInformationField label="Contact Number" value="+91-9888888888" />
      <ViewInformationField label="Email" value="venkatesh@gmail.com" />
      <ViewInformationField label="Location" value="Singapore" />
      <ViewInformationField label="Date of Birth" value="2000/12/25" />
      <ViewInformationField label="Marital Status" value="Available" />
      <ViewInformationField label="Blood Group" value="O+" />
      <ViewInformationField label="Height" value="175" suffix="cm" />
      <ViewInformationField label="Weight" value="65" suffix="kg" />
      <ViewInformationField label="Emergency Contact" value="+91-9888888888" />
    </div>
  );
};

export default PersonalProfile;
