import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
function NewsApp() {
  const NEWS_KEY = process.env.REACT_APP_NEWS_KEY;
  const [news, setNews] = useState(null);
  useEffect(() => {
    const getNews = async () => {
      const url = new URL(
        "https://api.nytimes.com/svc/topstories/v2/home.json"
      );
      url.searchParams.append("api-key", NEWS_KEY);

      fetch(url)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setNews(data.results);
        });
    };
    getNews();
  }, [NEWS_KEY]);

  return (
    <>
      <Helmet>
        <title>News App</title>
      </Helmet>
      <h1>News App</h1>
      {news && news.map((story) => <h2>{story.title}</h2>)}
    </>
  );
}

export default NewsApp;
