import * as React from "react";
import { LoaderContext } from "./LoaderContext";

const Loader = () => {
  const loader = React.useContext(LoaderContext);

  return (
    <div
      style={{ display: loader.open ? "flex" : "none" }}
      className="w-full fixed h-full bg-opacity-50 bg-black z-50 flex items-center justify-center"
    >
      <img
        className="h-52"
        src="/assets/images/loader/myhcloader.svg"
        alt="loading..."
      />
    </div>
  );
};
export default Loader;
