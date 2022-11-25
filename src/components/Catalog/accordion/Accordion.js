/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import UpArrow from "../../../assests/svg/up-arrow.svg";
import DownArrow from "../../../assests/svg/down-arrow.svg";
import { Link } from "react-router-dom";
import Apxor from "apxor";
const Accordion = ({ Links, title }) => {
  const accordionBtn = useRef(null);
  const arrowIcon = useRef(null);

  const closeAccordion = () => {
    const isVisible = accordionBtn.current.style.display !== "none";

    if (isVisible) {
      accordionBtn.current.style.display = "none";
      arrowIcon.current.src = UpArrow;
    } else {
      accordionBtn.current.style.display = "flex";
      arrowIcon.current.src = DownArrow;
    }
  };

  const logLoadEvent = (e) => {
    Apxor.logEvent("COURSE_SELECTED", {
      course: e?.target?.innerText,
      from: "Sidebar",
    });
  };
  return (
    <>
      <button className="accordion" onClick={closeAccordion}>
        <span>{title}</span>{" "}
        <img
          src={DownArrow}
          alt="arrow icon"
          className="arrow-icon"
          ref={arrowIcon}
        />
      </button>
      <div className="panel" ref={accordionBtn}>
        {Links.map((link, index) => {
          const { loc, desc } = link;
          return (
            <Link to={loc} key={index} onClick={logLoadEvent}>
              {desc}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
