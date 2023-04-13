import React, { useEffect } from "react";
import Apxor from "apxor";
const Classes = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Classes",
    });
  }, []);
  return (
    <div id="article_Classes">
      <h1 id="title">Classes in Java Script</h1>
      <p>
        Classes are a template for creating objects. They encapsulate data with
        code to work on that data. Classes in JS are built on prototypes but
        also have some syntax and semantics that are unique to classes.
      </p>
      <h2>Defining classes</h2>
      <p>
        
        Classes are in fact "special functions", and just as you can define
        function expressions and function declarations, a class can be defined
        in two ways: a class expression or a class declaration.
      </p>
    </div>
  );
};

export default Classes;
