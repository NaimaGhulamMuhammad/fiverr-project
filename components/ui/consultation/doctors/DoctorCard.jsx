import { Button } from "../../core/Buttons";
import { Card } from "../../core/Card";
import { HiStatusOnline } from "react-icons/hi";
import { FaRegAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Bookmark from "../../core/Bookmark";
import {
  FadedSmallText,
  MediumText,
  RegularText,
  SmallText,
} from "../../core/Text";

const DoctorCard = ({ doctor, bookmarked }) => {
  return (
    <Card dropShadow classes={"w-full relative my-4 py-2 px-4 z-0"}>
      <div className="flex flex-row justify-between">
        <Link to={`/doctor?id=${doctor.id}`}>
          <div className="flex items-center mb-2">
            <img
              src={doctor.imageUrl}
              alt="myhc"
              width={60}
              height={60}
              className="rounded-half"
            />
            <div className="mx-2">
              <RegularText classes={"font-semibold mr-4"}>
                {doctor.name}
              </RegularText>
              <SmallText classes={"text-secondary-100 font-semibold"}>
                {doctor.speciality}
              </SmallText>
              <FadedSmallText>15 years experience</FadedSmallText>
            </div>
            {doctor.mode.includes("Online") ? (
              <div className="absolute right-4 top-2">
                <HiStatusOnline className="w-4 h-4 text-emerald-500" />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="">
            <div className="flex items-center mt-4 mb-2">
              <FaRegAddressBook className="w-4 h-4 text-primary-100" />
              <SmallText classes={"mx-2"}>{doctor.location}</SmallText>
            </div>
            <div className="flex items-center">
              <MediumText classes={"text-primary-100 font-semibold"}>
                {doctor.fees}
              </MediumText>
              <SmallText>&nbsp;per consultation</SmallText>
            </div>
          </div>
        </Link>
        <div className="self-end mb-4">
          <Bookmark marked={bookmarked} />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <Button
          href={`/doctors/book-appointment/${doctor.id}`}
          primary
          full={!doctor.mode.includes("Online")}
        >
          <SmallText classes={"font-semibold"}>Book Appointment</SmallText>
        </Button>
        {doctor.mode.includes("Online") ? (
          <Button href={"/online-consultation/book-consultation"}>
            <SmallText classes={"font-semibold"}>Consult Online</SmallText>
          </Button>
        ) : (
          <></>
        )}
      </div>
    </Card>
  );
};

export default DoctorCard;
