import { useEffect, useState } from "react";
import { PACKAGES } from "../../../lib/data";
import PackDetails from "../../ui/packages/PackDetails";
import { TopHeader } from "../../ui/layouts/Headers";
import { useParams } from "react-router-dom";
import { IonContent, IonPage } from "@ionic/react";
import useNav from "../../../lib/hooks/useNav";

const PackageDetails = () => {
  const [optionals, setOptionals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [healthPackage, setHealthPackage] = useState(null);
  const params = useParams();

  const { hideNav, showNav } = useNav();

  useEffect(() => {
    hideNav();
    return () => {
      showNav();
    };
  }, []);

  useEffect(() => {
    const healthPackage = PACKAGES.find((p) => p.routeName === params.id);
    setHealthPackage(healthPackage);
  }, [healthPackage, params]);

  const handleOptional = (optional) => {
    if (optionals.includes(optional)) {
      setOptionals(
        optionals.filter((stateOptional) => optional.id !== stateOptional.id)
      );
      setTotalPrice((prev) => prev - optional.price.amount);
    } else {
      setOptionals((prev) => [...prev, optional]);
      totalPrice === null
        ? setTotalPrice(
            healthPackage?.discountedPrice
              ? healthPackage?.discountedPrice.amount + optional.price.amount
              : healthPackage?.price.amount + optional.price.amount
          )
        : setTotalPrice((prev) => prev + optional.price.amount);
    }
  };

  return (
    <IonPage className="font-general">
      <TopHeader pageName={"Package Details"} back />
      <IonContent>
        <div className="relative font-general bg-secondary-5 min-h-screen">
          <div className="px-4 pb-16">
            <PackDetails
              healthPackage={healthPackage}
              totalPrice={totalPrice}
              handleOptional={handleOptional}
              optionals={optionals}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PackageDetails;
