import React from "react";
import userPhoto from "../../../assests/img/images.jpg";
import { Link, useNavigate } from "react-router-dom";
import Apxor from "apxor";

const NavbarItems = () => {
  const navigate = useNavigate();
  const goPro = () => navigate("/pro");
  const logPageEvent = (e, eventName, status) => {
    Apxor.logEvent(eventName, {
      Status: status,
    });
  };
  return (
    <>
      <Link to="/" onClick={(e) => logPageEvent(e, "HomePageViewed", "ON")}>
        Home
      </Link>

      <Link
        to="/catalog"
        onClick={(e) => logPageEvent(e, "CourseCatalogPageViewed", "OFF")}
      >
        Course Catalog
      </Link>

      <Link
        to="/resources"
        onClick={(e) => logPageEvent(e, "ResourcesPageViewed", "OFF")}
      >
        Resources
      </Link>

      <Link
        to="/community"
        onClick={(e) => logPageEvent(e, "CommunityPageViewed", "OFF")}
      >
        Community
      </Link>

      <img
        src={userPhoto}
        alt="User"
        className="navbarItems__icon user-photo"
        onClick={(e) => logPageEvent(e, "ProfilePageViewed", "OFF")}
      />
    </>
  );
};

export default NavbarItems;
