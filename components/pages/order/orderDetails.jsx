import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderStatus from "../../ui/package-booking/order-status";
import OrderDetails from "../../ui/package-booking/order-details";
import PatientDetails from "../../ui/appointments/patient-details";
import PaymentDetails from "../../ui/appointments/payment-details";

import { ORDERS, ITEMS, PATIENTS, SERVICES, BENEFITS } from "../../../lib/data";
// import useNav from "../../../lib/hooks/useNav";
// import { AlertModal } from "../../ui/core/Modals";
// import useModal from "../../../lib/hooks/useModal";
import FloaterButton from "../../ui/package-booking/floaterButton";

const OrderDetailsPage = () => {
  const allMappedOrders = () => {
    return ORDERS.map((order) => {
      const mappedOrder = {
        ...order,
        package: ITEMS.find((item) => item.id === order?.basket[0]?.itemId),
        patient: PATIENTS.find((patient) => patient.id === order?.patientId),
      };
      return mappedOrder;
    });
  };
  const allOrders = allMappedOrders();

  const [userOrder, setUserOrder] = useState(null);
  const [patient, setPatient] = useState(null);
  const params = useParams();

  //find the order where id = params.id using useEffect
  useEffect(() => {
    const userOrder = allOrders.find(
      (order) => order.id === parseInt(params.id)
    );
    setUserOrder(userOrder);
  }, []);

  console.log("allOrders", allOrders);
  console.log("userOrder", userOrder);

  // const { isOpen, openModal, closeModal } = useModal();
  // const { hideNav, showNav } = useNav();

  // useEffect(() => {
  //   hideNav();
  //   return () => {
  //     showNav();
  //   };
  // }, []);

  return (
    <IonPage>
      <TopHeader pageName={"Order Details"} back={true} />
      <IonContent>
        <Container>
          <OrderStatus order={userOrder} />
          <OrderDetails order={userOrder} />
          <PatientDetails
            patientName="Venkatesh Chakrabarty"
            patientEmail="venkatesh@gmail.com"
          />
          <PaymentDetails />
          <FloaterButton
            orderId={userOrder?.id}
            status={userOrder?.status}
            // openModal={openModal}
          />
        </Container>
        {/* <AlertModal
          isOpen={isOpen}
          closeModal={closeModal}
          title="Cancel Confirmation"
          message="Are you sure want to cancel this order?"
          destructive
        /> */}
      </IonContent>
    </IonPage>
  );
};

export default OrderDetailsPage;
