import { EditInformationField } from "./EditInformationField";
import { EditSelectInfoField } from "./EditSelectInfoField";

interface EditNOKDetailsProps {
  data: {
    emergencyContact: string;
    nameOfNOK: string;
    relationship: string;
    phone: string;
    allergies: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditNOKDetails = ({ data, handleChange }: EditNOKDetailsProps) => {
  return (
    <div className="flex flex-col mt-6">
      <form>
        <EditInformationField
          label="Emergency Contact"
          type="number"
          name="emergencyContact"
          value={data.emergencyContact}
          method={handleChange}
        />
        <EditInformationField
          label="Next of Kin"
          type="text"
          name="nameOfNOK"
          value={data.nameOfNOK}
          method={handleChange}
        />
        <EditSelectInfoField
          label="Relationship"
          name="relationship"
          method={handleChange}
          options={["Parent", "Sibling", "Spouse", "Others"]}
        />
        <EditInformationField
          label="Contact Number"
          type="number"
          name="phone"
          value={data.phone}
          method={handleChange}
        />
        <EditInformationField
          label="Allergies"
          type="text"
          name="allergies"
          value={data.allergies}
          method={handleChange}
        />
      </form>
    </div>
  );
};

export default EditNOKDetails;
