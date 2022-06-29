import { IonGrid, IonRow } from "@ionic/react";
import { SubHeadingText } from "../core/Text";
import { Button } from "../core/Buttons";
import ConsultCircle from "./ConsultCircle";
import { BottomSheetModal } from "../core/Modals";
import AllSpecialitiesCirlceItems from "./all-specialities/AllSpecialitiesCirlceItems";
import useModal from "../../../lib/hooks/useModal";

import { SPECIALITIES } from "../../../lib/data";

const SpecialitiesPreviewMenu: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <SubHeadingText classes={"py-4"}>Top Specialities</SubHeadingText>
      <div className="grid grid-cols-4 gap-4">
        {SPECIALITIES.slice(0, 8).map((speciality, idx) => (
          <ConsultCircle
            name={speciality.name}
            icon={speciality.icon}
            route={speciality?.route}
            key={idx}
          />
        ))}
      </div>
      <Button handleClick={openModal} full classes={"mt-4"}>
        See All Specialities
      </Button>
      <BottomSheetModal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Select a speciality"
      >
        <IonGrid fixed>
          <IonRow>
            {SPECIALITIES.map((s) => (
              <AllSpecialitiesCirlceItems
                key={s.id}
                icon={s.icon}
                name={s.name}
                route={"/doctors"}
                closeModal={closeModal}
              />
            ))}
          </IonRow>
        </IonGrid>
      </BottomSheetModal>
    </div>
  );
};

export default SpecialitiesPreviewMenu;
