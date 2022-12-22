import React from "react";
import Apxor from "apxor";

const GetInspireLink = ({ contentType, title }) => {
  const handleClick = (e) => {
    Apxor.logEvent("BannerPageViewed", {
      "Banner section": "Get Inspired",
      "Banner name": title,
      "Banner type": "Article",
    });
    return true;
  };
  return (
    <div className="getInspireLink">
      <p>{contentType}</p>
      <a href="#" onClick={handleClick}>
        {title}
      </a>
    </div>
  );
};

export default GetInspireLink;
