import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Accordion from "../../Catalog/accordion/Accordion";
import { useParams } from "react-router-dom";
import Intro from "./intro";
import Heading from "./heading";
import Layout from "./layout";
import Paragraphs from "./paragraphs";
import Lists from "./lists";
import Tables from "./tables";
import Comments from "./comments";


const topics = [
  {
    desc: "Intro",
    loc: "/languages/hypertext/intro",
    type: "Topic",
    topic: "HyperText",
  },
  {
    desc: "Layout",
    loc: "/languages/hypertext/layout",
    type: "Topic",
    topic: "HyperText",
  },
  {
    desc: "Heading",
    loc: "/languages/hypertext/heading",
    type: "Topic",
    topic: "HyperText",
  },
  {
    desc: "Paragraphs",
    loc: "/languages/hypertext/paragraphs",
    type: "Topic",
    topic: "HyperText",
  },
  {
    desc: "Comments",
    loc: "/languages/hypertext/comments",
    type: "Topic",
    topic: "HyperText",
  },
  {
    desc: "Tables",
    loc: "/languages/hypertext/tables",
    type: "Topic",
    topic: "HyperText",
  },
  {
    desc: "Lists",
    loc: "/languages/hypertext/lists",
    type: "Topic",
    topic: "HyperText",
  },
];

const HyperText = () => {
  const { article } = useParams();

  useEffect(() => {
    document.title = `HyperText | ${article}`;
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
            {article === "layout" ? <Layout/> : ""}
            {article === "heading" ? <Heading/> : ""}
            {article === "paragraphs" ? <Paragraphs/> : ""}
            {article === "comments" ? <Comments/> : ""}
            {article === "tables" ? <Tables/> : ""}
            {article === "lists" ? <Lists/> : ""}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HyperText;
