import { Link } from "react-router-dom";
import { FadedSmallText } from "../core/Text";

interface ConsultCircleProps {
  name: string;
  icon: string;
  route: string;
}

const ConsultCircle = ({ name, icon, route }: ConsultCircleProps) => {
  return (
    <Link to={route}>
      <div className="flex flex-col items-center">
        <div className="rounded-half border border-gray-300 py-2 px-3 drop-shadow-md bg-white">
          <img src={icon} width={25} height={25} alt="myhc" />
        </div>
        <FadedSmallText classes={"text-center mt-2"}>{name}</FadedSmallText>
      </div>
    </Link>
  );
};

export default ConsultCircle;
