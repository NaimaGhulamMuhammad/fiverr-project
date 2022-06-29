import { FadedSmallText } from "../core/Text";

const Speciality = ({ name, icon }) => {
  return (
    <div className="flex flex-col w-16 items-center">
      <div className="rounded-half border border-gray-300 p-5">
        <img src={icon} width={20} height={20} alt="myhc" />
      </div>
      <FadedSmallText classes={"text-center"}>{name}</FadedSmallText>
    </div>
  );
};

export default Speciality;
