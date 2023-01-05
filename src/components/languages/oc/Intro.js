import React, { useEffect } from "react";
import Apxor from "apxor";
const Intro = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "ObjectiveC",
      ItemTopic: "Intro",
    });
  }, []);
  return (
    <div id="article_ocIntro">
      <h1 id="title">Intro to ObjectiveC</h1>
      <h2 id="whatIsoc">What is ObjectiveC?</h2>
      <p>
        Objective-C is the primary programming language you use when writing
        software for OS X and iOS. It’s a superset of the C programming language
        and provides object-oriented capabilities and a dynamic runtime.
        Objective-C inherits the syntax, primitive types, and flow control
        statements of C and adds syntax for defining classes and methods. It
        also adds language-level support for object graph management and object
        literals while providing dynamic typing and binding, deferring many
        responsibilities until runtime.
      </p>

      <p>
        Objective-C fully supports object-oriented programming, including the
        four pillars of object-oriented development
      </p>
      <ul>
        <li>
          <strong>Encapsulation</strong>
        </li>
        <li>
          <strong>Data hiding</strong>
        </li>
        <li>
          <strong>Inheritance</strong>
        </li>{" "}
        <li>
          <strong>Polymorphism</strong>
        </li>
      </ul>
      <pre id="codeExample" data-lang="js">
        {`
  #import <Foundation/Foundation.h>
  int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    NSLog (@"hello world");
    [pool drain];
    return 0;
  }`}
      </pre>
    </div>
  );
};

export default Intro;
