import React, { useEffect } from "react";
import Apxor from "apxor";
const Heading = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "HyperText",
      ItemTopic: "Heading",
    });
  }, []);
  return (
    <div id="article_htmlintro">
      <h2 id="lists">What is HTML?</h2>
      <p>
        HTML stands for HyperText Markup Language. It is used to design web
        pages using the markup language. HTML is the combination of Hypertext
        and Markup language. Hypertext defines the link between the web pages
        and markup language defines the text document within the tag that define
        the structure of web pages
      </p>
      <h2>What is HTML used for?</h2>
      <p>
        HTML is used to create the structure of web pages that are displayed on
        the World Wide Web (www). It contains Tags and Attributes that are used
        to design the web pages. Also, we can link multiple pages using
        Hyperlinks.
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

export default Heading;
