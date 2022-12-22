import React, { useEffect } from "react";
import Apxor from "apxor";
const Promises = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Promises",
    });
  }, []);
  return (
    <div id="article_Promises">
      <h1 id="title">Promises in Java Script</h1>
    </div>
  );
};

export default Promises;
