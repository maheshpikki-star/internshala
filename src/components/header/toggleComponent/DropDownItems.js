import React from "react";
import course from "../../../assests/svg/agenda.svg";
import community from "../../../assests/svg/chat-group.svg";
import price from "../../../assests/svg/dollar.svg";
import home from "../../../assests/svg/home.svg";
import book from "../../../assests/svg/book.svg";
import userPhoto from "../../../assests/svg/person-circle.svg";
import { Link } from "react-router-dom";

const DropDownItems = () => {
  return (
    <>
      <Link to="/">
        <img src={home} alt="home icon" className="navbar__icon--md" />
        Home
      </Link>

      <Link to="/catalog">
        <img src={course} alt="course icon" className="navbar__icon--md" />
        Course Catalog
      </Link>

      <Link to="/resources">
        <img src={book} alt="book icon" className="navbar__icon--md" />
        Resources
      </Link>

      <Link to="/community">
        <img
          src={community}
          alt="community icon"
          className="navbar__icon--md"
        />
        Community
      </Link>

      <Link to="/pricing">
        <img src={price} alt="price icon" className="navbar__icon--md" />
        Plans + Pricing
      </Link>

      <Link to="/">
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
