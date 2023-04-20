import React, { useEffect } from "react";
import Apxor from "apxor";
const Variables = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "Scala",
      ItemTopic: "Variables",
    });
  }, []);
  return (
    <div id="article_scalavariables">
      <h2 id="whatIsJS">Variables in Scala</h2>
      <p>
        Variables are nothing but reserved memory locations to store values.
        This means that when you create a variable, you reserve some space in
        memory. Based on the data type of a variable, the compiler allocates
        memory and decides what can be stored in the reserved memory. Therefore,
        by assigning different data types to variables, you can store integers,
        decimals, or characters in these variables. Scala has a different syntax
        for declaring variables. They can be defined as value, i.e., constant or
        a variable. Here, myVar is declared using the keyword var. It is a
        variable that can change value and this is called mutable variable.
        Following is the syntax to define a variable using var keyword −Syntax
        <pre>var myVar : String = "Foo"</pre>
        <p>
          Here, myVal is declared using the keyword val. This means that it is a
          variable that cannot be changed and this is called immutable variable.
          Following is the syntax to define a variable using val keyword −
          Syntax
        </p>
        <pre>val myVal : String = "Foo"</pre>
      </p>
      <h2>Variable Data Types </h2>
      <p>
        The type of a variable is specified after the variable name and before
        equals sign. You can define any type of Scala variable by mentioning its
        data type as follows − Syntax
      </p>
      <pre>val or val VariableName : DataType = [Initial Value]</pre>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/leCxPozBeRQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
     
    </div>
  );
};

export default Variables;
