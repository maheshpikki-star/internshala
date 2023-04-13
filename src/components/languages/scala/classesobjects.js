import React, { useEffect } from "react";
import Apxor from "apxor";
const ClassesObjects = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "Scala",
      ItemTopic: "ClassesObjects",
    });
  }, []);
  return (
    <div id="article_scalaclassesobjects">
      <h2 id="whatIsJS">Classes in Scala</h2>
      <p>
        Class is a template or a blueprint. It is also known as collection of
        objects of similar type. In scala, a class can contain: Data member
        Member method Constructor Block Nested class Super class information
        etc. You must initialize all instance variables in the class. There is
        no default scope. If you don't specify access scope, it is public. There
        must be an object in which main method is defined. It provides starting
        point for your program. H
      </p>
      <h2>Singleton Objects</h2>
      <p>
        Scala is more object-oriented than Java because in Scala, we cannot have
        static members. Instead, Scala has singleton objects. A singleton is a
        class that can have only one instance, i.e., Object. You create
        singleton using the keyword object instead of class keyword. Since you
        can't instantiate a singleton object, you can't pass parameters to the
        primary constructor. You already have seen all the examples using
        singleton objects where you called Scala's main method.
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9elJaKK4VRo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
     </div>
  );
};

export default ClassesObjects;
