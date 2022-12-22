import React from "react";
import course from "../../../assests/svg/agenda.svg";
import community from "../../../assests/svg/chat-group.svg";
import home from "../../../assests/svg/home.svg";
import book from "../../../assests/svg/book.svg";
import userPhoto from "../../../assests/svg/person-circle.svg";
import { Link } from "react-router-dom";
import Apxor from "apxor";

const DropDownItems = () => {
  const logPageEvent = (e, eventName, status) => {
    Apxor.logEvent(eventName, {
      Status: status,
    });
  };
  return (
    <>
      <Link to="/" onClick={(e) => logPageEvent(e, "HomePageViewed", "ON")}>
        <img src={home} alt="home icon" className="navbar__icon--md" />
        Home
      </Link>

      <Link
        to="/catalog"
        onClick={(e) => logPageEvent(e, "CourseCatalogPageViewed", "OFF")}
      >
        <img src={course} alt="course icon" className="navbar__icon--md" />
        Course Catalog
      </Link>

      <Link
        to="/resources"
        onClick={(e) => logPageEvent(e, "ResourcesPageViewed", "OFF")}
      >
        <img src={book} alt="book icon" className="navbar__icon--md" />
        Resources
      </Link>

      <Link
        to="/community"
        onClick={(e) => logPageEvent(e, "CommunityPageViewed", "OFF")}
      >
        <img
          src={community}
          alt="community icon"
          className="navbar__icon--md"
        />
        Community
      </Link>

      <Link to="/" onClick={(e) => logPageEvent(e, "ProfilePageViewed", "OFF")}>
        <img
          src={userPhoto}
          alt="User"
          className="navbar__icon--md user-photo"
        />
        Me
      </Link>
    </>
  );
};

export default DropDownItems;
