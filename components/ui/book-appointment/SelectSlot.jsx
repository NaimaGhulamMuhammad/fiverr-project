import Accordion from "../core/Accordion";
import { BsCloudSun, BsSun, BsSunset } from "react-icons/bs";
import { TimeSlotSection } from "./TimeSlotSection";

const SelectSlot = ({
  slotKey,
  shownTimeslots,
  selectedTimeslot,
  setSelectedTimeslot,
  setSlotKey,
}) => {
  return (
    <div className="my-2 flex flex-col">
      <Accordion
        title={
          <div
            className={
              slotKey === 0 ? "flex flex-row text-primary-100" : "flex flex-row"
            }
          >
            <BsCloudSun
              size="20px"
              className={slotKey === 0 ? "mr-2 text-primary-100" : "mr-2"}
            />
            Morning
          </div>
        }
        handleClick={() => setSlotKey(0)}
        content={
          shownTimeslots.morning != [] && shownTimeslots.morning ? (
            <TimeSlotSection
              setSelectedTimeslot={setSelectedTimeslot}
              selectedTimeslot={selectedTimeslot}
              timeslots={shownTimeslots.morning}
            />
          ) : (
            "No Available Slots"
          )
        }
        open={slotKey === 0}
        downArrowClasses={slotKey === 0 ? "text-primary-100" : ""}
      />
      <Accordion
        title={
          <div
            className={
              slotKey === 1 ? "flex flex-row text-primary-100" : "flex flex-row"
            }
          >
            <BsSun
              size="20px"
              className={slotKey === 1 ? "mr-2 text-primary-100" : "mr-2"}
            />
            Afternoon
          </div>
        }
        handleClick={() => setSlotKey(1)}
        content={
          shownTimeslots.afternoon != [] && shownTimeslots.afternoon ? (
            <TimeSlotSection
              setSelectedTimeslot={setSelectedTimeslot}
              selectedTimeslot={selectedTimeslot}
              timeslots={shownTimeslots.afternoon}
            />
          ) : (
            "No Available Slots"
          )
        }
        open={slotKey === 1}
        downArrowClasses={slotKey === 1 ? "text-primary-100" : ""}
      />
      <Accordion
        title={
          <div
            className={
              slotKey === 2 ? "flex flex-row text-primary-100" : "flex flex-row"
            }
          >
            <BsSunset
              size="24px"
              className={slotKey === 2 ? "mr-2 text-primary-100" : "mr-2"}
            />
            Evening
          </div>
        }
        handleClick={() => setSlotKey(2)}
        content={
          shownTimeslots.evening != [] && shownTimeslots.evening ? (
            <TimeSlotSection
              setSelectedTimeslot={setSelectedTimeslot}
              selectedTimeslot={selectedTimeslot}
              timeslots={shownTimeslots.evening}
            />
          ) : (
            "No Available Slots"
          )
        }
        open={slotKey === 2}
        downArrowClasses={slotKey === 2 ? "text-primary-100" : ""}
      />
    </div>
  );
};

export default SelectSlot;
