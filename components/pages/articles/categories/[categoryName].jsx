import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories, categoryNames } from "../../../../lib/constants/categoryNames";
import { backend_api } from "../../../../lib/constants/routes_constants";
import formatTitle from "../../../../lib/hooks/formatTitle";
import ArticlesSection from "../../../ui/articles/ArticlesSection";
import CategoriesMobile from "../../../ui/articles/CategoriesMobile";
import Container from "../../../ui/layouts/Container";

const CategoryName = () => {
  const {categoryName} = useParams();
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      const tags = categories[categoryName];
      const name = categoryNames.find(c => c.route.endsWith(categoryName))?.name ?? "";

      setTitle(name);

      if (!tags) return;
      try {
        const response = await fetch(`${backend_api}/categories/${categoryName}`, {
          method: "POST",
          body: JSON.stringify({tags})
        });
        const result = await response.json();
        setArticles(result);
      } catch (err) {
        throw err;
      }
    })();
  }, []);



  return (
      <Container>
        <div className="md:flex mt-6 justify-between">
          <div className="md:hidden">
            <CategoriesMobile title={title} />
          </div>

          <div>
            <h1 className="font-title text-primary-100 font-bold text-4xl mt-5">
              Our Articles
            </h1>
            <ArticlesSection articles={articles} title={formatTitle(title)} />
          </div>
        </div>
      </Container>
  );
};

// export async function getStaticProps({ params }) {
//   if (!params.categoryName) return { notFound: true };

//   let articles = [];
//   const category = categoryNames.find((c) => c.route === params.categoryName);

//   if (params.categoryName.toLowerCase() === "latest") {
//     articles = ARTICLES.filter((a) => a.published)
//       .sort((a, b) => {
//         if (!a.datePublished || !b.datePublished) return 0;
//         return (
//           new Date(b.datePublished).getTime() -
//           new Date(a.datePublished).getTime()
//         );
//       })
//       .slice(0, 5);
//   } else {
//     articles = [];
//     categories[params.categoryName]?.forEach((tag) => {
//       const filteredArticles = ARTICLES.filter(
//         (article) => article.tags.indexOf(tag) > -1
//       );

//       articles.push(...filteredArticles);
//     });

//     articles.sort((a, b) => {
//       if (!a.datePublished || !b.datePublished) return 0;
//       return (
//         new Date(b.datePublished).getTime() -
//         new Date(a.datePublished).getTime()
//       );
//     });
//   }
//   return {
//     props: { articles, title: category.name },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: categoryNames.map((category) => {
//       return {
//         params: { categoryName: category.route },
//       };
//     }),
//     fallback: false,
//   };
// }

export default CategoryName;
