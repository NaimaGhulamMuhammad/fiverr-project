import { Link } from "react-router-dom";
import { RegularText } from "../core/Text";
import { useRecoilState } from "recoil";
import { profileInfo } from "../../../recoil/atoms";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProfileBoxProps {
  percentage?: number;
}

const ProfileBox = ({ percentage }: ProfileBoxProps) => {
  const [data, setData] = useRecoilState(profileInfo);
  const fullName = `${data?.firstName} ${data?.lastName}`;

  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-row items-center justify-around mx-auto pt-2 my-1">
        <div className="w-1/4 flex flex-col justify-center pr-2">
          <img
            src="/assets/images/profile/profile.png"
            alt="profile"
            className="w-18 h-18 object-cover rounded-half"
          />
        </div>
        <div className="flex flex-col w-3/4 px-2">
          <RegularText classes="font-bold font-title text-typo">
            {fullName}
          </RegularText>
          <div className="flex flex-col">
            <Link to="/user-profile">
              <p className="text-md font-semibold text-primary-100 font-general hover:cursor-pointer">
                View and edit profile
              </p>
            </Link>
          </div>
        </div>
        <div className="w-14">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: "#f58232",
              textColor: "#f58232",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
              textSize: "28px",
            })}
            value={percentage}
            text={`${percentage}%`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
