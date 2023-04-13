import React from "react";
import Apxor from "apxor";
const CourseCatalog = () => {
  const logLoadEvent = (e) => {
    Apxor.logEvent(
      "COURSE_SELECTED",
      {
        course: e?.target?.innerText,
        from: "Footer",
      },
      true
    );
  };
  return (
    <div className="courseContainer__outer">
      <h3>COURSE CATALOG</h3>
      <div className="courseContainer__inner">
        <div className="footerItems">
          <h3 className="footerItems__title">Languages</h3>
          <div className="footerItems__items courseItems">
            <a href="/languages/hypertext/intro" onClick={logLoadEvent}>
              HTML & CSS
            </a>
            <a href="/languages/javascript/intro" onClick={logLoadEvent}>
              JavaScript
            </a>
            <a href="/languages/scala/intro" onClick={logLoadEvent}>
              Scala
            </a>
            <a href="/languages/golang/intro" onClick={logLoadEvent}>
              Go lang
            </a>
            <a href="/languages/sql/intro" onClick={logLoadEvent}>
              SQL
            </a>
            <a href="/languages/bash/intro" onClick={logLoadEvent}>
              Bash/Shell
            </a>
            <a href="/languages/objectivec/intro" onClick={logLoadEvent}>
              Objective-C
            </a>
            <a href="/languages/swift/intro" onClick={logLoadEvent}>
              Swift
            </a>
          </div>
        </div>
        <div className="footerItems">
          <h3 className="footerItems__title">Subjects</h3>
          <div className="footerItems__items courseItems">
            <a href="/subjects/codefoundations" onClick={logLoadEvent}>
              Code Foundations
            </a>
            <a href="/subjects/git" onClick={logLoadEvent}>
              Guide to Git
            </a>

            <a href="/subjects/webdesign" onClick={logLoadEvent}>
              Web design{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
