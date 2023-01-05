import React, { useEffect } from "react";
import Apxor from "apxor";
const Arrays = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Arrays",
    });
  }, []);
  return (
    <div id="article_Arrays">
      <h1 id="title">Arrays in Java Script</h1>
    </div>
  );
};

export default Arrays;
