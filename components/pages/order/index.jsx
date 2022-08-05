import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { Button } from "../../ui/core/Buttons";
import Floater from "../../ui/core/Floater";
import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderDetails from "../../ui/order/OrderDetails";
import PatientDetails from "../../ui/appointments/PatientDetails";
import PaymentDetails from "../../ui/appointments/payment-details";

import { ORDERS, ITEMS, PATIENTS, CASES } from "../../../lib/data";

const OrderDetailsPage = () => {
  const [order, setOrder] = useState(null);
  const [pack, setPack] = useState(null);
  const [patient, setPatient] = useState(null);
  const [items, setItems] = useState(null);
  const [cases, setCases] = useState(null);
  const params = useParams();

  useEffect(() => {
    const order = ORDERS.find((order) => order.id.toString() === params.id);
    const pack = ITEMS.find((item) => item.id === order?.basket[0]?.itemId);
    const patient = PATIENTS.find((patient) => patient.id === order?.patientId);
    const items = ITEMS.filter(
      (item) =>
        item.id === order?.basket[0]?.selectedOptionalItemIds?.[0] ||
        item.id === order?.basket[0]?.selectedOptionalItemIds?.[1]
    );
    const cases = CASES.find((case_) =>
      case_.orderIds.includes(order.id.toString())
    );

    setOrder(order);
    setPack(pack);
    setPatient(patient);
    setItems(items);
    setCases(cases);
  }, [params.id]);

  return (
    <IonPage>
      <TopHeader pageName={"Order Details"} back={true} />
      <IonContent>
        <Container>
          <OrderDetails order={order} pack={pack} items={items} />
          <PatientDetails patient={patient} />
          <PaymentDetails />
          {cases?.appointmentIds.length === 0 && (
            <Floater>
              <Button full primary href="#">
                Book Appointment
              </Button>
            </Floater>
          )}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default OrderDetailsPage;
