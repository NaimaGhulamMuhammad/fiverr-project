import { RegularText, MediumText } from "../core/Text";
import { BsPerson, BsPhone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const PatientDetails = ({ patient }) => {
  return (
    <div className="flex flex-col">
      <RegularText classes="font-title mt-4 mb-2">Patient Details</RegularText>
      <div className="flex flex-col justify-start bg-secondary-5 py-2 rounded">
        <div className="flex flex-row items-center justify-start">
          <div className="flex w-1/5 items-center justify-center my-1">
            <BsPerson className="w-6 h-6 text-primary-100" />
          </div>
          <div className="flex w-4/5 items-start my-1">
            <MediumText classes="font-general text-slate-700">
              {patient?.patient?.firstName} {patient?.patient?.lastName}
            </MediumText>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="flex w-1/5 items-center justify-center my-1">
            <MdOutlineMail className="w-6 h-6 text-primary-100" />
          </div>
          <div className="flex w-4/5 items-start">
            <MediumText classes="font-general text-slate-700">
              {patient?.patient?.email}
            </MediumText>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="flex w-1/5 items-center justify-center my-1">
            <BsPhone className="w-6 h-6 text-primary-100" />
          </div>
          <div className="flex w-4/5 items-start">
            <MediumText classes="font-general text-slate-700">
              {patient?.patient?.phoneNumber}
            </MediumText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
