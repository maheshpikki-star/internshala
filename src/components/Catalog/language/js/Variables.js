import React, { useEffect } from "react";
import Apxor from "apxor";
const Variables = () => {
  useEffect(() => {
    Apxor.logEvent("COURSE_OPENED", {
      course: "JS_VARIABLES",
    });
  }, []);
  return (
    <div id="article_Variables">
      <h1 id="title">Variables in Java Script</h1>
    </div>
  );
};

export default Variables;
