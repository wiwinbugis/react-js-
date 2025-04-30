import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyWebsite</h2>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/team" className="nav-link">
          Team
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
