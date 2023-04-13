import React, { useEffect } from "react";
import Apxor from "apxor";
const Modules = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Modules",
    });
  }, []);
  return (
    <div id="article_Modules">
      <h1 id="title">Modules in Java Script</h1>
      <p>
        JavaScript modules allow you to break up your code into separate files.
        This makes it easier to maintain a code-base. Modules are imported from
        external files with the import statement.
      </p>
      <h2>Export</h2> Modules with functions or variables can be stored in any
      external file. There are two types of exports:
      <br /> Named Exports and Default Exports.
      <h2>Import</h2> You can import modules into a file in two ways, based on if
      they are named exports or default exports. Named exports are constructed
      using curly braces. Default exports are not.
      
    </div>
  );
};

export default Modules;
