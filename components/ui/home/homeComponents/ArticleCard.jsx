import { Link } from "react-router-dom";
import formatDate from "../../../../lib/hooks/formatDate";

const ArticleCard = ({ title, date, imageUrl, content, tags, href = "#" }) => {
  return (
    <Link to={href}>
      <div className="h-auto mr-3 border rounded-xl shadow-lg overflow-hidden cursor-pointer scroll-smooth w-72 flex-none">
        <div className="overflow-hidden flex items-center justify-center mt-2">
          <img
            src={imageUrl}
            alt="article"
            className="w-[95%] rounded-xl h-56 object-cover"
          />
        </div>
        <div className="p-2.5 flex flex-col justify-between">
          <div className="font-general flex-1 text-sm">{formatDate(date)}</div>
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
