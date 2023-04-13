import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Accordion from "../../Catalog/accordion/Accordion";
import { useParams } from "react-router-dom";
import Intro from "./intro";
import Constants from "./constants";
import Tuples from "./tuples";
import Variables from "./variables";
import Operators from "./operators";
import Literals from "./literals";
const topics = [
  {
    desc: "Intro",
    loc: "/languages/swift/intro",
    type: "Topic",
    topic: "Swift",
  },
  {
    desc: "Constants",
    loc: "/languages/swift/constants",
    type: "Topic",
    topic: "Swift",
  },
  {
    desc: "Tuples",
    loc: "/languages/swift/tuples",
    type: "Topic",
    topic: "Swift",
  },
  {
    desc: "Variables",
    loc: "/languages/swift/variables",
    type: "Topic",
    topic: "Swift",
  },
  {
    desc: "Operators",
    loc: "/languages/swift/operators",
    type: "Topic",
    topic: "Swift",
  },
  {
    desc: "Literals",
    loc: "/languages/swift/literals",
    type: "Topic",
    topic: "Swift",
  },
];

const Swift = () => {
  const { article } = useParams();

  useEffect(() => {
    document.title = `Scala | ${article}`;
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
            {article === "constants" ? <Constants /> : ""}
            {article === "tuples" ? <Tuples /> : ""}
            {article === "variables" ? <Variables /> : ""}
            {article === "operators" ? <Operators /> : ""}
            {article === "literals" ? <Literals/> : ""}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Swift;
