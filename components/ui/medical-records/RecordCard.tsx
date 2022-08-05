import { Card } from "../core/Card";
import { RegularText, FadedSmallText } from "../core/Text";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

interface RecordCardProps {
  name: string;
  link: string;
  noOfRecords: string;
}

const RecordCard = ({ name, link, noOfRecords }: RecordCardProps) => {
  return (
    <Link to={link}>
      <Card classes="flex flex-row w-full justify-between items-center h-20">
        <div className="flex flex-col w-4/5 justify-start items-start ml-2">
          <RegularText classes="font-bold">{name}</RegularText>
          <FadedSmallText classes="mt-2">
            {parseInt(noOfRecords) > 0
              ? `${noOfRecords} record${parseInt(noOfRecords) > 1 ? "s" : ""}`
              : "Not available"}
          </FadedSmallText>
        </div>
        <div className="flex flex-col w-1/5 h-full justify-center items-center">
          <BsPlusCircle className="text-primary-100 text-3xl" />
        </div>
      </Card>
    </Link>
  );
};

export default RecordCard;
