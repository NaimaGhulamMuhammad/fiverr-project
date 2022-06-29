const allArticles = require("../data/articles.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(allArticles);
  }
}