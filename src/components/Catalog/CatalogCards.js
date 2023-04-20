import React from "react";
import scala from "../../assests/svg/catalog/scala.svg";
import curriculum from "../../assests/svg/catalog/curriculum-card.svg";
import webDevelopment from "../../assests/svg/catalog/web-development.svg";
import dataScience from "../../assests/svg/catalog/data-science.svg";
import dataScientist from "../../assests/svg/catalog/dataScientist.svg";
import fullstack from "../../assests/svg/catalog/fullstack.svg";
import javascript from "../../assests/svg/catalog/javascript.svg";
import Intro from "../languages/js/Intro";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import ProgrammingLangCard from "./catalogCard/ProgrammingLangCard";
import CareerPathCard from "./catalogCard/CareerPathCard";
import CourseCard from "./catalogCard/CourseCard";
import ExploreCard from "./catalogCard/ExploreCard";
const CatalogCard = () => {
  const navigate = useNavigate();
  return (
    <div className="cardContainer">
      <div className="cardContainer__subgrid-1-row">
        <Link style={{ textDecoration: "None" }} to={`/languages/scala`}>
          <ExploreCard
            title={"Explore all scala"}
            svg={scala}
            gridRow="item-1"
          />
        </Link>
        <Link style={{ textDecoration: "None" }} to={`/languages/hypertext`}>
          <ProgrammingLangCard title={"learn html"} />
        </Link>
      </div>
      <Link style={{ textDecoration: "None" }} to={`/frontendengineer`}>
        <CareerPathCard title={"Front-End engineer"} svg={curriculum} />
      </Link>
      <div className="cardContainer__subgrid-1-row">
        <Link style={{ textDecoration: "None" }} to={`/languages/javascript`}>
          <CourseCard title={"Learn Javascript"} />{" "}
        </Link>
        <Link style={{ textDecoration: "None" }} to={`/frontendengineer`}>
          <ExploreCard
            title={"Explore all web development"}
            svg={webDevelopment}
          />
        </Link>
      </div>
      <div className="cardContainer__subgrid-2-col">
        <Link style={{ textDecoration: "None" }} to={`/languages/javascript`}>
          <ExploreCard title={"Explore all Javascript"} svg={javascript} />
        </Link>
        <Link style={{ textDecoration: "None" }} to={`/languages/golang`}>
          <ProgrammingLangCard title={"learn go lang"} />
        </Link>

        <div className="cardContainer__subgrid-2-col">
          <div className="cardContainer__subgrid-1-row">
            <Link style={{ textDecoration: "None" }} to={`/datascience`}>
              <ExploreCard
                title={"Explore all Data science"}
                svg={dataScience}
              />{" "}
            </Link>
            <Link style={{ textDecoration: "None" }} to={`/docker`}>
              <ProgrammingLangCard title={"learn docker"} />
            </Link>
          </div>
          <Link style={{ textDecoration: "None" }} to={`/frontendengineer`}>
            <CareerPathCard title={"Full-Stack engineer"} svg={fullstack} />
          </Link>
        </div>
      </div>

      <div className="cardContainer__subgrid-1-row">
        <Link style={{ textDecoration: "None" }} to={`/datascience`}>
          <CareerPathCard title={"Data Scientist"} svg={dataScientist} />
        </Link>
       
      </div>
    </div>
  );
};

export default CatalogCard;
