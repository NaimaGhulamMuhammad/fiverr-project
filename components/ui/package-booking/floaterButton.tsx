import { Button } from "../core/Buttons";
import Floater from "../core/Floater";
import Link from "react-router-dom";
interface FloaterButtonProps {
  appointmentId: string;
  status: string;
  openModal: () => void;
}

const FloaterButton = ({
  appointmentId,
  status,
  openModal,
}: FloaterButtonProps) => {
  return (
    <>
      {status === "cancelled" ? (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded"
            handleClick={() => console.log("Viewing prescriptions")}
          >
            Book this package again
          </Button>
        </Floater>
      ) : status === "completed" ? (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded"
            handleClick={() => console.log("Viewing prescriptions")}
          >
            View Prescription/s
          </Button>
        </Floater>
      ) : (
        <Floater classes="w-full justify-around mt-4">
          <div className="flex justify-center w-1/2 mr-2">
            <Button
              classes="font-semibold py-2 rounded"
              full={true}
              handleClick={openModal}
            >
              Cancel
            </Button>
          </div>
          <div className="flex justify-center w-1/2 ml-2">
            <Button
              classes="font-semibold py-2 rounded"
              primary={true}
              full={true}
              href={`/appointment/reschedule/${appointmentId}`}
              handleClick={() => console.log("Confirm Reschedule")}
            >
              Reschedule
            </Button>
          </div>
        </Floater>
      )}
    </>
  );
};

export default FloaterButton;
