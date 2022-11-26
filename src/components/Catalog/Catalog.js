import React, { useEffect } from "react";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
import NewsNoteWorth from "./newsNoteWorthy/NewsNoteWorth";
import GetInpsire from "./getInspireSectiion/GetInspire";
import Footer from "../footer/Footer";
import Accordion from "./accordion/Accordion";
const languages = [
  {
    desc: "HTML & CSS",
    loc: "/languages/htmlcss/intro",
  },
  {
    desc: "JavaScript",
    loc: "/languages/javascript/intro",
  },
  {
    desc: "Scala",
    loc: "/languages/scala/intro",
  },
  {
    desc: "Go lang",
    loc: "/languages/golang/intro",
  },
  {
    desc: "SQL",
    loc: "/languages/sql/intro",
  },
  {
    desc: "Bash/Shell",
    loc: "/languages/bash/intro",
  },
  {
    desc: "Objective-C",
    loc: "/languages/objectivec/intro",
  },
  {
    desc: "Swift",
    loc: "/languages/swift/intro",
  },
];
const subjects = [
  {
    desc: "Code Foundations",
    loc: "/subjects/codefoundations",
  },
  {
    desc: "Guide to Git",
    loc: "/subjects/git",
  },
  {
    desc: "Web Development",
    loc: "/subjects/webdev",
  },
  {
    desc: "Computer Science",
    loc: "/subjects/cs",
  },
  {
    desc: "Developer Tools",
    loc: "/subjects/devtools",
  },
  {
    desc: "Functional Programming",
    loc: "/subjects/funcprogramming",
  },
  {
    desc: "Web design",
    loc: "/subjects/webdesign",
  },
];

const Catalog = () => {
  useEffect(() => {
    document.title = "Learn.Code";
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
            <NewsNoteWorth />
            <GetInpsire />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
