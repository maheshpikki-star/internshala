import React, { useEffect } from "react";
import Apxor from "apxor";
const AwaitOp = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Await",
    });
  }, []);
  return (
    <div id="article_Await">
      <h1 id="title">Await in Java Script</h1>
      <p>
        await is usually used to unwrap promises by passing a Promise as the
        expression. Using await pauses the execution of its surrounding async
        function until the promise is settled (that is, fulfilled or rejected).
        When execution resumes, the value of the await expression becomes that
        of the fulfilled promise. If the promise is rejected, the await
        expression throws the rejected value. The function containing the await
        expression will appear in the stack trace of the error. Otherwise, if
        the rejected promise is not awaited or is immediately returned, the
        caller function will not appear in the stack trace.
      </p>
    </div>
  );
};

export default AwaitOp;
