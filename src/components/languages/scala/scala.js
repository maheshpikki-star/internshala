import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Accordion from "../../Catalog/accordion/Accordion";
import { useParams } from "react-router-dom";
import Intro from "./intro";
import Datatypes from "./datatypes";
import Variables from "./variables";

import ClassesObjects from "./classesobjects";
import Operators from "./operators";
import Loops from "./loops";
import Arrays from "./arrays";
import Strings from "./strings";



const topics = [
  {
    desc: "Intro",
    loc: "/languages/scala/intro",
    type: "Topic",
    topic: "Scala",
  },
  {
    desc: "Datatypes",
    loc: "/languages/scala/datatypes",
    type: "Topic",
    topic: "Scala",
  },
  {
    desc: "Variables",
    loc: "/languages/scala/variables",
    type: "Topic",
    topic: "Scala",
  },
  {
    desc: "ClassesObjects",
    loc: "/languages/scala/classesobjects",
    type: "Topic",
    topic: "Scala",
  },
  {
    desc: "Operators",
    loc: "/languages/scala/operators",
    type: "Topic",
    topic: "Scala",
  },
  {
    desc: "Loops",
    loc: "/languages/scala/loops",
    type: "Topic",
    topic: "Scala",
  },
  {
    desc: "Arrays",
    loc: "/languages/scala/arrays",
    type: "Topic",
    topic: "Scala",
  },
  {
    desc: "Strings",
    loc: "/languages/scala/strings",
    type: "Topic",
    topic: "Scala",
  },
  
];

const Scala = () => {
  const { article } = useParams();

  useEffect(() => {
    document.title = `Scala`;
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
            {article === "datatypes" ? <Datatypes /> : ""}
            {article === "variables" ? <Variables /> : ""}
            {article === "classesobjects" ? <ClassesObjects /> : ""}
            {article === "operators" ? <Operators /> : ""}
            {article === "loops" ? <Loops /> : ""}
            {article === "arrays" ? <Arrays/> : ""}
            {article === "strings" ? <Strings/> : ""}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Scala;
