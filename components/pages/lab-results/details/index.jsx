import { useEffect } from "react";
import Container from "../../../ui/layouts/Container";
import { TopHeader } from "../../../ui/layouts/Headers";
import { Button } from "../../../ui/core/Buttons";
import Floater from "../../../ui/core/Floater";
import LabResultsTable from "../../../ui/lab-results/details/results-table/LabResultsTable";
import PackageAndLocation from "../../../ui/lab-results/details/PackageAndLocation";
import PatientDetails from "../../../ui/lab-results/details/PatientDetails";
import GlobalTestSummary from "../../../ui/lab-results/details/GlobalTestSummary";
import AppointmentDetails from "../../../ui/lab-results/details/AppointmentDetails";
import { IonContent, IonPage } from "@ionic/react";
import useNav from "../../../../lib/hooks/useNav";
import { labResultsData } from "../../../../lib/data/lab-results/lab-results.data";

const ResultDetails = () => {
  const { hideNav, showNav } = useNav();

  useEffect(() => {
    hideNav();
    return () => {
      showNav();
    };
  }, []);

  return (
    <IonPage>
      <TopHeader pageName={"Lab Result Details"} back />
      <IonContent>
        <Container>
          <PackageAndLocation />
          <PatientDetails />
          <AppointmentDetails />
          <GlobalTestSummary />
          <LabResultsTable labResultsData={labResultsData} />
          <Floater>
            <Button
              full
              handleClick={() => console.log("Downloading PDF file...")}
            >
              Download PDF File
            </Button>
          </Floater>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ResultDetails;
