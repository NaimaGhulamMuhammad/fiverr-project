import { MdMedicalServices } from "react-icons/md";
import { MediumText } from "../core/Text";

const AddedServices = ({ order }) => {
  return (
    <div className="flex flex-col w-full my-2">
      <div className="flex flex-row w-full justify-start items-center pl-4">
        <MdMedicalServices className="w-6 h-6 text-primary-100" />
        <MediumText classes="ml-4 font-title mt-1">
          Optional Services
        </MediumText>
      </div>
      <div className="flex flex-row items-center justify-start my-1 pb-1 w-full pl-14">
        {order?.benefits?.length > 0 ? (
          <div className="w-4/5 items-start">
            {order.benefits?.map((benefit, index) => (
              <MediumText classes="font-general text-slate-700" key={index}>
                {benefit.name}
              </MediumText>
            ))}
          </div>
        ) : (
          <MediumText classes="font-general text-red-500">
            No optional services added
          </MediumText>
        )}
      </div>
    </div>
  );
};

export default AddedServices;
