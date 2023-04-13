import React, { useEffect } from "react";
import Apxor from "apxor";
const AsyncOp = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Async",
    });
  }, []);
  return (
    <div id="article_Async">
      <h1 id="title">Async in Java Script</h1>
      <p>
        The async function declaration declares an async function where the
        await keyword is permitted within the function body. The async and await
        keywords enable asynchronous, promise-based behavior to be written in a
        cleaner style, avoiding the need to explicitly configure promise chains.
      </p>
      <p>
        Async functions can contain zero or more await expressions. Await
        expressions make promise-returning functions behave as though they're
        synchronous by suspending execution until the returned promise is
        fulfilled or rejected. The resolved value of the promise is treated as
        the return value of the await expression. Use of async and await enables
        the use of ordinary try / catch blocks around asynchronous code.
      </p>
    </div>
  );
};

export default AsyncOp;
