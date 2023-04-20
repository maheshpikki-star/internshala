import React, { useEffect } from "react";
import Apxor from "apxor";
const Functions = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Functions",
    });
  }, []);
  return (
    <div id="article_js_functions">
      <h1 id="title">Javascript Functions</h1>
      <p>
        JavaScript functions are used to perform operations. We can call
        JavaScript function many times to reuse the code.
        <h2>Advantage of JavaScript function</h2>
        <ul>
          <li>
            Code reusability: We can call a function several times so it save
            coding.
          </li>
          <li>
            Less coding: It makes our program compact. We don’t need to write
            many lines of code each time to perform a common task.
          </li>
        </ul>
      </p>
      <code>
        function functionName([arg1, arg2, ...argN])
        {
          //code to be executed
        }
      </code>
      <h2>Javascript Function Methods</h2>
      <ul>
        <li>
          apply(): It is used to call a function contains this value and a
          single array of arguments.
        </li>
        <li>bind() : It is used to create a new function.</li>
        <li>
          call() : It is used to call a function contains this value and an
          argument list.
        </li>
        <li>toString() : It returns the result in a form of a string.</li>
      </ul>
      
    </div>
  );
};


export default Functions;
