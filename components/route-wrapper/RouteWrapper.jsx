import { useIonRouter } from "@ionic/react";
import React, { useContext } from "react";
import { LoaderContext } from "../loader/LoaderContext";

const RouteWrapper = ({ children }) => {
  const router = useIonRouter();
  const loader = useContext(LoaderContext);

  React.useEffect(() => {
    setTimeout(() => {
      loader.setOpen(false);
    }, 1000);
    return () => {
      loader.setOpen(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.routeInfo]);

  return <>{children}</>;
};

export default RouteWrapper;
