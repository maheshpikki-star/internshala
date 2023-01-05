import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Accordion from "../../Catalog/accordion/Accordion";
import { useParams } from "react-router-dom";
import Intro from "./Intro";
import Resources from "./Resources";

const topics = [
  {
    desc: "Intro",
    loc: "/languages/golang/intro",
    type: "Topic",
    topic: "GoLang",
  },
  {
    desc: "Resources",
    loc: "/languages/golang/resources",
    type: "Topic",
    topic: "GoLang",
  },
];

const GoLang = () => {
  const { article } = useParams();

  useEffect(() => {
    document.title = `Go lang | ${article}`;
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

export default GoLang;
