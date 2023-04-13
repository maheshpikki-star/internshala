import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Accordion from "../../Catalog/accordion/Accordion";
import { useParams } from "react-router-dom";
import Intro from "./Introscala";
import Resources from "./Resources";

const topics = [
  {
    desc: "Intro",
    loc: "/languages/objectivec/intro",
    type: "Topic",
    topic: "ObjectiveC",
  },
  {
    desc: "Resources",
    loc: "/languages/objectivec/resources",
    type: "Topic",
    topic: "ObjectiveC",
  },
];

const ObjectiveC = () => {
  const { article } = useParams();

  useEffect(() => {
    document.title = `Objective C | ${article}`;
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
            {article === "resources" ? <Resources /> : ""}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ObjectiveC;
