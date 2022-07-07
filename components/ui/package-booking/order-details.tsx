import { RegularText, MediumText, SmallText } from "../core/Text";
import { Card } from "../core/Card";
import AddedServices from "./added-services";

const OrderDetails = ({ order }) => {
  console.log("x", order);
  return (
    <div className="flex flex-col">
      <RegularText classes="font-title mt-4">Order Details</RegularText>
      <div className="flex flex-row w-full justify-start items-center pr-4">
        <MediumText classes="text-sm font-general text-primary-100">
          Order Number:
        </MediumText>
        <MediumText classes="ml-3 font-title">{order?.orderNumber}</MediumText>
      </div>
      <div className="flex flex-row items-end justify-center">
        <Card classes="flex flex-col w-full items-center justify-center">
          <div className="flex flex-row items-center justify-center border-b">
            {order?.package?.type === "package" ? (
              <img
                src={order?.package?.imageURL}
                alt={order?.package?.name}
                width={64}
                height={64}
                className="object-cover w-20 rounded-l-md"
              />
            ) : (
              <img
                src="../icons/doctor.png"
                alt={order?.service?.name}
                width={64}
                height={64}
                className="object-cover w-20 rounded-l-md"
              />
            )}
            <div className="flex flex-col w-4/5 items-start px-3">
              <MediumText classes="text-lg font-bold font-title text-primary-100">
                {order?.package?.name}
              </MediumText>
              <div className="flex flex-row w-full justify-end items-center">
                {order?.package?.type === "package" ? (
                  <MediumText classes="mt-1 font-general font-semibold text-slate-700">
                    {order?.package.price?.ccyCode}
                    {order?.package.price?.amount}
                  </MediumText>
                ) : (
                  <SmallText classes="mt-1 font-general text-slate-700">
                    {order?.package?.description}
                  </SmallText>
                )}
              </div>
            </div>
          </div>
          <AddedServices order={order} />
        </Card>
      </div>
    </div>
  );
};

export default OrderDetails;
