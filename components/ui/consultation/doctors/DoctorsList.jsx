import { SubHeadingText } from "../../core/Text";
import DoctorCard from "./DoctorCard";
import { DOCTORS } from "../../../../lib/data";

const DoctorsList = ({ mode, specialty }) => {
  return (
    <div>
      <SubHeadingText>Doctors for you</SubHeadingText>
      <div>
        {specialty === "All" && mode === "All"
          ? DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          : DOCTORS.filter(
              (doctor) =>
                doctor.mode.includes(mode) &&
                (doctor.speciality === specialty || specialty === "All")
            ).map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
      </div>
    </div>
  );
};

export default DoctorsList;
