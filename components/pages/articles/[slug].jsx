import React from "react";
import ReactMarkdown from "react-markdown";

import { backend_api } from "../../../lib/constants/routes_constants";
import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";

import { getArticleBySlug, getAllArticles } from "../../../lib/api";


const ArticlePageSlug = ({ article }) => {
    return (
      <IonPage>
          <TopHeader pageName={"Article"} />
          <IonContent>
          <Container>
          <section className="lg:max-w-3xl mx-auto">
          <div className="container py-12 mx-auto">
            <h1 className="font-title text-3xl text-primary-100 font-semibold mb-6">
              {article.title}
            </h1>

            {article.tags?.map((tag) => (
              <button
                key={tag}
                className="bg-blue-400 font-title font-bold text-white mb-4 mr-3 cursor-default inline rounded py-1 px-2 text-sm "
              >
                <span className="">{tag}</span>
              </button>
            ))}

            <article className="article-content items-start mb-10">
     
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </article>
          </div>
        </section>
      </Container>
      </IonContent>
      </IonPage>
    );
  };
  
  export async function getStaticProps({ params }) {
    if (!params.slug) return { notFound: true };

    let article = [];

    try {
      const response = await fetch(`${backend_api}/api/articles/${params.slug}`);
      article = await response.json();
    } catch (err) {
      throw err;
    }
  
    const content = getArticleBySlug(params.slug, ["content"]);
  
    article = { ...article, ...content };
  
    return {
      props: {
        article,
    },
  };
}
export async function getStaticPaths() {
  const articles = getAllArticles(["slug"]);
  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
    fallback: false,
  };
}

  export default ArticlePageSlug;