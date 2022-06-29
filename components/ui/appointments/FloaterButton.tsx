import { Button } from "../core/Buttons";
import Floater from "../core/Floater";
import Link from "react-router-dom";
interface FloaterButtonProps {
  appointmentId: string;
  isCancelled: boolean;
  isCompleted: boolean;
  openModal: () => void;
}

const FloaterButton = ({
  appointmentId,
  isCancelled,
  isCompleted,
  openModal,
}: FloaterButtonProps) => {
  return (
    <>
      {isCancelled ? (
        <div> </div>
      ) : isCompleted ? (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded"
            handleClick={() => console.log("Viewing prescriptions")}
          >
            View Prescription
          </Button>
        </Floater>
      ) : (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded mr-2"
            handleClick={openModal}
          >
            Cancel
          </Button>
          <Button
            href={`/appointment/reschedule/${appointmentId}`}
            classes="w-full font-semibold py-2 px-4 rounded ml-2"
            primary={true}
            handleClick={() => console.log("Confirm Reschedule")}
          >
            Reschedule
          </Button>
        </Floater>
      )}
    </>
  );
};

export default FloaterButton;
