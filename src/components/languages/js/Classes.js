import React, { useEffect } from "react";
import Apxor from "apxor";
const Classes = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Classes",
    });
  }, []);
  return (
    <div id="article_Classes">
      <h1 id="title">Classes in Java Script</h1>
    </div>
  );
};

export default Classes;
