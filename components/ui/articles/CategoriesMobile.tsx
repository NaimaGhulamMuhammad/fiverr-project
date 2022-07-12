import { IonGrid, IonRow } from "@ionic/react";
import CategoryCircle from "../../ui/articles/CategoryCircle";
import AllCategoriesCircleItems from "../../../components/ui/articles/AllCategoriesCircleItems";
import { categoryNames } from "../../../lib/constants/categoryNames";
import { BottomSheetModal } from "../core/Modals";
import useModal from "../../../lib/hooks/useModal";
import { Button } from "../core/Buttons";
import formatTitle from "../../../lib/hooks/formatTitle";

interface CategoriesMobileMenuProps {
  title: string;
}

const CategoriesMobile = ({ title }: CategoriesMobileMenuProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 py-2">
        {categoryNames.slice(0, 4).map((categoryName, idx) => (
          <CategoryCircle
            key={idx}
            name={formatTitle(categoryName.name)}
            icon={categoryName.icon}
            href={categoryName.route}
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
            {categoryNames.map((category, idx) => (
              <AllCategoriesCircleItems
                key={idx}
                icon={category.icon}
                name={formatTitle(category.name)}
                href={category.route}
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
