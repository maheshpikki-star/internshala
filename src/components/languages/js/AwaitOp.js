import React, { useEffect } from "react";
import Apxor from "apxor";
const AwaitOp = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Await",
    });
  }, []);
  return (
    <div id="article_Await">
      <h1 id="title">Await in Java Script</h1>
    </div>
  );
};

export default AwaitOp;
