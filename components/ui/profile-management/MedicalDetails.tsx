import { ViewInformationField } from "./ViewInformationField";

interface MedicalDetailsProps {
  data: {
    bloodGroup: string;
    height: string;
    weight: string;
    allergies: string;
    medicalHistory: string;
    currentMed: string;
  };
}

const MedicalDetails = ({ data }: MedicalDetailsProps) => {
  return (
    <div className="flex flex-col mt-6 mb-12">
      <ViewInformationField label="Blood Group" value={data?.bloodGroup} />
      <ViewInformationField label="Height" value={data?.height} suffix="cm" />
      <ViewInformationField label="Weight" value={data?.weight} suffix="kg" />
      <ViewInformationField label="Allergies" value={data?.allergies} />
      <ViewInformationField
        label="Medical History"
        value={data?.medicalHistory}
      />
      <ViewInformationField label="Medications" value={data?.currentMed} />
    </div>
  );
};

export default MedicalDetails;
