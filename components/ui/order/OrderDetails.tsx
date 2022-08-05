import { MediumText, SmallText } from "../core/Text";
import { Card } from "../core/Card";
import AddedServices from "./AddedServices";
import { Link } from "react-router-dom";
import { Button } from "../core/Buttons";

interface OrderDetailsProps {
  order: any;
  pack: any;
  items: any;
}

const OrderDetails = ({ order, pack, items }: OrderDetailsProps) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row w-1/2 justify-start items-center pl-2">
          <MediumText classes="text-sm font-general text-primary-100">
            Order Number:
          </MediumText>
          <MediumText classes="ml-3 font-title bg-secondary-10 rounded px-1">
            {order?.orderNumber}
          </MediumText>
        </div>
        <div className="flex flex-row w-1/2 justify-end items-center pr-2">
          <MediumText classes="text-sm font-general text-primary-100">
            Status:
          </MediumText>
          <MediumText classes="ml-3 font-title bg-secondary-10 rounded px-1">
            {order?.status}
          </MediumText>
        </div>
      </div>
      <div className="flex flex-row items-end justify-center">
        <Link
          to={
            pack?.type === "package"
              ? `/package/${pack?.slug}`
              : "/appointment/a5"
          }
        >
          <Card classes="flex flex-col w-full items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              {pack?.type === "package" ? (
                <img
                  src={pack?.imageURL}
                  alt={pack?.name}
                  width={64}
                  height={64}
                  className="object-cover w-20 h-28 rounded-l-md"
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
                  {pack?.name}
                </MediumText>
                {pack?.type === "package" && (
                  <SmallText classes="mt-1 font-general text-slate-700">
                    {pack?.name}
                  </SmallText>
                )}
                <div className="flex flex-row w-full justify-end items-center">
                  {pack?.type === "package" ? (
                    <MediumText classes="mt-1 font-general font-semibold text-slate-700">
                      S${pack.price?.amount}
                    </MediumText>
                  ) : (
                    <SmallText classes="mt-1 font-general text-slate-700">
                      {pack?.description}
                    </SmallText>
                  )}
                </div>
              </div>
            </div>
            {pack?.type === "package" ? (
              <AddedServices pack={pack} items={items} />
            ) : (
              <div className="flex w-full px-2 mt-1">
                <Button
                  classes="w-full font-semibold py-2 px-4 rounded"
                  handleClick={() => {}}
                >
                  View Appointment
                </Button>
              </div>
            )}
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
