import React from "react";
import "../components/styles/navbar.scss";
import Logo from "./../logo/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to={"/?cat=art"}>
            <h6>ART</h6>
          </Link>
          <Link className="link" to={"/?cat=science"}>
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to={"/?cat=technology"}>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to={"/?cat=cinema"}>
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to={"/?cat=deign"}>
            <h6>DEIGN</h6>
          </Link>
          <Link className="link" to={"/?cat=food"}>
            <h6>FOOD</h6>
          </Link>
          <span>Jonh</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
