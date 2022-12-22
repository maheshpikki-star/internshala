import React from "react";
import Apxor from "apxor";

const ExploreCard = ({ title, svg }) => {
  const handleClick = (e) => {
    Apxor.logEvent("BannerPageViewed", {
      "Banner section": "Most Popular",
      "Banner name": title,
      "Banner type": "Blog",
    });
    return true;
  };
  return (
    <a href="#" className="catalogCard exploreCard" onClick={handleClick}>
      <img src={svg} alt="" />
      <h3>{title}</h3>
    </a>
  );
};

export default ExploreCard;
