import React, { useEffect, useState } from "react";
import ArticleCard from "../articles/ArticleCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { backend_api } from "../../../lib/constants/routes_constants";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${backend_api}`);
        const result = await response.json();
        setArticles(result);
      } catch (err) {
        throw err;
      }
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="mb-4 font-general">
      <div className="font-title text-sectionHead mb-2 py-2 px-4">
        Featured Articles
      </div>
      <div className="flex w-full overflow-x-auto snap-x md:justify-between pb-4 pl-4">
        {articles.map((el, index) => {
          if (index < 4)
            return (
              <ArticleCard
                key={index}
                title={el.title}
                imageUrl={el.image}
                content={el.summary}
                date={el.datePublished}
                href={`/articles/${el.articleRoute?.replace(".md", "")}`}
                tags={el.tags}
              />
            );
        })}

        <Link to="/articles">
          <div className="h-full flex flex-col items-center justify-center self-center ml-4 mr-8 w-40 text-typo">
            <span className="px-4 mb-2">
              <BsFillArrowRightCircleFill size="40px" color="#FF6B35" />
            </span>
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticles;
