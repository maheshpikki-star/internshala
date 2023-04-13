import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Accordion from "../../Catalog/accordion/Accordion";
import { useParams } from "react-router-dom";
import Intro from "./intro";
import Database from "./database";
import Select from "./select";
import Table from "./table";
import Clause from "./clause";


const topics = [
  {
    desc: "Intro",
    loc: "/languages/sql/intro",
    type: "Topic",
    topic: "Sql",
  },
  {
    desc: "Database",
    loc: "/languages/sql/database",
    type: "Topic",
    topic: "Sql",
  },
  {
    desc: "Select",
    loc: "/languages/sql/select",
    type: "Topic",
    topic: "Sql",
  },
  {
    desc: "Table",
    loc: "/languages/sql/table",
    type: "Topic",
    topic: "Sql",
  },
  {
    desc: "Clause",
    loc: "/languages/sql/clause",
    type: "Topic",
    topic: "Sql",
  },
];

const SQL = () => {
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
            {article === "database" ? <Database /> : ""}
            {article === "select" ? <Select /> : ""}
            {article === "table" ? <Table/> : ""}
            {article === "clause" ? <Clause /> : ""}
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SQL;
