import React, { useEffect } from "react";
import Apxor from "apxor";
const AsyncOp = () => {
  useEffect(() => {
    Apxor.logEvent("COURSE_OPENED", {
      course: "JS_Async",
    });
  }, []);
  return (
    <div id="article_Async">
      <h1 id="title">Async in Java Script</h1>
    </div>
  );
};

export default AsyncOp;
