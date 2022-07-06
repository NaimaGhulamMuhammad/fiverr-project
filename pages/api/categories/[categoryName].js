const allArticles = require("../data/articles.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { tags } = JSON.parse(req.body);

    let filteredArticlesIndexes = new Set([]);
    for (let tag of tags ?? []) {

      for (let i = 0; i<allArticles.length; i++) {
        const article = allArticles[i];
        if (article.tags.indexOf(tag) > -1) {
          filteredArticlesIndexes.add(i);
        }
      }
    }
    filteredArticlesIndexes = [...filteredArticlesIndexes];
    const articles = allArticles.filter(
      (a, i) => filteredArticlesIndexes.indexOf(i) > -1
    );

    return res.status(200).json(articles);
  }
}
