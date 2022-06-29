import { Card } from "../../core/Card";
import { FadedMediumText, MediumText } from "../../core/Text";

const AppointmentDetails = () => {
  return (
    <Card classes={"px-4 py-3"}>
      <MediumText classes={"mb-2 font-semibold"}>
        Appointment Details
      </MediumText>
      <div className="flex justify-between">
        <FadedMediumText>Appointment ID</FadedMediumText>
        <MediumText>GW41BK-0667</MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Booking time</FadedMediumText>
        <MediumText>1st May 2022, 21:22</MediumText>
      </div>
      <div className="flex justify-between">
        <FadedMediumText>Number of patient(s)</FadedMediumText>
        <MediumText>1</MediumText>
      </div>
    </Card>
  );
};

export default AppointmentDetails;
