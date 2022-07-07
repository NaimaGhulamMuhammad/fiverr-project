import { IonGrid, IonRow } from "@ionic/react";
import ConsultCircle from "../../ui/consultation/ConsultCircle";
import AllSpecialitiesCirlceItems from "../../../components/ui/consultation/all-specialities/AllSpecialitiesCirlceItems";
import { categoryNames } from "../../../lib/constants/categoryNames";
import { BottomSheetModal } from "../core/Modals";
import useModal from "../../../lib/hooks/useModal";
import { Button } from "../core/Buttons";
import formatTitle from "../../../lib/hooks/formatTitle";

const CategoriesMobile = ({ title }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 py-2">
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
            {categoryNames.map((s, idx) => (
              <AllSpecialitiesCirlceItems
                key={idx}
                icon={s.icon}
                name={formatTitle(s.name)}
                route={s.route}
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
