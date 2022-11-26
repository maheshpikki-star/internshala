import React from "react";
import GooglePlayIcon from "../../../assests/svg/googleplay.svg";
import AppleStoreIcon from "../../../assests/svg/applestore.svg";
import { Link } from "react-router-dom";
// import Info from "./Info";
const CompanyInfo = () => {
  return (
    <div className="infoContainer">
      <div className="footerItems">
        <h3 className="footerItems__title">Company</h3>
        <div className="footerItems__items">
          <Link to="/about">About</Link>
          <Link to="/hiring">We're Hiring</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
      <div className="footerItems">
        <h3 className="footerItems__title">Resources</h3>
        <div className="footerItems__items">
          <Link to="/blog">Blog</Link>
          <Link to="/cheatsheets">CheatSheets</Link>
          <Link to="/articles">Articles</Link>
        </div>
      </div>

      <div className="footerItems">
        <h3 className="footerItems__title">Support</h3>
        <div className="footerItems__items">
          <Link to="/help">Help Center</Link>
        </div>
      </div>
      <div className="footerItems">
        <h3 className="footerItems__title">Community</h3>
        <div className="footerItems__items">
          <Link to="/forums">forums</Link>
          <Link to="/chapters">Chapter</Link>
          <Link to="/events">Events</Link>
        </div>
      </div>

      <div className="footerItems">
        <h3 className="footerItems__title">Individual plans</h3>
        <div className="footerItems__items">
          <Link to="/promember">Pro membership</Link>
          <Link to="/prostudent">pro students</Link>
        </div>
      </div>
      <div className="footerItems">
        <h3 className="footerItems__title">Enterprise plans</h3>
        <div className="footerItems__items">
          <Link to="/business">for business</Link>
          <Link to="/education">for education</Link>
        </div>
      </div>

      <div className="footerItems">
        <h3 className="footerItems__title">Mobile</h3>
        <div className="footerItems__items mobileIcon">
          <Link to="/playstore">
            <img
              src={GooglePlayIcon}
              alt="googleplay icon"
              className="googleplayIcon"
            />
          </Link>
          <Link to="/appstore">
            <img src={AppleStoreIcon} alt="applestore icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
