import React, { useEffect } from "react";
import Apxor from "apxor";
const ConditionalStatements = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "Bash",
      ItemTopic: "ConditionalStatements",
    });
  }, []);
  return (
    <div id="article_scalaintro">
      <h1 id="title">Intro to Scala</h1>
      <h2 id="whatIsJS">What is Scala?</h2>
      <p>
        Scala is a general-purpose programming language. It supports object
        oriented, functional and imperative programming approaches. It is a
        strong static type language. In scala, everything is an object whether
        it is a function or a number. It does not have concept of primitive
        data. It was designed by Martin Odersky. It was officially released for
        java platform in early 2004 and for .Net framework in June 2004. Later
        on, Scala dropped .Net support in 2012. Scala is influenced by Java,
        Haskell, Lisp, Pizza etc. and influenced to F#, Fantom, Red etc. File
        extension of scala source file may be either .scala or .sc. You can
        create any kind of application like web application, enterprise
        application, mobile application, desktop based application etc.
      </p>
      <ul>
        <h2>Where to use Scala</h2>
        <li>Web applications</li>
        <li>Utilities and libraries</li>
        <li>Parallel batch processing</li>
        <li>Concurrency and distributed application</li>
        <li>Data analysis with Spark</li>
        <li>AWS lambda expression</li>
        <li>Ad hoc scripting in REPL</li>
      </ul>

      <iframe
        width="760"
        height="515"
        src="https://www.youtube.com/embed/i9o70PMqMGY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default ConditionalStatements;
