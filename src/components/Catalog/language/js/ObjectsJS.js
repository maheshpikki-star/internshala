import React, { useEffect } from "react";
import Apxor from "apxor";
const ObjectsJS = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Objects",
    });
  }, []);
  return (
    <div id="article_Objects">
      <h1 id="title">Objects in Java Script</h1>
    </div>
  );
};

export default ObjectsJS;
