import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Accordion from "../../Catalog/accordion/Accordion";
import { useParams } from "react-router-dom";
import Intro from "./intro";
import Operators from "./operators";
import ConditionalStatements from "./conditionalstatements";
import Functions from "./functions";
import Strings from "./strings";
import Loops from "./loops";
import Arrays from "./arrays";
const topics = [
  {
    desc: "Intro",
    loc: "/languages/bash/intro",
    type: "Topic",
    topic: "Bash",
  },
  {
    desc: "Operators",
    loc: "/languages/bash/operators",
    type: "Topic",
    topic: "Bash",
  },
  {
    desc: "ConditionalStatements",
    loc: "/languages/bash/conditionalstatements",
    type: "Topic",
    topic: "Bash",
  },
  {
    desc: "Functions",
    loc: "/languages/bash/functions",
    type: "Topic",
    topic: "Bash",
  },
  {
    desc: "Strings",
    loc: "/languages/bash/strings",
    type: "Topic",
    topic: "Bash",
  },
  {
    desc: "Loops",
    loc: "/languages/bash/loops",
    type: "Topic",
    topic: "Bash",
  },
  {
    desc: "Arrays",
    loc: "/languages/bash/arrays",
    type: "Topic",
    topic: "Bash",
  },
  
];

const Bash = () => {
  const { article } = useParams();

  useEffect(() => {
    document.title = `Bash | ${article}`;
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
            {article === "operators" ? <Operators /> : ""}
            {article === "conditionalstatements" ? <ConditionalStatements /> : ""}
            {article === "functions" ? <Functions/> : ""}
            {article === "strings" ? <Strings /> : ""}
            {article === "loops" ? <Loops /> : ""}
            {article === "arrays" ? <Arrays /> : ""}
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bash;
