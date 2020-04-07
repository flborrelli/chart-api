import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import page1Img from "../../assets/circle-dot.png";
import page2Img from "../../assets/leaf.png";

function NavBar() {
  return (
    <nav className="navbar-container">
      <p>Semantix</p>

      <NavLink
        to="/"
        exact
        activeStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
        style={{ textDecoration: "none", marginBottom: "49px" }}
      >
        <div>
          <img src={page1Img} alt="circle-dot-icon" />
          <p>Page1</p>
        </div>
      </NavLink>

      <NavLink
        to="/page2"
        activeStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
        style={{ textDecoration: "none", width: "105px", height: "85px" }}
      >
        <div>
          <img src={page2Img} alt="leaf" />
          <p>Page2</p>
        </div>
      </NavLink>
    </nav>
  );
}

export default NavBar;
