import React, { useEffect } from "react";
import Apxor from "apxor";
const Resources = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "ObjectiveC",
      ItemTopic: "Resources",
    });
  }, []);
  return (
    <div id="article_ocResources">
      <h1 id="title">Resources to learn ObjectiveC</h1>
      <div>
        <a href="https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210">
          Intro to Objective-C
        </a>
      </div>

      <div>
        <a href="https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPFrameworks/Tasks/CreatingFrameworks.html">
          Intro to Framework
        </a>
      </div>
    </div>
  );
};

export default Resources;
