import React, { useEffect } from "react";
import Footer from "../../../footer/Footer";
import Accordion from "../../accordion/Accordion";
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

const topics = [
  {
    desc: "Intro",
    loc: "/languages/javascript/intro",
  },
  {
    desc: "Variables",
    loc: "/languages/javascript/variables",
  },
  {
    desc: "Functions",
    loc: "/languages/javascript/functions",
  },
  {
    desc: "Arrays",
    loc: "/languages/javascript/arrays",
  },
  {
    desc: "Objects",
    loc: "/languages/javascript/objects",
  },
  {
    desc: "Modules",
    loc: "/languages/javascript/modules",
  },
  {
    desc: "Classes",
    loc: "/languages/javascript/classes",
  },
  {
    desc: "this",
    loc: "/languages/javascript/thiskeyword",
  },
  {
    desc: "Callbacks",
    loc: "/languages/javascript/callbacks",
  },
  {
    desc: "Promises",
    loc: "/languages/javascript/promises",
  },
  {
    desc: "Async",
    loc: "/languages/javascript/asyncop",
  },
  {
    desc: "Await",
    loc: "/languages/javascript/awaitop",
  },
  {
    desc: "ES6 Concepts",
    loc: "/languages/javascript/es6",
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JavaScript;
