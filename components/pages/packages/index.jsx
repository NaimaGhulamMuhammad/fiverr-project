import { useState } from "react";
import { SubHeadingText, RegularText } from "../../ui/core/Text";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import CardPackageItem from "../../ui/packages/CardPackageItem";
import { PACKAGES, SERVICES, BENEFITS } from "../../../lib/data";
import Tabs from "../../ui/core/Tabs";
import { IonContent, IonFooter, IonPage, IonToolbar } from "@ionic/react";

const Packages = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const allMappedPackages = () => {
    return PACKAGES.map((pack) => ({
      ...pack,
      services: SERVICES.filter((service) =>
        pack.serviceIds.includes(service.id)
      ).map((s) => ({
        ...s,
        benefits: BENEFITS.filter(
          (benefit) =>
            pack.benefitIds.includes(benefit.id) &&
            benefit.serviceId.includes(s.id)
        ),
      })),
      optionalServices: SERVICES.filter((optS) =>
        pack.optionalServiceIds.includes(optS.id)
      ).map((os) => ({
        ...os,
        optionalBenefits: BENEFITS.filter(
          (optB) =>
            pack.optionalBenefitIds.includes(optB.id) &&
            optB.serviceId.includes(os.id)
        ),
      })),
    }));
  };

  const tabToRender = () => {
    const allPackages = allMappedPackages();

    if (selectedTab === 0) {
      if (allPackages.length) {
        return <CardPackageItem healthPackages={allPackages} />;
      } else {
        return (
          <div className="flex justify-center">
            <SubHeadingText classes={"mb-5"}>
              There is no package available
            </SubHeadingText>
          </div>
        );
      }
    } else {
      return <RegularText classes="mb-5">Result: 0 package(s)</RegularText>;
    }
  };

  return (
    <IonPage>
      <TopHeader pageName={"Health Packages"} />
      <IonContent>
        <Container>
          <div className="flex justify-center my-3">
            <Tabs
              tabs={["All packages", "Best for you"]}
              handleSelectTab={(id) => setSelectedTab(id)}
              selected={selectedTab}
            />
          </div>
          {tabToRender()}
        </Container>
      </IonContent>
      {/* <IonFooter> */}
      {/* <IonToolbar> */}
      {/* </IonToolbar> */}
      {/* // </IonFooter> */}
    </IonPage>
  );
};

export default Packages;
