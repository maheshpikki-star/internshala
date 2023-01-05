import React, { useEffect } from "react";
import Apxor from "apxor";
const Callbacks = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Callbacks",
    });
  }, []);
  return (
    <div id="article_Callbacks">
      <h1 id="title">Callbacks in Java Script</h1>
    </div>
  );
};

export default Callbacks;
