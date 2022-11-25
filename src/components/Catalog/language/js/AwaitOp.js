import React, { useEffect } from "react";
import Apxor from "apxor";
const AwaitOp = () => {
  useEffect(() => {
    Apxor.logEvent("COURSE_OPENED", {
      course: "JS_Await",
    });
  }, []);
  return (
    <div id="article_Await">
      <h1 id="title">Await in Java Script</h1>
    </div>
  );
};

export default AwaitOp;
