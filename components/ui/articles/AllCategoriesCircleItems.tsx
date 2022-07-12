import { IonCol } from "@ionic/react";
import { Link } from "react-router-dom";
import { FadedSmallText } from "../core/Text";

interface CategoriesCircleProps {
  icon: string;
  name: string;
  categoryId?: string;
  closeModal: () => void;
  href: string;
}

const AllCategoriesCircleItems = ({
  icon,
  name,
  href,
  closeModal,
}: CategoriesCircleProps) => {
  return (
    <IonCol size="4" onClick={closeModal}>
      <Link to={href} className="flex flex-col items-center mb-2">
        <div className="p-2 bg-slate-50 rounded-full mb-2">
          <img src={icon} width={25} height={25} alt="myhc" />
        </div>
        <FadedSmallText classes="text-center">{name}</FadedSmallText>
      </Link>
    </IonCol>
  );
};

export default AllCategoriesCircleItems;
