import React from "react";
import ArticleCard from "./ArticleCard";
import { ARTICLES } from "lib/data";
import { categoryNames } from "lib/constants/categoryNames";

const ArticlesSection = ({ articles, title }) => {
  const articleList = (articles, key) => {
    return [...new Map(articles.map((item) => [item[key], item])).values()];
  };

  const articlesList = articleList(articles, "articleId");

  return (
    <section>
      <div className="container py-5 mx-auto">
        <h1 className="font-title text-typo text-xl font-semibold mb-6">
          {title}
        </h1>
        <div className="article-grid mb-12">
          {articlesList.map((el, index) => (
            <ArticleCard
              key={index}
              title={el.title}
              imageUrl={el.image}
              content={el.summary}
              date={el.datePublished}
              href={`/articles/${el?.articleRoute?.replace(".md", "")}`}
              tags={el.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ params }) => {
  if (!params.categoryName) return { notFound: true };

  let articles = [];
  if (params.categoryName.toLowerCase() === "latest") {
    articles = ARTICLES.filter((a) => a.published)
      .sort((a, b) => {
        if (!a.datePublished || !b.datePublished) return 0;
        return (
          new Date(b.datePublished).getTime() -
          new Date(a.datePublished).getTime()
        );
      })
      .slice(0, 5);
  } else {
    articles = ARTICLES.filter(
      (article) => article.categories.indexOf(params.categoryName) > -1
    );
  }

  return {
    props: { articles, title: params.categoryName },
  };
};

export async function getStaticPaths() {
  return {
    paths: categoryNames.map((categoryName) => {
      return {
        params: {
          categoryName,
        },
      };
    }),
    fallback: false,
  };
}
export default ArticlesSection;
