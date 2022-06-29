import { useState, useEffect } from "react";
import SelectLocation from "./SelectLocation";
import SelectTimeslot from "./SelectTimeslot";
import RoundedBottomBar from "../layouts/RoundedBottomBar";
import SelectSlot from "./SelectSlot";
import { useTimeslots } from "../../../lib/hooks/getTimeSlots";
import { useDisabledDates } from "../../../lib/hooks/getDisabledDates";
import { useQuickDateslots } from "../../../lib/hooks/getQuickDateslots";

const DoctorSlots = ({ doctor, btnText, href }) => {
  const getQuickDateSlots = useQuickDateslots();
  const getDisabledDates = useDisabledDates();
  const getTimeslots = useTimeslots();
  const [locationKey, setLocationKey] = useState();
  const [dateSlots, setDateSlots] = useState();
  const [slotKey, setSlotKey] = useState(0); // 0 : Morning , 1 : Afternoon , 2: Evening
  const [selectedDate, setSelectedDate] = useState();
  const [startDate, setStartDate] = useState();
  const [disabledDates, setDisabledDates] = useState();
  const [shownTimeslots, setTimeslots] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });
  const [selectedTimeslot, setSelectedTimeslot] = useState();

  const bookAppointment = () => {
    if (selectedDate && locationKey && selectedTimeslot) {
      console.log({
        date: selectedDate,
        time: selectedTimeslot,
      });
    }
  };

  // use effect chaining :
  // doctor -> setlocation -> setdateslots -> setSelectedDate -> set available time slots

  //Set location when doctor is loaded
  useEffect(() => {
    if (doctor) {
      setLocationKey(doctor.workSchedule[0].branchid);
    }
  }, [doctor]);

  // set dateslots whenever locationKey is changed
  useEffect(() => {
    if (doctor) {
      const dates = getQuickDateSlots(doctor, locationKey);
      setDateSlots(dates);
      setStartDate();
      setDisabledDates(
        getDisabledDates(
          doctor.workSchedule.find((doc) => doc.branchid == locationKey)
            ? doctor.workSchedule.find((doc) => doc.branchid == locationKey)
                .specialHours
            : []
        )
      );
      setSelectedTimeslot();
    }
  }, [locationKey]);

  // Initialize selected date to first date whenever date slots are initialized
  useEffect(() => {
    if (dateSlots) {
      setSelectedDate(dateSlots[0]);
    }
  }, [dateSlots]);

  // set selected date to date picker's selected date
  useEffect(() => {
    if (startDate) {
      setSelectedDate(startDate);
    }
  }, [startDate]);

  // set timeslots whenever selected date is changed
  useEffect(() => {
    if (selectedDate) {
      setTimeslots(getTimeslots(doctor, selectedDate, locationKey));
      setSlotKey(0);
    }
  }, [selectedDate]);

  // reset timeslot whenever we change slots (eg : morning to afternoon)
  useEffect(() => {
    setSelectedTimeslot();
  }, [slotKey]);

  return (
    <div className="mt-4 font-general">
      <SelectLocation
        doctor={doctor}
        locationKey={locationKey}
        setLocationKey={setLocationKey}
      />
      <SelectTimeslot
        dateSlots={dateSlots}
        disabledDates={disabledDates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setStartDate={setStartDate}
        startDate={startDate}
      />
      <SelectSlot
        slotKey={slotKey}
        shownTimeslots={shownTimeslots}
        selectedTimeslot={selectedTimeslot}
        setSelectedTimeslot={setSelectedTimeslot}
        setSlotKey={setSlotKey}
      />
      <RoundedBottomBar
        text={btnText}
        handleClick={bookAppointment}
        clickable={selectedDate && locationKey && selectedTimeslot}
        href={href}
      />
    </div>
  );
};

export default DoctorSlots;
