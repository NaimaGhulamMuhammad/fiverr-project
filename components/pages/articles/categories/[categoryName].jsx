import ArticlesSection from "components/article/ArticlesSection";
import Layout from "components/layout/Layout";
import { categories, categoryNames } from "lib/constants/categoryNames";
import { ARTICLES } from "lib/data";
import formatTitle from "lib/formatTitle";
import { NextSeo } from "next-seo";
import Container from "../../../components/layout/container/Container";
import React from "react";
import CategoriesButtons from "components/article/CategoriesButtons";
import CategoriesMobile from "components/article/CategoriesMobile";

const CategoryName = ({ articles, title }) => {
  return (
    <Layout>
      <NextSeo title={title} />
      <Container>
        <div className="md:flex mt-6 justify-between">
          <div className="md:hidden">
            <CategoriesMobile title={title} />
          </div>

          <div className="hidden md:block">
            <h2 className="mt-24 ml-2">Categories</h2>
            <div className="pr-32">
              <CategoriesButtons title={title} />
            </div>
          </div>

          <div>
            <h1 className="font-title text-primary-100 font-bold text-4xl mt-5">
              Our Articles
            </h1>
            <ArticlesSection articles={articles} title={formatTitle(title)} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  if (!params.categoryName) return { notFound: true };

  let articles = [];
  const category = categoryNames.find((c) => c.route === params.categoryName);

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
    articles = [];
    categories[params.categoryName]?.forEach((tag) => {
      const filteredArticles = ARTICLES.filter(
        (article) => article.tags.indexOf(tag) > -1
      );

      articles.push(...filteredArticles);
    });

    articles.sort((a, b) => {
      if (!a.datePublished || !b.datePublished) return 0;
      return (
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime()
      );
    });
  }
  return {
    props: { articles, title: category.name },
  };
}

export async function getStaticPaths() {
  return {
    paths: categoryNames.map((category) => {
      return {
        params: { categoryName: category.route },
      };
    }),
    fallback: false,
  };
}

export default CategoryName;
