import React from "react";
import ArticleCard from "../../ui/articles/ArticleCard";
import { backend_api } from "../../../lib/constants/routes_constants";
import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";
import CategoriesMobile from "../../ui/articles/CategoriesMobile";

const ArticlePage = () => {
  return (
    <IonPage>
        <TopHeader pageName={"Articles"} />
        <IonContent>
        <Container>
        <section className="md:flex mt-6 justify-between">
        <CategoriesMobile/>
          <div className="container py-5 mx-auto">
            <h1 className="font-title text-typo text-xl font-semibold mb-6">
              All{" "}
            </h1>
            <div className="article-grid mb-12">
              {Articles?.arr?.map((el, index) => (
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
    </Container>
    </IonContent>
    </IonPage>
  );
};

export async function getStaticProps() {
    let articles = [];
  try {
    const response = await fetch(`${backend_api}/api/articles`);
    articles = await response.json();
  } catch (err) {
    throw err;
  }
  return { props: { articles } };
}
export default ArticlePage;