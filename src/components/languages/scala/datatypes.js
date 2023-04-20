import React, { useEffect } from "react";
import Apxor from "apxor";
const Datatypes = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "Scala",
      ItemTopic: "Datatypes",
    });
  }, []);
  return (
    <div id="article_scaladatatypes">
      <h2 id="whatIsJS">DataTypes in Scala</h2>
      <p>
        A data type is a categorization of data which tells the compiler that
        which type of value a variable has. For example, if a variable has an
        int data type, then it holds numeric value. In Scala, the data types are
        similar to Java in terms of length and storage. In Scala, data types are
        treated same objects so the first letter of the data type is in capital
        letter.
      </p>

      <ul>
        <li>Char (16-bit unsigned Unicode character)</li>
        <li>Byte (8-bit signed value)</li>
        <li>Short (16-bit signed value)</li>
        <li>Int (32-bit signed value) </li>
        <li>Long (64-bit signed value)</li>
        <li>Float (32-bit IEEE 754 single-precision floating-point value) </li>
        <li>Double (64-bit IEEE 754 single-precision floating-point value)</li>
      </ul>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/kdK-mXG6jbA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </div>
  );
};

export default Datatypes;
