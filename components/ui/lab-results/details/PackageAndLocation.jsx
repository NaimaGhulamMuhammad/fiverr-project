import { Card } from "../../core/Card";
import {
  FadedMediumText,
  MediumText,
  RegularText,
  SmallText,
} from "../../core/Text";

const PackageAndLocation = () => {
  return (
    <Card
      classes={"flex justify-center flex-col items-center px-4 py-3 rounded-lg"}
    >
      <div className="flex items-center space-x-2">
        <div className="rounded-full p-1.5 border bg-slate-50">
          <img
            src={"/icons/flask.png"}
            alt="lab-results"
            width={25}
            height={25}
          />
        </div>
        <RegularText classes={"font-semibold font-title"}>
          Healthy Life 3
        </RegularText>
      </div>
      <FadedMediumText>at</FadedMediumText>
      <MediumText classes={"font-semibold text-center font-title"}>
        My HealthCare Collective
      </MediumText>
      <SmallText classes={"text-center"}>
        Farrer Park Medical Centre Connexion Unit 12-11, 1 Farrer Park Station
        Road Singapore 217562
      </SmallText>
    </Card>
  );
};

export default PackageAndLocation;
