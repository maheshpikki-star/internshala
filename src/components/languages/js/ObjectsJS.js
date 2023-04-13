import React, { useEffect } from "react";
import Apxor from "apxor";
const ObjectsJS = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Objects",
    });
  }, []);
  return (
    <div id="article_js_objects">
      <h1 id="title">Javascript Objects</h1>
      <p>
        A javaScript object is an entity having state and behavior (properties
        and method). For example: car, pen, bike, chair, glass, keyboard,
        monitor etc. JavaScript is an object-based language. Everything is an
        object in JavaScript.
        <ul>
          <li>By  object literal</li>
          <li>By creating instance of object directly (using new keyword)</li>
          <li>By using an object constructor (using new keyword)</li>
        </ul>
      </p>
    </div>
  );
};


export default ObjectsJS;
