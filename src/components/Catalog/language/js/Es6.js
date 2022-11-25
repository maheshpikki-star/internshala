import React, { useEffect } from "react";
import Apxor from "apxor";
const ES = () => {
  useEffect(() => {
    Apxor.logEvent("COURSE_OPENED", {
      course: "JS_ES6",
    });
  }, []);
  return (
    <div id="article_ES6">
      <h1 id="title">ES6 - Java Script</h1>
    </div>
  );
};

export default ES;
