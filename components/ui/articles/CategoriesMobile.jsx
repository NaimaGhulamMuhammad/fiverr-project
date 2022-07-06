import React from "react";
import { useState } from "react";
import { IonGrid, IonRow } from "@ionic/react";
import { SubHeadingText } from "../core/Text";
import ConsultCircle from "../../ui/consultation/ConsultCircle";
import AllSpecialitiesCirlceItems from "../../../components/ui/consultation/all-specialities/AllSpecialitiesCirlceItems";
import CategoriesButtons from "./CategoriesButtons";
import { categoryNames } from "../../../lib/constants/categoryNames";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { BottomSheetModal } from "../core/Modals";
import useModal from "../../../lib/hooks/useModal";
import { Button } from "../core/Buttons";
import formatTitle from "../../../lib/hooks/formatTitle";

const CategoriesMobile = ({ title }) => {
  const [show, setShow] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      {/* <button
        onClick={() => setShow(!show)}
        className="inline-flex items-center justify-between border rounded px-6 py-1 bg-slate-300 text-xl"
      >
        CATEGORIES
        <div className="inline-block w-5 h-5 ml-1">
          {show ? <BsArrowDownCircle /> : <BsArrowRightCircle />}
        </div>
      </button> */}

      <SubHeadingText classes={"py-1"}>Categories</SubHeadingText>
      <div className="grid grid-cols-4 gap-4">
        {categoryNames.slice(0, 8).map((categoryNames, idx) => (
          <ConsultCircle
            name={formatTitle(categoryNames.name)}
            icon={categoryNames.icon}
            route={categoryNames?.route}
            key={idx}
          />
        ))}
      </div>

      <Button handleClick={openModal} full classes={"mt-1"}>
        See All Categories
      </Button>
      <BottomSheetModal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Select a category"
      >
        <IonGrid fixed>
          <IonRow>
            {categoryNames.map((s) => (
              <AllSpecialitiesCirlceItems
                key={s.id}
                icon={s.icon}
                name={formatTitle(s.name)}
                route={`/articles/categories/${categoryNames.route}`}
                closeModal={closeModal}
              />
            ))}
          </IonRow>
        </IonGrid>
      </BottomSheetModal>
    </div>
  );
};

export default CategoriesMobile;
