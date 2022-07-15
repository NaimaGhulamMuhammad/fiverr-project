import * as React from "react";

export const LoaderContext = React.createContext({
  open: false,
  setOpen: (open) => null,
});

const LoaderContextProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <LoaderContext.Provider value={{ open, setOpen }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
