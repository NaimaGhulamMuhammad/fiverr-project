import { useEffect } from "react";
import { TopHeader } from "../../../ui/layouts/Headers";
import Container from "../../../ui/layouts/Container";
import BookingSummary from "../../../ui/consultation/online/BookingSummary";
import BookingFloater from "../../../ui/consultation/online/BookingFloater";
import useNav from "../../../../lib/hooks/useNav";
import { IonContent, IonPage } from "@ionic/react";

const BookConsultation = () => {
  const { hideNav, showNav } = useNav();

  useEffect(() => {
    hideNav();
    return () => {
      showNav();
    };
  }, []);

  return (
    <IonPage>
      <TopHeader pageName={"Book Video Consultation"} back />
      <IonContent>
        <Container>
          <BookingSummary />
          <BookingFloater />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default BookConsultation;
