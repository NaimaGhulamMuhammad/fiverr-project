import { useRouter } from "next/router";
import { Card } from "../core/Card";
import { RegularText, MediumText, FadedSmallText } from "../core/Text";
import { Button } from "../core/Buttons";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoLocationOutline,
  IoArrowForward,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const LabResultCardItem = ({ labResults }) => {
  return (
    <>
      {labResults.map((result, idx) => (
        <Card key={idx} classes="px-2 pt-3 my-4">
          <div className="flex mb-4">
            <div className="mr-3 flex justify-center items-center flex-none">
              <div className="rounded-md px-2 pt-2 border bg-slate-50">
                <img
                  src="/icons/flask.png"
                  alt="lab-results"
                  width="50"
                  height="50"
                />
              </div>
            </div>
            <div className="flex flex-col justify-evenly space-y-3">
              <RegularText classes="font-title">
                {result.packageName}
              </RegularText>
              <div className="flex space-x-2.5">
                <div className="flex items-center">
                  <IoCalendarOutline className="w-5 h-5 text-primary-100 mr-1" />
                  <FadedSmallText>{result.date}</FadedSmallText>
                </div>
                <div className="flex items-center">
                  <IoTimeOutline className="w-5 h-5 text-primary-100 mr-1" />
                  <FadedSmallText>{result.time}</FadedSmallText>
                </div>
              </div>
              <div className="flex items-center">
                <IoLocationOutline className="w-5 h-5 text-primary-100 mr-1 flex-none" />
                <FadedSmallText>{result.location}</FadedSmallText>
              </div>
            </div>
          </div>
          <Link to={"/lab-results/details"}>
            <Button handleClick={() => {}} full primary classes={"rounded-lg"}>
              <div className="flex justify-center space-x-2">
                <MediumText classes="font-title">View Result</MediumText>
                <IoArrowForward size="1.2em" className="self-center" />
              </div>
            </Button>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default LabResultCardItem;
