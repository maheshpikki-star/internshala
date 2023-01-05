import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Accordion from "../../Catalog/accordion/Accordion";
import { useParams } from "react-router-dom";
import Intro from "./Intro";
import Variables from "./Variables";
import Functions from "./Functions";
import Arrays from "./Arrays";
import ObjectsJS from "./ObjectsJS";
import Modules from "./Modules";
import Classes from "./Classes";
import ThisKeyWord from "./ThisKeyWord";
import Callbacks from "./Callbacks";
import Promises from "./Promises";
import AsyncOp from "./AsyncOp";
import AwaitOp from "./AwaitOp";
import ES from "./Es6";
import Exercises from "./Exercises";

const topics = [
  {
    desc: "Intro",
    loc: "/languages/javascript/intro",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Variables",
    loc: "/languages/javascript/variables",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Functions",
    loc: "/languages/javascript/functions",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Arrays",
    loc: "/languages/javascript/arrays",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Objects",
    loc: "/languages/javascript/objects",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Modules",
    loc: "/languages/javascript/modules",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Classes",
    loc: "/languages/javascript/classes",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "this",
    loc: "/languages/javascript/thiskeyword",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Callbacks",
    loc: "/languages/javascript/callbacks",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Promises",
    loc: "/languages/javascript/promises",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Async",
    loc: "/languages/javascript/asyncop",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Await",
    loc: "/languages/javascript/awaitop",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "ES6 Concepts",
    loc: "/languages/javascript/es6",
    type: "Topic",
    topic: "JavaScript",
  },
  {
    desc: "Exercises",
    loc: "/languages/javascript/exercises",
    type: "Topic",
    topic: "JavaScript",
  },
];

const JavaScript = () => {
  const { article } = useParams();

  useEffect(() => {
    document.title = `Java Script | ${article}`;
  }, [article]);

  return (
    <div className="catalogContainer__outer">
      <div className="sidebar">
        <div className="sidebar__left">
          <div className="sidebar__left--container">
            <Accordion Links={topics} title="Topics" />
          </div>
        </div>
        <div className="sidebar__right">
          <div className="catalogContainer__inner">
            <br />
            <br />
            {article === "intro" ? <Intro /> : ""}
            {article === "variables" ? <Variables /> : ""}
            {article === "functions" ? <Functions /> : ""}
            {article === "arrays" ? <Arrays /> : ""}
            {article === "objects" ? <ObjectsJS /> : ""}
            {article === "modules" ? <Modules /> : ""}
            {article === "classes" ? <Classes /> : ""}
            {article === "thiskeyword" ? <ThisKeyWord /> : ""}
            {article === "callbacks" ? <Callbacks /> : ""}
            {article === "promises" ? <Promises /> : ""}
            {article === "asyncop" ? <AsyncOp /> : ""}
            {article === "awaitop" ? <AwaitOp /> : ""}
            {article === "es6" ? <ES /> : ""}
            {article === "exercises" ? <Exercises /> : ""}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JavaScript;
