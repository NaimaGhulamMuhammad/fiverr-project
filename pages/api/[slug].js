const allArticles = require("../data/articles.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    const { slug } = req.query;
    const article = allArticles.find((a) => a.articleRoute.startsWith(slug));
    return res.status(200).json(article);
  }
}