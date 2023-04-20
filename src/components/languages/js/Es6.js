import React, { useEffect } from "react";
import Apxor from "apxor";
const ES = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "ES6",
    });
  }, []);
  return (
    <div id="article_ES6">
      <h1 id="title">ES6 - Java Script</h1>
      <p>
        JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the
        newer version of JavaScript that was introduced in 2015. ECMAScript is
        the standard that JavaScript programming language uses. ECMAScript
        provides the specification on how JavaScript programming language should
        work.
      </p>
    </div>
  );
};

export default ES;
