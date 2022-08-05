import { ViewInformationField } from "./ViewInformationField";

interface NOKDetailsProps {
  data: {
    emergencyContact: string;
    nameOfNOK: string;
    relationship: string;
    phone: string;
    allergies: string;
  };
}

const NOKDetails = ({ data }: NOKDetailsProps) => {
  return (
    <div className="flex flex-col mt-6 mb-12">
      <ViewInformationField
        label="Emergency Contact"
        value={data?.emergencyContact}
      />
      <ViewInformationField label="Next of Kin" value={data?.nameOfNOK} />
      <ViewInformationField label="Relationship" value={data?.relationship} />
      <ViewInformationField label="Contact Number" value={data?.phone} />
      <ViewInformationField label="Allergies" value={data?.allergies} />
    </div>
  );
};

export default NOKDetails;
