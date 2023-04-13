import React, { useEffect } from "react";
import Apxor from "apxor";
const Arrays = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Arrays",
    });
  }, []);
  return (
    <div id="article_js_arrays">
      <h1 id="title">Javascript Arrays</h1>
      <p>
        JavaScript array is an object that represents a collection of similar
        type of elements.<br></br> There are 3 ways to construct array in
        JavaScript
        <ul>
          <li>By array literal</li>
          <li>By creating instance of Array directly (using new keyword)</li>
          <li>By using an Array constructor (using new keyword)</li>
        </ul>
      </p>

      <h2>Arrays Characterstics</h2>
      <ul>
        <li>
          JavaScript arrays are resizable and can contain a mix of different
          data types.
        </li>
        <li>
          JavaScript arrays are not associative arrays and so, array elements
          cannot be accessed using arbitrary strings as indexes, but must be
          accessed using nonnegative integers (or their respective string form)
          as indexes.
        </li>
        <li>
          JavaScript arrays are zero-indexed: the first element of an array is
          at index 0, the second is at index 1, and so on — and the last element
          is at the value of the array's length property minus 1.
        </li>
        <li>
          JavaScript array-copy operations create shallow copies. (All standard
          built-in copy operations with any JavaScript objects create shallow
          copies, rather than deep copies).
        </li>
      </ul>
    </div>
  );
};



export default Arrays;
