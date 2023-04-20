import React, { useEffect } from "react";
import Apxor from "apxor";
const Arrays= () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "Scala",
      ItemTopic: "Arrays",
    });
  }, []);
  return (
    <div id="article_scalastrings">
      <h2 id="whatIsJS">Arrays in Scala</h2>
      <p>
        Array is a special kind of collection in scala. it is a fixed size data
        structure that stores elements of the same data type. The index of the
        first element of an array is zero and the last element is the total
        number of elements minus one. It is a collection of mutable values. It
        corresponds to arrays(in terms of syntax) in java but at the same time
        it’s different(in terms of functionalities) from java.
      </p>
      <ul>
        <li>
          Scala arrays can be generic. which mean we can have an Array[T], where
          T is a type parameter or abstract type.
        </li>
        <li>
          Scala arrays are compatible with Scala sequences – we can pass an
          Array[T] where a Seq[T] is required.
        </li>
        <li>Scala arrays also support all sequence operations.</li>
      </ul>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/J8WWeQMD5jg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      
    </div>
  );
};

export default Arrays;
