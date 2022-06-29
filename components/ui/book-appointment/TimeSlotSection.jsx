import { MediumText } from "../core/Text";
import { MdOutlineWatchLater } from "react-icons/md";

export const TimeSlotSection = ({
  timeslots,
  selectedTimeslot,
  setSelectedTimeslot,
}) => {
  return (
    <div className="flex flex-row my-2 flex-wrap">
      {timeslots && timeslots.length > 0 ? (
        timeslots.map((time, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center shadow w-20 mr-2 mb-2 h-16 rounded-lg border ${
              time == selectedTimeslot &&
              "bg-secondary-5 border-secondary-100 text-secondary-100"
            }`}
            onClick={() => {
              setSelectedTimeslot(time);
            }}
          >
            <MdOutlineWatchLater size="20px" className="mb-1" />

            <MediumText classes="font-medium">{time}</MediumText>
          </div>
        ))
      ) : (
        <div>No Available Slots</div>
      )}
    </div>
  );
};
