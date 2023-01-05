import React, { useEffect } from "react";
import Apxor from "apxor";
const Intro = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "Intro",
    });
  }, []);
  return (
    <div id="article_jsIntro">
      <h1 id="title">Intro to Javascript</h1>
      <h2 id="whatIsJS">What is JavaScript?</h2>
      <p>
        JavaScript is a cross-platform, object-oriented scripting language used
        to make webpages interactive (e.g., having complex animations, clickable
        buttons, popup menus, etc.). There are also more advanced server side
        versions of JavaScript such as Node.js, which allow you to add more
        functionality to a website than downloading files (such as realtime
        collaboration between multiple computers). Inside a host environment
        (for example, a web browser), JavaScript can be connected to the objects
        of its environment to provide programmatic control over them. JavaScript
        contains a standard library of objects, such as Array, Date, and Math,
        and a core set of language elements such as operators, control
        structures, and statements. Core JavaScript can be extended for a
        variety of purposes by supplementing it with additional objects; for
        example:
      </p>
      <ul>
        <li>
          Client-side JavaScript extends the core language by supplying objects
          to control a browser and its Document Object Model (DOM). For example,
          client-side extensions allow an application to place elements on an
          HTML form and respond to user events such as mouse clicks, form input,
          and page navigation.
        </li>
        <li>
          Server-side JavaScript extends the core language by supplying objects
          relevant to running JavaScript on a server. For example, server-side
          extensions allow an application to communicate with a database,
          provide continuity of information from one invocation to another of
          the application, or perform file manipulations on a server.
        </li>
      </ul>
      <iframe
        width="980"
        height="720"
        src="https://www.youtube.com/embed/W6NZfCO5SIk"
        title="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id="youtubeVideo"
      ></iframe>
      <p>
        This means that in the browser, JavaScript can change the way the
        webpage (DOM) looks. And, likewise, Node.js JavaScript on the server can
        respond to custom requests sent by code executed in the browser.
      </p>
      <h2>JavaScript and Java</h2>
      <p>
        JavaScript and Java are similar in some ways but fundamentally different
        in some others. The JavaScript language resembles Java but does not have
        Java's static typing and strong type checking. JavaScript follows most
        Java expression syntax, naming conventions and basic control-flow
        constructs which was the reason why it was renamed from LiveScript to
        JavaScript.
      </p>
      <p>
        In contrast to Java's compile-time system of classes built by
        declarations, JavaScript supports a runtime system based on a small
        number of data types representing numeric, Boolean, and string values.
        JavaScript has a prototype-based object model instead of the more common
        class-based object model. The prototype-based model provides dynamic
        inheritance; that is, what is inherited can vary for individual objects.
        JavaScript also supports functions without any special declarative
        requirements. Functions can be properties of objects, executing as
        loosely typed methods.{" "}
      </p>
      <p>
        JavaScript is a very free-form language compared to Java. You do not
        have to declare all variables, classes, and methods. You do not have to
        be concerned with whether methods are public, private, or protected, and
        you do not have to implement interfaces. Variables, parameters, and
        function return types are not explicitly typed. Java is a class-based
        programming language designed for fast execution and type safety. Type
        safety means, for instance, that you can't cast a Java integer into an
        object reference or access private memory by corrupting the Java
        bytecode. Java's class-based model means that programs consist
        exclusively of classes and their methods. Java's class inheritance and
        strong typing generally require tightly coupled object hierarchies.
      </p>
      <p>
        These requirements make Java programming more complex than JavaScript
        programming. In contrast, JavaScript descends in spirit from a line of
        smaller, dynamically typed languages such as HyperTalk and dBASE. These
        scripting languages offer programming tools to a much wider audience
        because of their easier syntax, specialized built-in functionality, and
        minimal requirements for object creation.
      </p>
      <table border="1" id="jsVsjava">
        <thead>
          <tr>
            <th>JavaScript</th>
            <th>Java</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Object-oriented. No distinction between types of objects.
              Inheritance is through the prototype mechanism, and properties and
              methods can be added to any object dynamically.
            </td>
            <td>
              Class-based. Objects are divided into classes and instances with
              all inheritance through the class hierarchy. Classes and instances
              cannot have properties or methods added dynamically.
            </td>
          </tr>
          <tr>
            <td>
              Variable data types are not declared (dynamic typing, loosely
              typed).
            </td>
            <td>
              Variable data types must be declared (static typing, strongly
              typed).
            </td>
          </tr>
          <tr>
            <td>Cannot automatically write to hard disk.</td>
            <td>Can automatically write to hard disk.</td>
          </tr>
        </tbody>
      </table>

      <h2>Hello world</h2>
      <span>
        To get started with writing JavaScript, open the Web Console in the
        browser, and write your first "Hello world" JavaScript code:
      </span>
      <pre id="codeExample" data-lang="js">
        {`
function helloWorld(){
    console.log("Hello World!!");
}
helloWorld();
        `}
      </pre>
    </div>
  );
};

export default Intro;
