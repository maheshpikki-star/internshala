import React, { useEffect } from "react";
import Apxor from "apxor";
const ThisKeyWord = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "JavaScript",
      ItemTopic: "this keyword",
    });
  }, []);
  return (
    <div id="article_thisKeyword">
      <h1 id="title">this in Java Script</h1>
      <p>
        A function's this keyword behaves a little differently in JavaScript
        compared to other languages. It also has some differences between strict
        mode and non-strict mode.
      </p>
      <p>
        In most cases, the value of this is determined by how a function is
        called (runtime binding). It can't be set by assignment during
        execution, and it may be different each time the function is called. The
        bind() method can set the value of a function's this regardless of how
        it's called, and arrow functions don't provide their own this binding
        (it retains the this value of the enclosing lexical context).
      </p>

      <h3>Value</h3>
      <p>
        In non–strict mode, <code>this</code> is always a reference to an
        object. In strict mode, it can be any value. For more information on how
        the value is determined, see the description below.
      </p>
      <h2>Description</h2>
      <p>
        The value of this depends on in which context it appears: function,
        class, or global. Function context Inside a function, the value of this
        depends on how the function is called. Think about this as a hidden
        parameter of a function — just like the parameters declared in the
        function definition, this is a binding that the language creates for you
        when the function body is evaluated. For a typical function, the value
        of this is the object that the function is accessed on. In other words,
        if the function call is in the form obj.f(), then this refers to obj.
        For example:
      </p>
    </div>
  );
};

export default ThisKeyWord;
