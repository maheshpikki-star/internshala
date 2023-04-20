import React, { useEffect } from "react";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
import Footer from "../footer/Footer";
import Accordion from "./accordion/Accordion";
import Apxor from "apxor";
const languages = [
  {
    desc: "JavaScript",
    loc: "/languages/javascript/intro",
    type: "Language",
    topic: "",
  },
  {
    desc: "Go lang",
    loc: "/languages/golang/intro",
    type: "Language",
    topic: "",
  },
  {
    desc: "Objective-C",
    loc: "/languages/objectivec/intro",
    type: "Language",
    topic: "",
  },
  {
    desc: "HTML & CSS",
    loc: "/languages/hypertext/intro",
    type: "Language",
    topic: "",
  },
  {
    desc: "Scala",
    loc: "/languages/scala/intro",
    type: "Language",
    topic: "",
  },
  {
    desc: "SQL",
    loc: "/languages/sql/intro",
    type: "Language",
    topic: "",
  },
  {
    desc: "Bash/Shell",
    loc: "/languages/bash/intro",
    type: "Language",
    topic: "",
  },

  {
    desc: "Swift",
    loc: "/languages/swift/intro",
    type: "Language",
    topic: "",
  },
];
const subjects = [
  {
    desc: "Guide to Git",
    loc: "/subjects/git",
    type: "Subjects",
    topic: "",
  },
  {
    desc: "Development Environment",
    loc: "/subjects/devenv",
    type: "Subjects",
    topic: "",
  },
  {
    desc: "Code Foundations",
    loc: "/subjects/codefoundations",
    type: "Subjects",
    topic: "",
  },
  
  
  
  
  {
    desc: "Web design",
    loc: "/subjects/webdesign",
    type: "Subjects",
    topic: "",
  },
];

const Catalog = () => {
  useEffect(() => {
    Apxor.logEvent("HomePageLauched");
    document.title = "Internshala";
  }, []);
  return (
    <div className="catalogContainer__outer">
      <div className="sidebar">
        <div className="sidebar__left">
          <div className="sidebar__left--container">
            <Accordion Links={languages} title="Language" />
            <Accordion Links={subjects} title="Subjects" />
          </div>
        </div>
        <div className="sidebar__right">
          <div className="catalogContainer__inner">
            <Quiz />
            <PopularCatalog />
           
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
