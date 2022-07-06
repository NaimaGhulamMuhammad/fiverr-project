import { categoryNames } from "../../../lib/constants/categoryNames";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const CategoriesButtons = ({ title }) => {

  
  return (
    <div className="mt-4 whitespace-nowrap text-lg  flex flex-col md:gap-4 cursor-pointer">
      {categoryNames.map((category, index) => (
        <Link
          key={index}
          href={`/articles/categories/${category.route}`}
          passHref
        >
          <div className="flex items-center my-4">
            <Image
              src={category.icon}
              width={25}
              height={25}
              layout={"fixed"}
              alt="icon"
            />

            <div
              className={`ml-2 text-xl hover:text-primary-100 ${
                category.name === title
                  ? "text-primary-100 font-semibold font-title"
                  : ""
              } `}
            >
              {category.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CategoriesButtons;
