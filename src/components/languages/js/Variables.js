import React, { useEffect } from "react";
import Apxor from "apxor";
const Variables = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Variables",
    });
  }, []);
  return (
    <div id="article_js_variables">
      <h1 id="title">Javascript Variables</h1>
      <p>
        A JavaScript variable is simply a name of storage location.Storing a
        value in a variable is called variable initialization. You can do
        variable initialization at the time of variable creation or at a later
        point in time when you need that variable. There are two types of
        variables in JavaScript :{" "}
        <ul>
          <li>local variable .</li>
          <li>global variable.</li>
        </ul>
        <p>There are some rules while declaring a JavaScript variable.</p>
        <ol>
          <li>
            Name must start with a letter (a to z or A to Z), underscore( _ ),
            or dollar( $ ) sign.
          </li>
          <li>
            After first letter we can use digits (0 to 9), for example value1.
          </li>
          <li>
            JavaScript variables are case sensitive, for example x and X are
            different variables.
          </li>
        </ol>
      </p>
      <pre>
        var x = 10;<br></br>
        var _value="apxor";
      </pre>
      
    </div>
  );
};


export default Variables;
