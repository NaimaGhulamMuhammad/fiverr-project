/* eslint-disable @next/next/no-img-element */
// import Anchor from "../../../ui/core/Anchor";
import {Link} from "react-router-dom";

const formateDate = (value) => {
  let date = new Date(value);
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.toLocaleString("default", { year: "numeric" });
  return `${month} ${day}, ${year}`;
};

const ArticleCard = ({ title, date, imageUrl, content, tags, href = "#" }) => {
  const fDate = formateDate(date);


  return (
    <Link to={href}>
      <div className="h-auto mr-3 border rounded-xl shadow-lg overflow-hidden cursor-pointer scroll-smooth w-full flex-none">
        <div className="overflow-hidden flex items-center justify-center mt-2">
          <img
            src={imageUrl}
            alt="article"
            className="w-[95%] rounded-xl object-cover hover:scale-105 transition-all duration-300"
            style={{
              height:"200px",
              objectFit: "cover"
            }}
          />
        </div>
        <div className="p-2.5 flex flex-col justify-between">
          <div className="font-general flex-1 text-sm">{fDate}</div>
          <div className="font-title font-medium h-12">{title}</div>
          <div className="excerpt">{content}</div>
          <div className="flex w-full flex-wrap">
            {tags.slice(0, 3).map((el, index) => (
              <span
                key={index}
                className="inline-block bg-blue-400 font-title font-bold text-white mt-2 mr-3 rounded py-1 px-2 text-sm"
              >
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
