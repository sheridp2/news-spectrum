import React, { useEffect, useState } from "react";
import axios from "axios";

import keys from "./config/keys";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=" +
          keys.NEWSAPI
      )
      .then((response) => {
        console.log(response.data.articles);
        setNewsArticles(response.data.articles);
      });
  }, []);

  return (
    <div>
      {newsArticles.map((article) => (
        <div key={article.title}>
          <p>{article.title}</p>
          <p>{article.author}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
