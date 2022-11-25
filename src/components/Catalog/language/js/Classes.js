import React, { useEffect } from "react";
import Apxor from "apxor";
const Classes = () => {
  useEffect(() => {
    Apxor.logEvent("COURSE_OPENED", {
      course: "JS_Classes",
    });
  }, []);
  return (
    <div id="article_Classes">
      <h1 id="title">Classes in Java Script</h1>
    </div>
  );
};

export default Classes;
