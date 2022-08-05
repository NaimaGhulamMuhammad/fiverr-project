import { EditInformationField } from "./EditInformationField";
import { EditSelectInfoField } from "./EditSelectInfoField";

interface EditMedicalDetailsProps {
  data: {
    bloodGroup: string;
    height: string;
    weight: string;
    allergies: string;
    medicalHistory: string;
    currentMed: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditMedicalDetails = ({
  data,
  handleChange,
}: EditMedicalDetailsProps) => {
  return (
    <div className="flex flex-col mt-6">
      <form>
        <EditSelectInfoField
          label="Blood Group"
          name="bloodGroup"
          method={handleChange}
          options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
        />
        <EditInformationField
          label="Height (cm)"
          type="number"
          name="height"
          value={data.height}
          method={handleChange}
        />
        <EditInformationField
          label="Weight (kg)"
          type="number"
          name="weight"
          value={data.weight}
          method={handleChange}
        />
        <EditInformationField
          label="Allergies"
          value={data.allergies}
          name="allergies"
          type="text"
          method={handleChange}
        />
        <EditInformationField
          label="Medical History"
          value={data.medicalHistory}
          name="medicalHistory"
          type="text"
          method={handleChange}
        />
        <EditInformationField
          label="Medications"
          value={data.currentMed}
          name="currentMed"
          type="text"
          method={handleChange}
        />
      </form>
    </div>
  );
};

export default EditMedicalDetails;
