import { Link } from "react-router-dom";
import { RegularText, SmallText } from "../core/Text";

const ProfileBox = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-row items-center justify-around mx-auto pt-2 my-1">
        <div className="w-1/4 flex flex-col justify-center px-2">
          <img
            src="/assets/images/profile/profile.png"
            alt="profile"
            width={225}
            height={225}
            quality={100}
            className="w-18 h-18 object-cover rounded-half"
          />
        </div>
        <div className="flex flex-col w-3/4 px-2">
          <RegularText classes="font-bold font-title text-typo">
            Venkatesh Chakrabarty
          </RegularText>
          <div className="flex flex-col">
            <Link to="/user-profile">
              <p className="text-md font-semibold text-primary-100 font-general hover:cursor-pointer">
                View and edit profile
              </p>
            </Link>
            <SmallText classes="text-sm font-general text-typo">
              <span className="text-blue-500 mr-1">50%</span>
              completed.
            </SmallText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
