import React, { useEffect } from "react";
import Apxor from "apxor";
const Operators = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Language",
      "Item name": "Scala",
      ItemTopic: "Operators",
    });
  }, []);
  return (
    <div id="article_scalaoperators">
      <h2 id="whatIsJS">Operators in Scala</h2>
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
      <h2>Arithmetic Operators</h2>
      <p>
        These are used to perform arithmetic/mathematical operations on
        operands.<br></br> Addition(+) operator adds two operands. For example,
        x+y.<br></br>
        Subtraction(-) operator subtracts two operands. For example, x-y.
        <br></br>
        Multiplication(*) operator multiplies two operands. For example, x*y.
        <br></br>
        Division(/) operator divides the first operand by the second. For
        example, x/y.<br></br> Modulus(%) operator returns the remainder when
        the first operand is divided by the second. For example, x%y.<br></br>
        Exponent(**) operator returns exponential(power) of the operands. For
        example, x**y.
      </p>
      <h2>Relational Operators</h2>
      <p>
        Equal To(==) operator checks whether the two given operands are equal or
        not. If so, it returns true. Otherwise it returns false. For example,
        5==5 will return true.
        <br></br>Not Equal To(!=) operator checks whether the two given operands
        are equal or not. If not, it returns true. Otherwise it returns false.
        It is the exact boolean complement of the ‘==’ operator. For example,
        5!=5 will return false.
        <br></br>Greater Thanoperator checks whether the first operand is
        greater than the second operand. If so, it returns true. Otherwise it
        returns false.
        <br></br>Less than operator checks whether the first operand is lesser
        than the second operand. If so, it returns true. Otherwise it returns
        false. <br></br> Greater Than Equal To operator checks whether the first
        operand is greater than or equal to the second operand. If so, it
        returns true. Otherwise it returns false. <br></br>Less Than Equal To
        operator checks whether the first operand is lesser than or equal to the
        second operand. If so, it returns true. Otherwise it returns false.
      </p>
          </div>
  );
};

export default Operators;
