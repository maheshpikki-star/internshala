import React, { useEffect } from "react";
import Apxor from "apxor";
const Modules = () => {
  useEffect(() => {
    Apxor.logEvent("COURSE_OPENED", {
      course: "JS_MODULES",
    });
  }, []);
  return (
    <div id="article_Modules">
      <h1 id="title">Modules in Java Script</h1>
    </div>
  );
};

export default Modules;
