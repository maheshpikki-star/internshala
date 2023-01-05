import React, { useEffect } from "react";
import Apxor from "apxor";
const Exercises = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Exercises",
    });
  }, []);
  return (
    <div id="article_jsExercises">
      <h1 id="title">Exercises</h1>
      <div>
        <a href="https://github.com/AkellaRaviTeja/JSExercises">JS Exerices</a>
      </div>
      <div>
        <ul>
          <li>Fork the repo</li>
          <li>Clone it to your system</li>
          <li>Import the repo to VSCode</li>
          <li>Complete each of the exercises</li>
          <li>Commit your changes and push to github</li>
          <li>Create a merge request and share it with us</li>
        </ul>
      </div>
    </div>
  );
};

export default Exercises;
