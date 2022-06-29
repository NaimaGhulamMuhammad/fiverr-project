import { Card } from "../../core/Card";
import {
  FadedMediumText,
  FadedRegularText,
  FadedSmallText,
  MediumText,
  RegularText,
  SmallText,
} from "../../core/Text";

const BookingSummary = () => {
  return (
    <Card classes={"px-4 py-4"}>
      <div className="flex items-center">
        <img
          src="https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png"
          width={50}
          height={50}
          className="rounded-half"
          alt="myhc"
        />
        <div className={"mx-2"}>
          <RegularText>Dr. John Doe</RegularText>
          <SmallText classes={"text-primary-100 font-semibold"}>
            General Physician
          </SmallText>
        </div>
      </div>
      <FadedSmallText classes={"mt-2"}>
        Your appointment will be confirmed instantly.
      </FadedSmallText>
      <div className="flex items-center my-6">
        <div>
          <RegularText>Patient Details</RegularText>
          <FadedMediumText>James Collins</FadedMediumText>
          <FadedMediumText>johndoe@gmail.com</FadedMediumText>
        </div>
        <FadedSmallText
          classes={"text-blue-600 font-semibold underline ml-auto"}
        >
          Change
        </FadedSmallText>
      </div>
      <div className="my-8">
        <RegularText>Bill Details</RegularText>
        <div className="flex justify-between">
          <FadedMediumText>Consultation Fee</FadedMediumText>
          <MediumText>S$100</MediumText>
        </div>
        <div className="flex justify-between">
          <FadedMediumText>Service charge and tax</FadedMediumText>
          <MediumText>S$5</MediumText>
        </div>
        <div className="flex justify-between">
          <FadedMediumText>Coupon discount</FadedMediumText>
          <MediumText>-S$25</MediumText>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <FadedRegularText>Total Payable</FadedRegularText>
          <RegularText>S$80</RegularText>
        </div>
      </div>
      <div className="my-6">
        <FadedSmallText>- Cancellation charges applicable.</FadedSmallText>
        <FadedSmallText>
          - If consulation fails, we will refund the full amount.
        </FadedSmallText>
        <FadedSmallText>
          - Live support available during consultation.
        </FadedSmallText>
      </div>
    </Card>
  );
};

export default BookingSummary;
