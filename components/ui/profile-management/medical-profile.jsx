import ViewInformationField from "./view-information-field";

const MedicalProfile = () => {
  return (
    <div className="flex flex-col mt-6 mb-12">
      <ViewInformationField label="Allergies" value="None" />
      <ViewInformationField label="Current Medications" value="None" />
      <ViewInformationField label="Past Medications" value="None" />
      <ViewInformationField label="Chronic Diseases" value="None" />
      <ViewInformationField label="Injuries" value="None" />
      <ViewInformationField label="Surgeries" value="None" />
    </div>
  );
};

export default MedicalProfile;
