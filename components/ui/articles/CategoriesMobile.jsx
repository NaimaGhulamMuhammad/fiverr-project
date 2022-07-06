import { IonGrid, IonRow } from "@ionic/react";
import React from "react";
import AllSpecialitiesCirlceItems from "../../../components/ui/consultation/all-specialities/AllSpecialitiesCirlceItems";
import { categoryNames } from "../../../lib/constants/categoryNames";
import formatTitle from "../../../lib/hooks/formatTitle";
import useModal from "../../../lib/hooks/useModal";
import ConsultCircle from "../../ui/consultation/ConsultCircle";
import { Button } from "../core/Buttons";
import { BottomSheetModal } from "../core/Modals";
import { SubHeadingText } from "../core/Text";

const CategoriesMobile = () => {
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
        {categoryNames.slice(0, 4).map((categoryName, idx) => (
          <ConsultCircle
            key={idx}
            name={formatTitle(categoryName.name)}
            icon={categoryName.icon}
            route={categoryName?.route}
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
            {categoryNames.map((s, index) => (
              <AllSpecialitiesCirlceItems
                key={index}
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
