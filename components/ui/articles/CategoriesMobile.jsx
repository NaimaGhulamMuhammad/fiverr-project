import React from "react";
import { useState } from "react";
import CategoriesButtons from "./CategoriesButtons";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";

const CategoriesMobile = ({ title }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="inline-flex items-center justify-between border rounded px-6 py-1 bg-slate-300 text-xl"
      >
        CATEGORIES
        <div className="inline-block w-5 h-5 ml-1">
          {show ? <BsArrowDownCircle /> : <BsArrowRightCircle />}
        </div>
      </button>

      {show && <CategoriesButtons title={title} />}
    </div>
  );
};

export default CategoriesMobile;
