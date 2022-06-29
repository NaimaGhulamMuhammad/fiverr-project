import React from "react";
import AppointmentCard from "./homeComponents/AppointmentCard";
import {
  BsFillArrowRightCircleFill,
  BsClock,
  BsCalendar2CheckFill,
} from "react-icons/bs";
import { Button } from "../core/Buttons";
import Link from "next/link";
import { APPOINTMENTS } from "../../../lib/data";

const Appointments = () => {
  return (
    <div className="mb-4 px-4 font-general">
      <div className="font-title text-sectionHead mb-2 py-2">Appointments</div>
      <div className="flex w-full overflow-x-auto snap-x md:justify-between pb-4 px-1">
        {APPOINTMENTS.length > 0 ? (
          APPOINTMENTS.map((appointment, idx) => (
            <AppointmentCard key={idx} appointment={appointment} />
          ))
        ) : (
          <div className="flex flex-col w-full items-center justify-center pt-4 px-2">
            <div className="flex items-center justify-center mb-4">
              <span className="mr-2">
                <BsClock size="24px" color="#000" opacity="50%" />
              </span>
              <span className="text-sm text-black/50 font-medium">
                No upcoming appointments.
              </span>
            </div>
            <Link passHref href="/consult">
              <span>
                <Button
                  handleClick={() => console.log("book now pressed")}
                  classes="text-xs flex items-center justify-center !bg-tertiary-100 border-none rounded-lg font-general font-medium py-2.5 px-4 drop-shadow"
                >
                  <BsCalendar2CheckFill
                    size="20px"
                    color="#fff"
                    className="mr-2"
                  />
                  Book Now
                </Button>
              </span>
            </Link>
          </div>
        )}
        {APPOINTMENTS.length > 0 && (
          <Link href="/appointments">
            <div className="h-full flex flex-col items-center justify-center self-center ml-4 mr-8 w-40 text-typo">
              <span className="px-4 mb-2">
                <BsFillArrowRightCircleFill size="40px" color="#FF6B35" />
              </span>
              View All
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Appointments;
