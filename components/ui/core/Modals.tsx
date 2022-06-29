import { ReactNode } from "react";
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

// *All of the modals must be placed inside the IonContent

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
  router?: HTMLIonRouterOutletElement | null;
}

interface AlertProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  message: string;
  destructive?: boolean;
}

export const FullScreenModal = ({
  isOpen,
  closeModal,
  title,
  children,
}: ModalProps) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={closeModal}>
      <IonContent className="ion-padding">
        <IonHeader translucent className="mb-4">
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {children}
      </IonContent>
    </IonModal>
  );
};

export const BottomSheetModal = ({
  isOpen,
  closeModal,
  title,
  children,
}: ModalProps) => {
  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={closeModal}
      breakpoints={[0, 0.5, 1]}
      initialBreakpoint={0.5}
    >
      <IonContent className="ion-padding">
        <IonHeader translucent className="mb-4">
          <IonToolbar>
            <IonTitle className="text-base">{title}</IonTitle>
            <IonButtons slot="end">
              <div onClick={closeModal} className="text-xs font-semibold">
                CLOSE
              </div>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonModal>
  );
};

//? CardModal only works with iOS, on Android it will shows just as the same as FullScreenModal
export const CardModal = ({
  isOpen,
  closeModal,
  title,
  children,
  router,
}: ModalProps) => {
  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={closeModal}
      swipeToClose={true}
      presentingElement={router || undefined}
    >
      <IonContent className="ion-padding">
        <IonHeader translucent className="mb-4">
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonModal>
  );
};

export const AlertModal = ({
  isOpen,
  closeModal,
  title,
  message,
  destructive,
}: AlertProps) => {
  return (
    <>
      <IonAlert
        mode="ios"
        translucent
        isOpen={isOpen}
        onDidDismiss={closeModal}
        header={title}
        message={message}
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => console.log("close modal"),
          },
          {
            text: "Yes",
            role: destructive && "destructive",
            handler: () => console.log("yes click"),
          },
        ]}
      />
    </>
  );
};
