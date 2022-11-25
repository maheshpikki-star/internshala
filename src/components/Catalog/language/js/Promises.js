import React, { useEffect } from "react";
import Apxor from "apxor";
const Promises = () => {
  useEffect(() => {
    Apxor.logEvent("COURSE_OPENED", {
      course: "JS_PROMISES",
    });
  }, []);
  return (
    <div id="article_Promises">
      <h1 id="title">Promises in Java Script</h1>
    </div>
  );
};

export default Promises;
