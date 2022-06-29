import React from "react";
import { getDiscountPercentage } from "../../../../utils/price/discount";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Spotlight = ({ pack }) => {
  return (
    <Link href={`/package/${pack.routeName}`}>
      <div className="flex flex-row mr-3 items-center justify-between cursor-pointer w-72 flex-none border rounded-2xl shadow-lg font-general bg-gradient-to-br from-tertiary-50 via-tertiary-50 to-white h-64  p-4 text-cardTypo">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="h-1/2 w-full flex flex-row">
            <div className="w-7/12 h-full flex flex-col justify-center">
              <div className="font-title text-md">Flat</div>
              <div className="flex flex-row items-end">
                <div className="font-title text-4xl text-black">
                  {getDiscountPercentage(
                    pack.discountedPrice.amount,
                    pack.price.amount
                  )}
                  %
                </div>
                <div className="ml-1 font-title text-md">OFF on</div>
              </div>
            </div>
            <div className="flex justify-center items-center w-5/12 h-full">
              <img
                src={
                  pack.spotlightIcon != undefined
                    ? `/icons/${pack.spotlightIcon}`
                    : pack.imageURL
                }
                alt=""
                className="h-20"
              />
            </div>
          </div>
          <div className="h-1/2 font-title text-lg ">
            {pack.spotlightName != undefined ? pack.spotlightName : pack.name}{" "}
            <div className="text-white bg-tertiary-100 mt-4 px-4 py-2 text-sm rounded-xl drop-shadow flex justify-between items-center">
              <span>View deal</span>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Spotlight;
