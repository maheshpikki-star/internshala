import React, { useEffect } from "react";
import Apxor from "apxor";
const Strings = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "Scala",
      ItemTopic: "Strings",
    });
  }, []);
  return (
    <div id="article_scalastrings">
      <h2 id="whatIsJS">Stringsin Scala</h2>
      <p>
        A string is a sequence of characters. In Scala, objects of String are
        immutable which means a constant and cannot be changed once created.
        <br></br> Syntax
      </p>
      <pre>var str = "Hello! GFG"</pre>
      <p>
        An accessor method is those methods which are used to find the
        information about the object. So, a length() method is the accessor
        method in Scala, which is used to find the length of the given string.
        Or in other words, length() method returns the number of characters that
        are present in the string object. Syntax:
        <pre>var len1 = str1.length();</pre>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/EMfFV_3JeoA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Strings;
