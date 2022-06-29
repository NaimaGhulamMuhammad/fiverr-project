import { Button } from "../../core/Buttons";
import Floater from "../../core/Floater";

const BookAppointmentFloater = () => {
  return (
    <Floater>
      <Button primary href="/doctors/book-appointment/1">
        Book Appointment
      </Button>
      <Button href="/online-consultation/book-consultation">
        Consult Online
      </Button>
    </Floater>
  );
};

export default BookAppointmentFloater;
