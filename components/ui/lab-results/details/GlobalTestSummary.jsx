import { useState } from "react";
import Accordion from "../../core/Accordion";
import { Card } from "../../core/Card";

const GlobalTestSummary = () => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <Card>
      <Accordion
        classes={"border-none font-semibold"}
        open={openAccordion === "1"}
        title={"Test Summary"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum ex justo,malesuada consectetur purus porttitor eu."
        }
        handleClick={() => {
          if (openAccordion === "1") {
            setOpenAccordion(false);
          } else {
            setOpenAccordion("1");
          }
        }}
      />
    </Card>
  );
};

export default GlobalTestSummary;
