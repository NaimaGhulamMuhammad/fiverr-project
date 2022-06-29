import { Link } from "react-router-dom";
import { FadedSmallText } from "../core/Text";

interface MenuItemProps {
  name: string;
  link: string;
  img_name?: string;
  selected?: true | false;
}

const MenuItem = ({ name, link, img_name, selected }: MenuItemProps) => {
  return (
    <Link to={link}>
      <div className="flex flex-col items-center">
        <img
          src={`/icons/${img_name}${selected ? ".png" : "_black.png"}`}
          alt="myhc"
          height={25}
          width={25}
        />
        <FadedSmallText classes={"mt-1"}>{name}</FadedSmallText>
      </div>
    </Link>
  );
};

export default MenuItem;
