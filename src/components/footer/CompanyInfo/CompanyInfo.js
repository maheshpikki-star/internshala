import React from "react";
const CompanyInfo = () => {
  return (
    <div className="infoContainer">
      <div className="footerItems">
        <div className="footerItems__items">
          <a href="/about.html" target="_blank">
            ABOUT
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="/community"
          >
            CONTACT US
          </a>
          <a href="/usecases.html" target="_blank">
            Use Cases
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
