import { Button } from "../core/Buttons";
import { MediumText } from "../core/Text";
const CheckoutBottomNavbar = ({ healthPackage, totalPrice, optionals }) => {
  return (
    <div className="font-general fixed bottom-0 left-0 w-full h-20">
      <div className="border-t-2 bg-white h-full w-full flex justify-between px-4 items-center">
        <div className=" flex flex-col">
          {optionals && optionals.length > 0 ? (
            <MediumText classes="mb-1 font-medium">
              1 Pack + {`${optionals.length} optionals`}
            </MediumText>
          ) : (
            <MediumText classes="mb-1 font-medium">1 Pack</MediumText>
          )}

          <MediumText classes="font-medium">
            {healthPackage?.price?.ccyCode}
            {totalPrice === null ? 0 : totalPrice}
          </MediumText>
        </div>
        <div>
          <Button
            handleClick={() => {
              console.log("Total : ", totalPrice);
              console.log("Book Package : ", optionals);
            }}
            classes="shadow py-3"
          >
            Book Package
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBottomNavbar;
