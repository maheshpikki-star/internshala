import React, { useEffect } from "react";
import Apxor from "apxor";
const Functions = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Functions",
    });
  }, []);
  return (
    <div id="article_Functions">
      <h1 id="title">Functions in Java Script</h1>
    </div>
  );
};

export default Functions;
