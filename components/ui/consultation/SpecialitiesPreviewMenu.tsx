import { IonGrid, IonRow } from "@ionic/react";
import { SubHeadingText } from "../core/Text";
import { Button } from "../core/Buttons";
import ConsultCircle from "./ConsultCircle";
import { BottomSheetModal } from "../core/modals/Modal";
import AllSpecialitiesCirlceItems from "./all-specialities/AllSpecialitiesCirlceItems";
import useModal from "../../../lib/hooks/useModal";

import { SPECIALITIES } from "../../../lib/data";
import SeeAllSpecialitiesModal from "../core/modals/SeeAllSpeialities";
import Speciality from "./Speciality";

const SpecialitiesPreviewMenu: React.FC = () => {
  const { openModal, closeModal, setModal } = useModal();

  return (
    <div>
      <SubHeadingText classes={"py-4"}>Top Specialities</SubHeadingText>
      <div className="grid grid-cols-2 gap-4 ">
        {SPECIALITIES.slice(0, 8).map((speciality, idx) => (
          <Speciality
            name={speciality.name}
            icon={speciality.icon}
            href={`/doctors?specialityId=${speciality.id}`}
            key={idx}
          />
        ))}
      </div>
      <Button
        handleClick={() => {
          setModal("see-all-specialities");
        }}
        full
        classes={"mt-6"}
      >
        See All Specialities
      </Button>
      <SeeAllSpecialitiesModal>
        <IonGrid fixed>
          <IonRow>
            {SPECIALITIES.map((s) => (
              <AllSpecialitiesCirlceItems
                key={s.id}
                icon={s.icon}
                name={s.name}
                href={`/doctors?specialityId=${s.id}`}
                closeModal={closeModal}
              />
            ))}
          </IonRow>
        </IonGrid>
      </SeeAllSpecialitiesModal>
    </div>
  );
};

export default SpecialitiesPreviewMenu;
