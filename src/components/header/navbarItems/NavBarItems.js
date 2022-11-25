/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import userPhoto from "../../../assests/img/images.jpg";
import { Link, useNavigate } from "react-router-dom";

const NavbarItems = () => {
  const navigate = useNavigate();
  const goPro = () => navigate("/pro");
  return (
    <>
      <Link to="/">Home</Link>

      <Link to="/catalog">Course Catalog</Link>

      <Link to="/resources">Resources</Link>

      <Link to="/community">Community</Link>

      <Link to="/pricing">Plans + Pricing</Link>
      <img
        src={userPhoto}
        alt="User"
        className="navbarItems__icon user-photo"
      />
      <button className="navbarItems__btn btn" onClick={goPro}>
        Try pro for free
      </button>
    </>
  );
};

export default NavbarItems;
