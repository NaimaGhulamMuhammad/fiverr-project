import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { backend_api } from "../../../lib/constants/routes_constants";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import formatDate from "../../../lib/hooks/formatDate";

const ArticlePageSlug = () => {
  const [article, setArticle] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${backend_api}/${slug}`);
        const result = await response.json();

        setArticle(result);
      } catch (err) {
        throw err;
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <IonPage>
      <TopHeader pageName={"Article"} back />
      <IonContent>
        <Container>
          <section className="lg:max-w-3xl mx-auto">
            <div className="container py-6 mx-auto">
              <div className="font-general flex-1 text-lg mb-2">
                {formatDate(article?.datePublished)}
              </div>
              <h1 className="font-title text-3xl text-primary-100 font-semibold mb-2">
                {article?.title}
              </h1>

              {article?.tags?.map((tag) => (
                <button
                  key={tag}
                  className="bg-blue-400 font-title font-bold text-white mb-1 mr-3 cursor-default inline rounded py-1 px-2 text-sm"
                >
                  <span className="">{tag}</span>
                </button>
              ))}

              <article className="article-content items-start mb-10 mt-4">
                <ReactMarkdown>{article?.content}</ReactMarkdown>
              </article>
            </div>
          </section>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ArticlePageSlug;
