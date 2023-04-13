import React, { useEffect } from "react";
import Apxor from "apxor";
const Callbacks = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Callbacks",
    });
  }, []);
  return (
    <div id="article_Callbacks">
      <h1 id="title">Callbacks in Java Script</h1>
      <p>
        A callback function is a function passed into another function as an
        argument, which is then invoked inside the outer function to complete
        some kind of routine or action. however, that callbacks are often used
        to continue code execution after an asynchronous operation has completed
        — these are called asynchronous callbacks. A good example is the
        callback functions executed inside a .then() block chained onto the end
        of a promise after that promise fulfills or rejects. This structure is
        used in many modern web APIs, such as fetch().
      </p>
    </div>
  );
};

export default Callbacks;
