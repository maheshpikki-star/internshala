import React, { useEffect } from "react";
import Apxor from "apxor";
const Resources = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "GoLang",
      ItemTopic: "Resources",
    });
  }, []);
  return (
    <div id="article_goResources">
      <h1 id="title">Resources to learn GoLang</h1>
      <div>
        <a href="https://gobyexample.com/">Go by example</a>
      </div>

      <div>
        <a href="https://go.dev/tour/welcome/1">Go Tour</a>
      </div>

      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yyUHQIec83I"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Resources;
