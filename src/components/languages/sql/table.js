import React, { useEffect } from "react";
import Apxor from "apxor";
const Table = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "Sql",
      ItemTopic: "Table",
    });
  }, []);
  return (
    <div id="article_scalaloops">
      <h2 id="whatIsJS">Loops in Scala</h2>
      <p>
        Loop control statements change execution from its normal sequence. When
        execution leaves a scope, all automatic objects that were created in
        that scope are destroyed. As such Scala does not support break or
        continue statement like Java does but starting from Scala version 2.8,
        there is a way to break the loops.
      </p>
      <p>
        In Scala, for loop is also known as for-comprehensions. A for loop is a
        repetition control structure which allows us to write a loop that is
        executed a specific number of times. The loop enables us to perform n
        number of steps together in one line.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dsvPLC5ed5s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Table;
