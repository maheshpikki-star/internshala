import React, { useEffect } from "react";
import Apxor from "apxor";
const ObjectsJS = () => {
  useEffect(() => {
    Apxor.logEvent("COURSE_OPENED", {
      course: "JS_OBJECTS",
    });
  }, []);
  return (
    <div id="article_Objects">
      <h1 id="title">Objects in Java Script</h1>
    </div>
  );
};

export default ObjectsJS;
