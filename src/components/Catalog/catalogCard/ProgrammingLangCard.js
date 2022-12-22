import React from "react";
import Apxor from "apxor";

const ProgrammingLangCard = ({ title }) => {
  const handleClick = (e) => {
    Apxor.logEvent("BannerPageViewed", {
      "Banner section": "Most Popular",
      "Banner name": title,
      "Banner type": "Programming Article",
    });
    return true;
  };
  return (
    <a href="#" className="catalogCard programmingLang" onClick={handleClick}>
      <p>
        <span className="programmingLang-difficulty">pro</span> career path
      </p>
      <h3>{title}</h3>
      <div className="course__level">
        <div className="course__level--dot dot-fill"></div>
        <div className="course__level--dot"></div>
        <div className="course__level--difficulty">Beginner friendly</div>
      </div>
      <p className="programmingLang--job">job essentials</p>
    </a>
  );
};

export default ProgrammingLangCard;
